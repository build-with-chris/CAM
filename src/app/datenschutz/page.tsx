import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Datenschutz | Circus Akademie München e.V.',
  description: 'Datenschutzerklärung des Circus Akademie München e.V.',
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Section id="datenschutz" background="white">
          <SectionHeader title="Datenschutzerklärung" />

          <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">1. Verantwortlicher</h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-2">
                Circus Akademie München e.V. (CAM e.V.)<br />
                Ranhazweg 18, 85521 Ottobrunn, Deutschland<br />
                E-Mail: <a href="mailto:info@pepearts.de" className="text-primary-600 hover:underline">info@pepearts.de</a>
              </p>
              <p className="mt-2">
                Einen Datenschutzbeauftragten haben wir nicht bestellt, da keine gesetzliche Pflicht besteht.
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
              <p>
                Wir verarbeiten personenbezogene Daten, wenn du unsere Website nutzt, uns kontaktierst, Tickets/Angebote buchst oder unseren Newsletter abonnierst. Personenbezogene Daten sind z.B. Name, E-Mail-Adresse, Telefonnummer, IP-Adresse.
              </p>
              <p className="mt-3 font-medium text-primary-900">Rechtsgrundlagen (Auswahl):</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag / vorvertragliche Maßnahmen)</li>
                <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, z.B. Newsletter, Cookies/Tracking)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse, z.B. sichere Bereitstellung der Website)</li>
                <li>Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung, z.B. Aufbewahrungsfristen)</li>
              </ul>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">3. Hosting (Vercel) und Server-Logfiles</h2>
              <p>
                Unsere Website wird bei Vercel gehostet. Beim Aufruf der Website werden durch den Hosting-Anbieter und/oder durch uns technisch notwendige Daten verarbeitet (sog. Server-Logfiles), z.B.:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>aufgerufene Seite/URL</li>
                <li>Referrer-URL</li>
                <li>Browser/Device/Betriebssystem</li>
                <li>Statuscodes / Datenmenge</li>
              </ul>
              <p className="mt-3">
                <strong>Zweck:</strong> Auslieferung der Website, Stabilität, Sicherheit, Fehleranalyse.<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb).
              </p>
              <p className="mt-2">
                Dabei kann es zu Datenübermittlungen in Drittstaaten (insb. USA) kommen. Details dazu siehe Abschnitt „Drittlandübermittlung“.
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">4. Cookies, Consent-Management</h2>
              <p>
                Wir verwenden Cookies und ähnliche Technologien. Einige sind technisch notwendig, andere dienen Statistik/Marketing (z.B. Google Analytics, Meta Pixel).
              </p>
              <p className="mt-2">
                Für nicht notwendige Cookies/Tools holen wir deine Einwilligung über ein Cookie-Banner/Consent-Tool ein (Anbieter wird ergänzt).<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), § 25 Abs. 1 TDDDG (Einwilligung für Speicherung/Auslesen von Informationen). Technisch notwendige Cookies: Art. 6 Abs. 1 lit. f DSGVO und § 25 Abs. 2 TDDDG.
              </p>
              <p className="mt-2">
                Du kannst deine Einwilligung jederzeit über die Einstellungen im Cookie-Banner widerrufen/ändern.
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">5. Google Fonts (Einbindung)</h2>
              <p>
                Auf dieser Website werden Google Fonts von Google-Servern geladen (nicht lokal eingebunden). Dabei kann u.a. deine IP-Adresse an Google übermittelt werden.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) – sofern über das Cookie-Banner gesteuert. Wenn keine Einwilligung eingeholt wird, muss die Einbindung technisch zwingend erforderlich sein – das ist bei Webfonts in der Regel nicht der Fall.
              </p>
              <p className="mt-2 text-muted-foreground">
                Hinweis: Wenn ihr die Fonts künftig lokal hostet, wird dieser Abschnitt entsprechend angepasst.
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">6. Kontaktaufnahme (Kontaktformular / E-Mail)</h2>
              <p>
                Wenn du uns per Formular kontaktierst, verarbeiten wir die von dir eingegebenen Daten: Name, E-Mail-Adresse, Telefonnummer, Nachricht. Die Übermittlung erfolgt per E-Mail. Zum Spam-Schutz nutzen wir einen Honeypot.
              </p>
              <p className="mt-2">
                <strong>Zweck:</strong> Bearbeitung deiner Anfrage.<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertraglich/vertraglich) oder Art. 6 Abs. 1 lit. f DSGVO (allgemeine Anfragen).<br />
                <strong>Speicherdauer:</strong> 6 Monate (danach Löschung, sofern keine gesetzlichen Pflichten entgegenstehen).
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">7. Newsletter (CleverReach)</h2>
              <p>
                Für den Newsletter nutzen wir CleverReach. Die Anmeldung erfolgt per Double-Opt-In. Dabei werden u.a. E-Mail-Adresse sowie Anmelde-/Bestätigungszeitpunkte verarbeitet, um die Anmeldung nachweisen zu können. Außerdem werden Öffnungen und Klicks getrackt (Erfolgsmessung).
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Du kannst den Newsletter jederzeit über den Abmeldelink in jeder Ausgabe abbestellen. Eine Segmentierung findet nicht statt.
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">8. Ticketing/Buchung über „rausgegangen“</h2>
              <p>
                Für Ticketkäufe/Buchungen nutzen wir aktuell den Dienstleister rausgegangen. Dabei werden die für die Buchung erforderlichen Daten (z.B. Kontaktdaten, Ticketdaten, ggf. Zahlungsabwicklung über deren Systeme) verarbeitet.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).<br />
                <strong>Speicherdauer:</strong> Buchungs- und Rechnungsdaten 10 Jahre (gesetzliche Aufbewahrung).
              </p>
              <p className="mt-2 text-muted-foreground">
                Wenn ihr später einen eigenen Shop ergänzt, wird die Datenschutzerklärung entsprechend erweitert.
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">9. Zahlungsabwicklung</h2>
              <p><strong>Online-Zahlungen (je nach Buchungsweg):</strong></p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>PayPal</li>
                <li>Stripe (ohne Apple Pay/Google Pay)</li>
              </ul>
              <p className="mt-2">
                Bei einer Zahlung werden die für die Zahlungsabwicklung erforderlichen Daten an den jeweiligen Zahlungsdienstleister übermittelt. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
              </p>
              <p className="mt-3"><strong>Vor-Ort-Zahlungen:</strong></p>
              <p>EC-Karte über Zettle. Auch hier werden Zahlungsdaten zur Abwicklung verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">10. Google Workspace (Rechnungen/Organisation)</h2>
              <p>
                Rechnungen und organisatorische Dokumente werden im Google Workspace gespeichert; für Fotos/Videos wird Google Drive genutzt (siehe auch Abschnitt Fotos/Videos). Dabei kann es zu Drittlandübermittlungen (USA) kommen.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertrag), Art. 6 Abs. 1 lit. c DSGVO (Aufbewahrung), Art. 6 Abs. 1 lit. f DSGVO (Organisation).
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">11. Webanalyse: Google Analytics</h2>
              <p>
                Wir nutzen Google Analytics zur statistischen Auswertung der Website-Nutzung (z.B. Seitenaufrufe, Verweildauer, Interaktionen). Dabei werden u.a. Cookies/IDs eingesetzt, die eine Wiedererkennung ermöglichen können.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Cookie-Banner) und § 25 Abs. 1 TDDDG. Daten können in die USA übertragen werden. Details dazu siehe „Drittlandübermittlung“.
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">12. Marketing: Meta Pixel (Facebook/Instagram)</h2>
              <p>
                Wir verwenden das Meta Pixel, um die Wirksamkeit von Werbemaßnahmen zu messen und Zielgruppen zu bilden (z.B. Conversion-Tracking, Remarketing). Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Cookie-Banner) und § 25 Abs. 1 TDDDG. Dabei kann eine Datenübermittlung in die USA stattfinden.
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">13. Eingebettete Inhalte: YouTube und Google Maps</h2>
              <p>
                Auf unserer Website sind Inhalte von Drittanbietern eingebettet: <strong>YouTube (Videos):</strong> Beim Laden eingebetteter Videos können Daten (z.B. IP-Adresse, Nutzungsdaten) an YouTube/Google übertragen werden. <strong>Google Maps:</strong> Bei Nutzung der Karte können Daten an Google übertragen werden.
              </p>
              <p className="mt-2">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), sofern die Einbettung über das Consent-Tool gesteuert wird. Wenn die Einbettung ohne Einwilligung direkt lädt, kann es bereits beim Seitenaufruf zu Datenübertragungen kommen.
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">14. Social Media Links</h2>
              <p>
                Im Footer verlinken wir auf unsere Social-Media-Profile. Es handelt sich um reine Links (keine automatisch ladenden Feeds/Plugins). Beim Laden unserer Website werden dadurch nicht automatisch Daten an die Plattformen übertragen – erst beim Anklicken des Links.
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">15. Foto- und Videoaufnahmen bei Veranstaltungen/Workshops</h2>
              <p>
                Bei Veranstaltungen/Workshops werden Fotos/Videos nur erstellt, wenn wir vorher um Einverständnis bitten. Personen, die nicht aufgenommen werden möchten, werden nicht abgelichtet. Für eine Veröffentlichung (Website/Social Media) fragen wir zusätzlich gesondert.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). <strong>Speicherung:</strong> Google Drive. <strong>Zugriff:</strong> Team sowie der jeweilige Fotograf; Fotografen erhalten Zugriff nur auf den jeweiligen Ordner.
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">16. Admin-Bereich (Artikel/Newsletter)</h2>
              <p>
                Es gibt einen internen Admin-Bereich zur Pflege von Artikeln und Newsletter-Inhalten. Dabei werden Zugangsdaten und Nutzungsdaten im Rahmen der Administration verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (sicherer Betrieb/Administration) sowie ggf. Art. 6 Abs. 1 lit. b DSGVO (vertragliche/organisatorische Erfordernisse).
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">17. Drittlandübermittlung (insb. USA)</h2>
              <p>
                Einige eingesetzte Dienstleister können Daten in Drittländer (insbesondere USA) übermitteln oder dort verarbeiten (z.B. Vercel, Google/YouTube/Maps, Google Analytics, Meta, Google Workspace/Drive). Soweit erforderlich, erfolgen Übermittlungen auf Grundlage geeigneter Garantien (z.B. EU-Standardvertragsklauseln) und ggf. zusätzlicher Schutzmaßnahmen, sofern der Anbieter diese bereitstellt.
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">18. Speicherdauer</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Kontaktanfragen: 6 Monate</li>
                <li>Buchungs- und Rechnungsdaten: 10 Jahre (gesetzliche Aufbewahrung)</li>
                <li>Newsletterdaten: bis zum Widerruf der Einwilligung / Abmeldung (Nachweisdaten können länger gespeichert werden, soweit erforderlich)</li>
              </ul>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">19. Deine Rechte</h2>
              <p>Du hast nach DSGVO insbesondere folgende Rechte:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16 DSGVO)</li>
                <li>Löschung (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen Verarbeitung auf Basis berechtigter Interessen (Art. 21 DSGVO)</li>
                <li>Widerruf von Einwilligungen jederzeit (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
              <p className="mt-2">
                Außerdem hast du das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren (Art. 77 DSGVO).
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">20. Datensicherheit</h2>
              <p>
                Wir treffen angemessene technische und organisatorische Maßnahmen, um deine Daten zu schützen (z.B. Zugriffsbeschränkungen, Rollen/Rechte).
              </p>
            </section>

            <hr className="border-gray-200 my-8" />

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">21. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir passen diese Datenschutzerklärung an, wenn sich die Website, eingesetzte Dienste oder rechtliche Anforderungen ändern.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-200">
              <Link href="/" className="text-primary-600 hover:underline font-medium">
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}
