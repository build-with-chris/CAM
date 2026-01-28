# E-Mail-Setup für Kontaktformular

## ✅ Bereits erledigt

- ✅ E-Mail-Adresse `info@xn--circusakademiemnchen-3ec.de` in allen Komponenten eingetragen
- ✅ API-Route `/api/contact` erstellt
- ✅ Kontaktformular mit API-Route verbunden

## 🔧 Was noch zu tun ist

### 1. E-Mail-Service auswählen und installieren

Du hast mehrere Optionen:

#### Option A: Resend (empfohlen - einfach und modern)
```bash
npm install resend
```

#### Option B: Nodemailer (flexibel - funktioniert mit jedem SMTP-Server)
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

#### Option C: SendGrid
```bash
npm install @sendgrid/mail
```

### 2. Umgebungsvariablen einrichten

Erstelle eine `.env.local` Datei im Projektroot:

**Für Resend:**
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

**Für Nodemailer (SMTP):**
```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=deine-email@example.com
SMTP_PASS=dein-passwort
SMTP_FROM=noreply@xn--circusakademiemnchen-3ec.de
```

**Für SendGrid:**
```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
```

### 3. API-Route implementieren

Öffne `src/app/api/contact/route.ts` und entferne die Kommentare, um den E-Mail-Versand zu aktivieren.

**Beispiel mit Resend:**
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Kontaktformular <noreply@xn--circusakademiemnchen-3ec.de>',
  to: 'info@xn--circusakademiemnchen-3ec.de',
  replyTo: email,
  subject: `Kontaktformular: ${subject || 'Allgemein'}`,
  html: `
    <h2>Neue Nachricht vom Kontaktformular</h2>
    <p><strong>Von:</strong> ${name} (${email})</p>
    <p><strong>Betreff:</strong> ${subject || 'Allgemein'}</p>
    <p><strong>Nachricht:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `,
});
```

### 4. Domain-Verifizierung

- **Resend**: Domain in Resend Dashboard verifizieren
- **Nodemailer**: SMTP-Zugangsdaten von deinem E-Mail-Provider erhalten
- **SendGrid**: Domain in SendGrid verifizieren

### 5. Spam-Schutz (optional, aber empfohlen)

Für Produktion solltest du Spam-Schutz hinzufügen:

- **reCAPTCHA v3** (Google)
- **hCaptcha**
- **Rate Limiting** (z.B. mit `@upstash/ratelimit`)

### 6. Testing

1. Lokal testen mit `npm run dev`
2. Formular ausfüllen und absenden
3. Prüfen, ob E-Mail ankommt
4. Fehlerbehandlung testen (ungültige E-Mail, etc.)

## 📝 Wichtige Hinweise

- **Datenschutz**: Stelle sicher, dass die Datenschutzerklärung den E-Mail-Versand abdeckt
- **Backup**: Überlege dir, ob du E-Mails auch in einer Datenbank speichern möchtest
- **Monitoring**: Setze Error-Tracking ein (z.B. Sentry) für Produktion
- **Rate Limiting**: Schütze deine API vor Missbrauch

## 🔒 Sicherheit

- Niemals API-Keys in den Code committen
- Verwende immer `.env.local` (ist bereits in `.gitignore`)
- Validiere alle Eingaben serverseitig (bereits implementiert)
- Verwende HTTPS in Produktion
