import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NACHRICHT_MAX_LENGTH = 1000;

function sanitize(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .slice(0, 500)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function sanitizeLong(str: string, max: number): string {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .slice(0, max)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      vorname,
      nachname,
      strasse,
      plz,
      ort,
      email,
      telefon,
      mitgliedsart,
      nachricht,
      checkboxAntrag,
      checkboxDatenschutz,
      checkboxSatzung,
      website,
    } = body;

    // Honeypot
    if (website && String(website).trim() !== '') {
      console.log('Spam erkannt (Honeypot):', { email, website });
      return NextResponse.json(
        { message: 'Antrag wurde übermittelt.' },
        { status: 200 }
      );
    }

    // Pflichtfelder
    if (
      !vorname?.trim() ||
      !nachname?.trim() ||
      !strasse?.trim() ||
      !plz?.trim() ||
      !ort?.trim() ||
      !email?.trim() ||
      !mitgliedsart?.trim()
    ) {
      return NextResponse.json(
        { error: 'Bitte fülle alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(String(email).trim())) {
      return NextResponse.json(
        { error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    if (!checkboxAntrag || !checkboxDatenschutz) {
      return NextResponse.json(
        { error: 'Bitte bestätige die erforderlichen Checkboxen.' },
        { status: 400 }
      );
    }

    const nachrichtTrim = nachricht ? String(nachricht).trim() : '';
    if (nachrichtTrim.length > NACHRICHT_MAX_LENGTH) {
      return NextResponse.json(
        { error: `Nachricht an den Vorstand darf maximal ${NACHRICHT_MAX_LENGTH} Zeichen haben.` },
        { status: 400 }
      );
    }

    // E-Mail an Vorstand (info@circusakademiemünchen.de, IDN für SMTP)
    const vorstandEmail = 'info@xn--circusakademiemnchen-3ec.de';
    const vorstandEmailDisplay = 'info@circusakademiemünchen.de';

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const v = sanitize(String(vorname));
    const n = sanitize(String(nachname));
    const subj = `Mitgliedsantrag – ${v} ${n} – ${sanitize(String(mitgliedsart))}`;
    const ts = new Date().toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short' });
    const ua = request.headers.get('user-agent') || '';
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? String(forwarded).split(',')[0].trim() : '';

    const htmlBody = `
      <h2>Neuer Mitgliedsantrag</h2>
      <p><strong>Vorname:</strong> ${v}</p>
      <p><strong>Nachname:</strong> ${sanitize(String(nachname))}</p>
      <p><strong>Straße &amp; Hausnummer:</strong> ${sanitize(String(strasse))}</p>
      <p><strong>PLZ:</strong> ${sanitize(String(plz))}</p>
      <p><strong>Ort:</strong> ${sanitize(String(ort))}</p>
      <p><strong>E-Mail:</strong> ${sanitize(String(email))}</p>
      <p><strong>Telefon:</strong> ${telefon ? sanitize(String(telefon)) : '–'}</p>
      <p><strong>Mitgliedsart:</strong> ${sanitize(String(mitgliedsart))}</p>
      <p><strong>Nachricht an den Vorstand:</strong></p>
      <p>${nachrichtTrim ? sanitizeLong(nachrichtTrim, NACHRICHT_MAX_LENGTH).replace(/\n/g, '<br>') : '–'}</p>
      <p><strong>Ich beantrage hiermit die Mitgliedschaft:</strong> ja</p>
      <p><strong>Datenschutzhinweise gelesen und einverstanden:</strong> ja</p>
      <p><strong>Ich erkenne die Satzung an:</strong> ${checkboxSatzung ? 'ja' : 'nein'}</p>
      <hr>
      <p style="color:#666;font-size:12px;">Eingang: ${ts}${ip ? ` | IP: ${ip}` : ''}${ua ? ` | User-Agent: ${ua.slice(0, 200)}` : ''}</p>
      <p style="color:#666;font-size:12px;"><strong>Bitte Aufnahme/Status kurz bestätigen.</strong></p>
    `;

    const textBody = `
Neuer Mitgliedsantrag

Vorname: ${v}
Nachname: ${sanitize(String(nachname))}
Straße & Hausnummer: ${sanitize(String(strasse))}
PLZ: ${sanitize(String(plz))}
Ort: ${sanitize(String(ort))}
E-Mail: ${sanitize(String(email))}
Telefon: ${telefon ? sanitize(String(telefon)) : '–'}
Mitgliedsart: ${sanitize(String(mitgliedsart))}

Nachricht an den Vorstand:
${nachrichtTrim || '–'}

Ich beantrage hiermit die Mitgliedschaft: ja
Datenschutzhinweise gelesen und einverstanden: ja
Ich erkenne die Satzung an: ${checkboxSatzung ? 'ja' : 'nein'}

---
Eingang: ${ts}${ip ? ` | IP: ${ip}` : ''}
Bitte Aufnahme/Status kurz bestätigen.
    `.trim();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Mitgliedsantrag" <${process.env.SMTP_USER}>`,
      to: vorstandEmail,
      replyTo: String(email).trim(),
      subject: subj,
      html: htmlBody,
      text: textBody,
    });

    // Auto-Reply an Antragsteller
    const autoReplyHtml = `
      <p>Hallo ${v},</p>
      <p>vielen Dank für deinen Mitgliedsantrag beim Circus Akademie München e.V.</p>
      <p>Dein Antrag ist bei uns eingegangen. Die Mitgliedschaft wird nach Entscheidung des Vorstands wirksam. Du erhältst dazu eine Rückmeldung.</p>
      <p>Bei Rückfragen erreichst du uns unter: <a href="mailto:${vorstandEmail}">${vorstandEmailDisplay}</a></p>
      <p>Viele Grüße,<br>Vorstand Circus Akademie München e.V.</p>
    `;
    const autoReplyText = `
Hallo ${v},

vielen Dank für deinen Mitgliedsantrag beim Circus Akademie München e.V.

Dein Antrag ist bei uns eingegangen. Die Mitgliedschaft wird nach Entscheidung des Vorstands wirksam. Du erhältst dazu eine Rückmeldung.

Bei Rückfragen erreichst du uns unter: ${vorstandEmailDisplay}

Viele Grüße,
Vorstand Circus Akademie München e.V.
    `.trim();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Circus Akademie München e.V." <${process.env.SMTP_USER}>`,
      to: String(email).trim(),
      subject: 'Eingangsbestätigung Mitgliedsantrag',
      html: autoReplyHtml,
      text: autoReplyText,
    });

    return NextResponse.json(
      { message: 'Mitgliedsantrag erfolgreich übermittelt.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fehler beim Verarbeiten des Mitgliedsantrags:', error);
    return NextResponse.json(
      { error: 'Fehler beim Senden des Antrags. Bitte versuche es später erneut.' },
      { status: 500 }
    );
  }
}
