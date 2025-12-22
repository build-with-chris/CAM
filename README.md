# Circus Akademie München e.V. Website

Eine moderne, barrierefreie Website für die Circus Akademie München e.V., entwickelt mit Next.js, React und Tailwind CSS.

## Features

- **Modern & Responsiv**: Vollständig responsive Design, optimiert für alle Geräte
- **Barrierearm**: Semantisches HTML, gute Kontraste, Focus States
- **Performance**: Next.js App Router für schnelle Ladezeiten
- **Komponenten-basiert**: Wiederverwendbare UI-Komponenten

## Technologie-Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18
- **Styling**: Tailwind CSS
- **Sprache**: TypeScript

## Installation

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen
npm run build

# Produktionsserver starten
npm start
```

Die Website ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Globale Styles
├── components/
│   ├── layout/            # Layout-Komponenten
│   │   ├── Header.tsx     # Navigation
│   │   └── Footer.tsx     # Footer
│   ├── sections/          # Sektionen der Homepage
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Programs.tsx
│   │   ├── Location.tsx
│   │   ├── JoinUs.tsx
│   │   ├── News.tsx
│   │   └── Contact.tsx
│   └── ui/                # Wiederverwendbare UI-Komponenten
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Section.tsx
│       └── Container.tsx
```

## Inhalte

Die Website beinhaltet folgende Sektionen:

1. **Hero**: Willkommensbereich mit Hauptbild
2. **Über uns**: Vorstellung des Vereins
3. **Programme**: Open Stage, Training, Workshops, Produktionen
4. **Ort**: Information über den Pepe Dome im Ostpark
5. **Mitmachen**: Verschiedene Möglichkeiten zur Teilnahme
6. **Aktuelles**: News und Termine
7. **Kontakt**: Kontaktformular und Informationen

## Anpassungen

### Farben

Die Farbpalette kann in `tailwind.config.ts` angepasst werden:

- `primary`: Hauptfarbe (Blautöne)
- `accent`: Akzentfarbe (Rosa-/Rottöne)

### Bilder

Aktuell werden Platzhalterbilder von `picsum.photos` verwendet. Ersetze diese durch echte Bilder:

1. Füge Bilder in `/public/images/` ein
2. Aktualisiere die `src`-Attribute in den Komponenten

### Texte

Alle Texte sind direkt in den Komponenten in `src/components/sections/` editierbar.

## Barrierefreiheit

- Semantisches HTML (nav, section, article, etc.)
- ARIA-Labels für interaktive Elemente
- Focus States für Tastaturnavigation
- Ausreichende Farbkontraste (WCAG AA)
- Alternative Texte für Bilder
- Responsive Typography

## Browser-Unterstützung

- Chrome (neueste 2 Versionen)
- Firefox (neueste 2 Versionen)
- Safari (neueste 2 Versionen)
- Edge (neueste 2 Versionen)

## Lizenz

© 2024 Circus Akademie München e.V. Alle Rechte vorbehalten.
