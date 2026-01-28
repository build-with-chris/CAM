import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website } = body;

    // Honeypot-Validierung: Wenn das versteckte Feld ausgefüllt ist, ist es Spam
    if (website && website.trim() !== '') {
      // Spam erkannt - aber wir geben keine Fehlermeldung, um Bots nicht zu warnen
      console.log('Spam erkannt (Honeypot):', { email, website });
      return NextResponse.json(
        { message: 'Nachricht erfolgreich gesendet.' },
        { status: 200 }
      );
    }

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Bitte fülle alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    // Nodemailer-Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true für Port 465, false für andere Ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // E-Mail versenden
    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Kontaktformular" <${process.env.SMTP_USER}>`,
      to: 'info@xn--circusakademiemnchen-3ec.de',
      replyTo: email,
      subject: `Kontaktformular: ${subject || 'Allgemein'}`,
      html: `
        <h2>Neue Nachricht vom Kontaktformular</h2>
        <p><strong>Von:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject || 'Allgemein'}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Diese E-Mail wurde über das Kontaktformular auf der Website gesendet.</p>
      `,
      text: `
Neue Nachricht vom Kontaktformular

Von: ${name}
E-Mail: ${email}
Betreff: ${subject || 'Allgemein'}

Nachricht:
${message}

---
Diese E-Mail wurde über das Kontaktformular auf der Website gesendet.
      `,
    });

    // Erfolgreiche Antwort
    return NextResponse.json(
      { message: 'Nachricht erfolgreich gesendet.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    return NextResponse.json(
      { error: 'Fehler beim Senden der Nachricht. Bitte versuche es später erneut.' },
      { status: 500 }
    );
  }
}
