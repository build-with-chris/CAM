import { NextRequest, NextResponse } from 'next/server';
import {
  EMAIL_REGEX,
  VEREIN_EMAIL,
  absender,
  createTransport,
  einzeilig,
  escapeHtml,
  escapeHtmlMehrzeilig,
  feld,
} from '@/lib/mail';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = einzeilig(body?.name, 200);
    const email = einzeilig(body?.email, 320);
    const subject = einzeilig(body?.subject, 150) || 'Allgemein';
    const message = feld(body?.message, 5000);
    const website = feld(body?.website, 200);

    // Honeypot-Validierung: Wenn das versteckte Feld ausgefüllt ist, ist es Spam
    if (website !== '') {
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
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    // E-Mail versenden
    await createTransport().sendMail({
      from: absender('Kontaktformular'),
      to: VEREIN_EMAIL,
      replyTo: email,
      subject: `Kontaktformular: ${subject}`,
      html: `
        <h2>Neue Nachricht vom Kontaktformular</h2>
        <p><strong>Von:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Betreff:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${escapeHtmlMehrzeilig(message)}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Diese E-Mail wurde über das Kontaktformular auf der Website gesendet.</p>
      `,
      text: `
Neue Nachricht vom Kontaktformular

Von: ${name}
E-Mail: ${email}
Betreff: ${subject}

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
