# Backend-Plan für die Vereinsseite

Stand: 17.11.2026. Dieses Dokument ist ein Plan, gebaut ist davon nichts. Die Wahl des CMS ist die einzige schwer umkehrbare Entscheidung im Vorhaben und verdient eine eigene Runde.

## Ausgangslage

- Alle Seitentexte stehen in `src/content/site.ts` (rund 530 Zeilen). Wer etwas ändern will, braucht heute Git und einen Editor.
- Blogbeiträge sind Markdown-Dateien in `content/blog/` mit den Feldern `title`, `date`, `excerpt`, `cover`, `coverAlt`, `author`, `draft`.
- Bilder liegen in `public/images/`, verkleinert auf höchstens 2400 px und 500 KB.
- Die Seite ist statisch. Es gibt keine Datenbank und kein Login.

**Annahme:** 2 bis 5 Personen ohne technische Erfahrung pflegen später Inhalte. Was sich bei einer anderen Antwort ändert, steht unter „Wenn die Annahme nicht stimmt“.

## Was gepflegt werden soll

| Inhalt | Wie oft | Wer |
|---|---|---|
| Blogbeiträge mit Titelbild | regelmäßig | Redaktion |
| Texte der Seiten (Startseite, Über uns, Förderung, Sponsoring) | selten | Vorstand |
| Bilder mit Alt-Text und Fotografennamen | mit jedem Beitrag | Redaktion |
| Logos von Unterstützern, Unterlagen als PDF | selten | Vorstand |

## Die drei Wege im Vergleich

| | 1. Backend des Pepe Dome mitnutzen | 2. Payload CMS in der App | 3. Git-basiert mit Keystatic |
|---|---|---|---|
| **Was es ist** | Der Adminbereich von pepe-dome.de bekommt einen Bereich für den Verein. Die Vereinsseite holt die Beiträge von dort. | Ein vollständiges CMS läuft in derselben Next-App unter `/admin`, mit eigener Datenbank. | Eine Eingabemaske unter `/keystatic` schreibt dieselben Dateien, die heute im Repo liegen. |
| **Aufwand** | mittel, in zwei Repos | hoch | niedrig bis mittel |
| **Laufende Kosten** | voraussichtlich keine zusätzlichen | Datenbank und Dateispeicher, bei dieser Größe voraussichtlich in den kostenlosen Tarifen | keine bis 3 Personen, darüber ein kleiner Monatsbetrag |
| **Bedienbarkeit** | gut, wenn die Redaktion den Pepe-Dome-Admin schon kennt. Sonst ein fremdes, großes Werkzeug. | sehr gut: Vorschau, Entwürfe, Medienverwaltung | gut: einfache Formulare. Eine Änderung ist erst nach dem Vercel-Build online, das dauert ein bis zwei Minuten. |
| **Rechteverwaltung** | vorhanden: Anmeldung, Rollen, Freigabe neuer Konten durch einen Super-Admin. Es fehlt eine Rolle nur für Vereinsinhalte. | vorhanden und fein einstellbar, bis auf einzelne Felder | grob: Wer Zugang hat, darf alles ändern |
| **Abhängigkeit** | Die Vereinsseite hängt an der App des Pepe Dome. Fällt sie aus oder wird umgebaut, trifft das den Verein. | Updates von Payload sind an bestimmte Next-Versionen gebunden. Datenbank und Backups müssen betreut werden. | gering. Die Inhalte bleiben Dateien im Repo, mit Verlauf. |
| **Umkehrbarkeit** | mittel | gering | hoch |

### Weg 1 im Detail: Backend des Pepe Dome

Das Pepe-Dome-Projekt hat bereits, was ein Blog braucht:

- einen Adminbereich mit Anmeldung über Clerk
- Rollen und einen Freigabeprozess für neue Konten
- ein Modell `Article` mit Entwurf und Veröffentlichung, Titel, Kurztext, Inhalt, Autor und Bild
- eine Postgres-Datenbank

Was dazukäme:

1. Ein Feld am Artikel, das sagt, ob er zum Dome oder zum Verein gehört.
2. Eine Rolle „Redaktion Verein“, die nur Vereinsbeiträge sieht.
3. Eine öffentliche Schnittstelle, die veröffentlichte Vereinsbeiträge ausliefert.
4. Auf der Vereinsseite: Beiträge von dort laden und nach einer Änderung neu bauen.

Grenzen:

- Es löst nur den Blog. Die Seitentexte aus `site.ts` passen nicht in das Artikelmodell und bräuchten eigene Modelle.
- Verein und Pepe Dome teilen sich dann Datenbank und Login. Ob das organisatorisch gewollt ist, muss der Vorstand entscheiden. Für Förderer kann eine saubere Trennung von Verein und Betrieb wichtig sein.
- Die Tarife von Clerk und der Datenbank des Pepe Dome habe ich nicht geprüft. Zusätzliche Redakteure können dort ins Gewicht fallen.

### Weg 2 im Detail: Payload CMS

- Payload 3 läuft innerhalb einer Next-App. Next 16 wird seit Version 3.73 unterstützt, die aktuelle Dokumentation nennt Next 16.4 und Node 24.15 als Mindestversionen.
- Als Datenbank gehen Postgres, MongoDB oder SQLite. Naheliegend wäre Postgres bei Neon, der kostenlose Tarif nennt 1 GB Speicher pro Projekt.
- Bilder bräuchten einen Dateispeicher, zum Beispiel Vercel Blob. Der Hobby-Tarif nennt 1 GB Speicher im Monat.
- Rollen, Entwürfe, Vorschau und Medienverwaltung sind eingebaut.

Preis dafür: Die Seite ist danach nicht mehr statisch. Sie braucht eine Datenbank beim Bauen und im Betrieb, Backups, eine Erweiterung der Datenschutzerklärung und jemanden, der Updates einspielt.

### Weg 3 im Detail: Keystatic

- Keystatic ist Open Source und kostenlos. Es speichert Inhalte als Dateien im Repo, genau wie heute.
- Im GitHub-Modus erzeugt jede Änderung einen Commit, Vercel baut danach neu.
- Für die Anmeldung gibt es zwei Möglichkeiten: jede Person hat ein GitHub-Konto, oder Keystatic Cloud übernimmt die Anmeldung. Laut Dokumentation können Teammitglieder über die Cloud ohne GitHub-Konto arbeiten.
- Die Cloud ist nach einer Drittquelle bis 3 Personen pro Team kostenlos, darüber 10 US-Dollar im Monat pro Team plus 5 US-Dollar je weitere Person. Diese Zahlen stammen nicht von der Preisseite des Anbieters und sind vor einer Entscheidung zu prüfen.

Grenzen:

- Keine Rollen. Wer Zugang hat, kann jede Seite ändern.
- Keine automatische Bildverkleinerung. Ohne Schutz landen Kamera-Originale mit mehreren Megabyte im Repo. Das braucht eine Prüfung im Build.
- Keine Vorschau vor dem Veröffentlichen, nur das Feld `draft`.

## Empfehlung

**Weg 3, Keystatic.** Gründe:

1. Es ist der kleinste Schritt vom heutigen Stand. Der Blog ist schon so gebaut, dass die Felder eins zu eins passen.
2. Keine Datenbank, kein neuer Dienst mit Besucherdaten, die Datenschutzerklärung bleibt unberührt.
3. Bis 3 Personen fallen voraussichtlich keine laufenden Kosten an.
4. Jede Änderung steht im Git-Verlauf und lässt sich zurücknehmen.
5. Die Entscheidung ist umkehrbar. Die Inhalte bleiben strukturierte Dateien. Ein späterer Wechsel zu Payload ist ein Import, kein Neuanfang.

### Wenn die Annahme nicht stimmt

- **Nur eine Person pflegt, und die kann mit Git umgehen:** kein CMS. Der heutige Stand reicht.
- **Die Redaktion arbeitet ohnehin täglich im Pepe-Dome-Admin:** Weg 1 für den Blog. Die Seitentexte bleiben in `site.ts`.
- **Mehr als 5 Personen, getrennte Zuständigkeiten, Freigabe vor Veröffentlichung oder viele Bilder pro Woche:** Weg 2, Payload.

## Umzugsschritte für Weg 3

**Blog**

1. Keystatic installieren, Konfiguration mit einer Sammlung `blog` anlegen. Felder wie im heutigen Frontmatter, Inhalt als Markdown in `content/blog/`.
2. Adminseite unter `/keystatic` einrichten und lokal testen. `src/lib/blog.ts` bleibt, weil das Dateiformat gleich bleibt.
3. Im Build prüfen, dass kein Bild über 500 KB liegt und jedes Titelbild einen Alt-Text hat. Schlägt die Prüfung fehl, wird nicht veröffentlicht.

**Seitentexte aus `site.ts`**

4. `site.ts` in einzelne Inhaltsdateien aufteilen, eine je Seite: Startseite, Über uns, Unterstützen, Sponsoring, Förderung, Kontakt, Fußzeile.
5. Für jede Datei ein Formular in Keystatic anlegen. `site.ts` wird zum Lader, der die Dateien einliest. Die Seiten ändern sich dadurch nicht.
6. Disziplinen als Sammlung mit Bild, Maßen, Alt-Text und Fotografenname.

**Betrieb**

7. GitHub-Modus oder Keystatic Cloud verbinden, Redaktion einladen.
8. Einmal gemeinsam einen Beitrag veröffentlichen und einen Text ändern.
9. Eine Seite Anleitung für die Redaktion schreiben.

## Schätzung

Laufzeit von Claude, nicht Entwicklertage. Es sind Schätzungen, gemessen an den bisherigen Arbeiten in diesem Repo.

| Weg | Laufzeit | Zeit von Chris | Danach |
|---|---|---|---|
| 3. Keystatic, nur Blog | 1 bis 1,5 Stunden | 30 Minuten | nichts |
| 3. Keystatic, Blog und Seitentexte | 5 bis 6 Stunden | 1 bis 1,5 Stunden | nichts |
| 1. Pepe-Dome-Backend, nur Blog | 4 bis 6 Stunden in zwei Repos | 1 Stunde | Abstimmung bei jedem Umbau des Pepe-Dome-Admins |
| 2. Payload, Blog und Seitentexte | 10 bis 14 Stunden | 2 bis 3 Stunden | Updates, Backups, Datenschutz |

Sinnvoll ist, mit „Keystatic, nur Blog“ zu beginnen und den Menüpunkt Blog erst freizuschalten, wenn drei Beiträge fertig sind.

## Offene Fragen an den Vorstand

1. Wer pflegt Inhalte, und wie viele Personen sind es?
2. Soll vor dem Veröffentlichen jemand freigeben?
3. Sollen Verein und Pepe Dome technisch getrennt bleiben?
4. Hat die Redaktion GitHub-Konten, oder soll die Anmeldung ohne laufen?

## Quellen

Preise und Mindestversionen Stand November 2026. Vor einer Entscheidung auf den Seiten der Anbieter prüfen.

- Payload und Next 16: [Release 3.73.0](https://newreleases.io/project/npm/payload/release/3.73.0), [Installation](https://payloadcms.com/docs/getting-started/installation)
- Keystatic Cloud: [Dokumentation](https://476f7b75.keystatic.pages.dev/docs/cloud), Preise aus einer Drittquelle: [luckymedia.dev](https://www.luckymedia.dev/insights/keystatic)
- Neon, kostenloser Tarif: [neon.com](https://neon.com/faqs/free-plan-limits-and-quotas)
- Vercel Blob: [Nutzung und Preise](https://vercel.com/docs/vercel-blob/usage-and-pricing)
- Pepe-Dome-Backend: eigenes Repo `pepe-dome` (Prisma-Schema, Adminbereich, Rollen)
