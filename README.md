# Website des Circus Akademie München e.V.

Die Vereinsseite unter circusakademiemünchen.de. Sie zeigt, wer hinter dem Pepe Dome steht: für Förderer, Sponsoren und Menschen, die Mitglied werden wollen.

## Technik

- Next.js 16 (App Router), React 19, TypeScript 6
- Tailwind CSS 4, die Design-Tokens stehen in `src/app/globals.css`
- Nodemailer für die drei Formulare
- Hosting bei Vercel

## Befehle

```bash
npm install        # Abhängigkeiten installieren
npm run dev        # Entwicklungsserver auf http://localhost:3000
npm run lint       # ESLint
npm run typecheck  # TypeScript ohne Ausgabe
npm run build      # Produktions-Build
```

Vor jedem Push laufen Lint, Typecheck und Build durch, und die geänderte Seite wird einmal im Browser angesehen.

## Aufbau

```
src/
  app/                  Seiten und API-Routen
    layout.tsx          Kopf, Fuß und Skip-Link stehen nur hier
    api/contact         Kontakt- und Sponsoring-Anfragen
    api/membership      Mitgliedsantrag mit Eingangsbestätigung
  components/
    layout/             Header, Footer, Seitenkopf, Lesetext
    sections/           Abschnitte der Startseite
    ui/                 Button, Card, Section, Bild, Formularfelder
  content/site.ts       alle Texte und Bildangaben
  lib/mail.ts           gemeinsamer Mailversand und HTML-Escaping
public/images/          Fotos und Logos
```

## Inhalte ändern

Alle Texte stehen in `src/content/site.ts`. Die Seiten lesen von dort, in den Komponenten steht kein Fließtext.

## Bilder

- Bilder liegen unter `public/images/`. Dateinamen ohne Leerzeichen und Umlaute.
- Längste Kante höchstens 2400 px, keine Datei über 500 KB. Kamera-Originale gehören nicht ins Repo.
- Jedes Bild bekommt Breite, Höhe und einen Alt-Text, der beschreibt, was zu sehen ist. Bei den Disziplinen steht das in `site.ts`.
- Eingebunden wird über `src/components/ui/Bild.tsx`. Das Feld `credit` nimmt den Namen der Fotografin oder des Fotografen auf, sobald er vorliegt.

## Design

- DOME Blue `#016dca` ist die einzige kräftige Farbe, heller `#0180e8`, dunkler `#015ab0`.
- Schriften wie beim Pepe Dome: Outfit für Überschriften, Inter für Fließtext.
- Bausteine: `Seitenkopf` für den Kopf einer Unterseite, `Section` für Abschnitte, `Lesetext` für Impressum, AGB und Datenschutz.

## Formulare und Mail

Kontakt, Sponsoring und Mitgliedsantrag gehen per SMTP an `info@circusakademiemünchen.de`. Das Sponsoring-Formular nutzt die Kontakt-Route mit dem Betreff „Sponsoring“.

Die Zugangsdaten kommen aus Umgebungsvariablen. Lokal stehen sie in `.env.local`, auf Vercel in den Projekteinstellungen.

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=konto@example.com
SMTP_PASS=...
SMTP_FROM=noreply@xn--circusakademiemnchen-3ec.de
```

- Port 465 schaltet TLS von Anfang an ein, jeder andere Port nutzt STARTTLS.
- `SMTP_FROM` ist optional. Fehlt es, steht das SMTP-Konto als Absender.
- Spam-Schutz ist bisher nur ein Honeypot-Feld. Eine Ratenbegrenzung gibt es noch nicht.
- Zugangsdaten nie in eine getrackte Datei schreiben. `.env.local` steht in der `.gitignore`.

Zum Testen ohne echten Mailserver reicht ein lokaler Mail-Catcher, auf den `SMTP_HOST` und `SMTP_PORT` zeigen.

## shadcn-Registry

`components.json` liest den Schlüssel für die Registry von shadcnblocks aus der Variable `SHADCN_BLOCKS_API_KEY` in `.env.local`.

## Deployment

- `main` ist Produktion auf der echten Domain.
- Jeder andere Branch bekommt bei Vercel eine Vorschau.
- Alte Adressen wie `/ort` oder `/aktuelles` leiten weiter, die Liste steht in `next.config.mjs`.

© Circus Akademie München e.V. Alle Rechte vorbehalten.
