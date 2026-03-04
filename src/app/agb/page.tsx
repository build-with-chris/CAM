import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'AGB | Circus Akademie München e.V.',
  description: 'Allgemeine Geschäftsbedingungen für Veranstaltungen, Tickets, Workshops und Raummiete im Pepe Dome.',
};

export default function AgbPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Section id="agb" background="white">
          <SectionHeader title="Allgemeine Geschäftsbedingungen (AGB)" />
          <p className="max-w-4xl mx-auto text-muted-foreground mb-2">
            für Veranstaltungen, Tickets, Workshops/Kurse und Raummiete im „Pepe Dome“
          </p>
          <p className="max-w-4xl mx-auto text-sm text-muted-foreground mb-10">
            Stand: 28.01.2026
          </p>

          <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">1. Geltungsbereich</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Diese AGB gelten für alle Verträge, die über diese Website sowie über angebundene Ticket-/Buchungsdienstleister (z.B. Ticketplattformen) über den Besuch von Veranstaltungen, den Erwerb von Tickets/Mehrfachkarten, die Teilnahme an Workshops/Kursen sowie die Anmietung von Räumen im „Pepe Dome“ geschlossen werden.</li>
                <li>Abweichende Bedingungen von Kund:innen gelten nicht, außer wir stimmen ihnen ausdrücklich schriftlich zu.</li>
                <li>Angebote wie Artist Booking/Showvermittlung sind nicht Vertragsgegenstand dieser Website. Hierfür verweisen wir auf „Pepe Shows“ (pepeshows.de).</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">2. Vertragspartner</h2>
              <p>Vertragspartner ist ausschließlich: Circus Akademie München e.V. (nachfolgend „Veranstalter“).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">3. Vertragsschluss und Buchung</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Die Darstellung von Leistungen auf der Website ist eine Einladung zur Buchung.</li>
                <li>Der Vertrag kommt zustande, sobald die Buchung über unsere eigene Plattform verbindlich abgeschlossen wird, oder bei Buchungen über Ticketdienstleister die dortige Buchungsbestätigung/Bestellbestätigung erfolgt.</li>
                <li>Bei Buchungen über Dritte können zusätzlich deren technische Abläufe und Bedingungen gelten. Der Vertrag über die Leistung (Veranstaltung/Workshop etc.) kommt – soweit so ausgewiesen – mit dem Veranstalter zustande.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">4. Preise und Zahlung</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Alle Preise sind Endpreise (brutto).</li>
                <li>Zahlungsarten: PayPal, Stripe, EC-Karte vor Ort (je nach Angebot).</li>
                <li>Zahlung ist sofort fällig.</li>
                <li>Kommt es zu Rücklastschriften/Fehlbuchungen, sind die dadurch entstehenden Kosten vom Verursacher zu tragen. Bei Zahlungsverzug können die gesetzlichen Verzugszinsen und pauschalen Verzugskosten berechnet werden.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">5. Tickets, Einlass, Nutzung</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Tickets (auch digitale Tickets) sind zum Einlass bereitzuhalten (z.B. QR-Code).</li>
                <li>Bei verspätetem Erscheinen besteht kein Anspruch auf Einlass zu einem späteren Zeitpunkt, wenn dadurch der Ablauf gestört würde (z.B. bei Vorführungen).</li>
                <li>Weiterverkauf von Tickets zu überhöhten Preisen sowie Ticketmissbrauch kann zum Ausschluss führen.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">6. Mehrfachkarten (z.B. 10er-/20er-Tickets)</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Mehrfachkarten berechtigen zur Teilnahme an den jeweils dafür freigegebenen Terminen/Angeboten gemäß Beschreibung.</li>
                <li>Eine Auszahlung des Restwerts ist ausgeschlossen, soweit gesetzlich zulässig.</li>
                <li>Mehrfachkarten sind 3 Jahre gültig (gerechnet ab Ende des Jahres des Kaufs), sofern beim Kauf nichts Abweichendes angegeben ist.</li>
                <li>Mehrfachkarten sind übertragbar; die Weitergabe erfolgt auf eigene Verantwortung.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">7. Workshops und Kurse</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Inhalte, Voraussetzungen und ggf. Mindestteilnehmerzahlen ergeben sich aus der jeweiligen Ausschreibung.</li>
                <li>Workshops: Eine Mindestteilnehmerzahl kann vom jeweiligen Workshop-Leiter festgelegt und in der Ausschreibung genannt werden.</li>
                <li>Kurse: Mindestteilnehmerzahl ist 5 Personen, sofern in der Ausschreibung nichts Abweichendes angegeben ist.</li>
                <li>Workshop-Leiter können Leistungen fachlich anleiten; Vertragspartner bleibt der Veranstalter.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">8. Storno, Erstattung, Kulanz-Umbuchung</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Tickets (Events, Kulturformate wie Kunstausstellungen, Open Stage, Open Kino etc.): Eine Erstattung ist grundsätzlich ausgeschlossen, soweit gesetzlich zulässig.</li>
                <li>Workshops/Kurse: Eine Erstattung ist grundsätzlich ausgeschlossen, soweit gesetzlich zulässig.</li>
                <li>Kulanzregelung (Umbuchung/Alternativen): Unabhängig davon kann im Einzelfall telefonisch oder per Kontaktaufnahme angefragt werden, ob eine Umbuchung (z.B. auf ein anderes Datum) oder eine alternative Nutzung möglich ist. Ein Anspruch hierauf besteht nicht.</li>
                <li>Ersatzpersonen: Teilnehmende dürfen jederzeit eine Ersatzperson benennen.</li>
                <li>Keine Umbuchungsgebühr.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">9. Absage/Änderungen durch den Veranstalter</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Muss der Veranstalter einen Termin absagen, erfolgt dies – soweit möglich – mindestens 3 Stunden vor Beginn.</li>
                <li>In diesem Fall erfolgt eine vollständige Erstattung nach Wahl des Veranstalters entweder als Gutschein (inkl. Bonus: 1 Freigetränk), oder auf die ursprüngliche Zahlungsmethode.</li>
                <li>Der Veranstalter darf zumutbare Änderungen vornehmen (z.B. Ablauf, Uhrzeiten, Programm, Besetzung, Ort innerhalb des Veranstaltungsbereichs), sofern der Gesamtcharakter der Leistung erhalten bleibt und die Änderung für Teilnehmende zumutbar ist.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">10. Widerrufsrecht (Verbraucher:innen)</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Verbraucher:innen haben bei Fernabsatzverträgen grundsätzlich ein Widerrufsrecht.</li>
                <li>Kein Widerrufsrecht besteht insbesondere bei Verträgen zur Erbringung von Dienstleistungen im Zusammenhang mit Freizeitbetätigungen, wenn für die Leistung ein spezifischer Termin/Zeitraum vorgesehen ist (z.B. Veranstaltungstickets).</li>
                <li>Soweit ausnahmsweise doch ein Widerrufsrecht besteht (z.B. bei bestimmten Mehrfachkarten ohne Terminbezug), gelten die gesetzlichen Regeln.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">11. Teilnahmebedingungen, Sicherheit, Minderjährige</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Minderjährige dürfen nur mit Einverständnis der Erziehungsberechtigten teilnehmen.</li>
                <li>Bei sportlich/artistischen Angeboten gilt: Teilnehmende sind selbst verantwortlich, ihre Sporttauglichkeit/Gesundheit zu prüfen und Risiken realistisch einzuschätzen.</li>
                <li>Den Anweisungen des Personals/der Kursleitungen ist Folge zu leisten, sofern sie der Sicherheit und dem Ablauf dienen.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">12. Hausordnung und Verhalten</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Alkohol und Drogen sind untersagt.</li>
                <li>Rauchen ist im Vorzelt und im Dome strikt verboten.</li>
                <li>Bei Verstößen gegen Sicherheitsregeln, Hausordnung oder grob störendem Verhalten kann der Veranstalter Personen ohne Erstattung vom weiteren Besuch/der weiteren Teilnahme ausschließen.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">13. Haftung</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Der Veranstalter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit, sowie bei Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.</li>
                <li>Bei einfacher Fahrlässigkeit haftet der Veranstalter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und begrenzt auf den vertragstypischen, vorhersehbaren Schaden.</li>
                <li>Eine weitergehende Haftung ist ausgeschlossen, soweit gesetzlich zulässig.</li>
                <li>Keine Haftung für Garderobe und mitgebrachte Gegenstände/Wertsachen, soweit gesetzlich zulässig.</li>
                <li>Es besteht eine Betriebshaftpflichtversicherung.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">14. Foto/Video/Audio – Aufnahmen und Veröffentlichung</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Der Veranstalter fertigt Foto-/Videoaufnahmen grundsätzlich nur nach vorheriger Nachfrage an. Wer nicht aufgenommen werden möchte, wird nicht abgelichtet.</li>
                <li>Eine Veröffentlichung (z.B. Website/Social Media) erfolgt nur nach Einwilligung der betroffenen Person(en).</li>
                <li>Teilnehmende dürfen sich selbst filmen/fotografieren. Dabei ist Rücksicht auf Dritte zu nehmen; Aufnahmen anderer Personen sind nur mit deren Zustimmung erlaubt.</li>
                <li>Bei Veröffentlichungen eigener Inhalte wird um Verlinkung/Markierung der Social-Media-Kanäle gebeten (freiwillig).</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">15. Kommunikation (E-Mail/SMS)</h2>
              <p>Der Veranstalter darf Teilnehmende für organisatorische Informationen (z.B. Änderungen, Ausfälle, Hinweise zum Ablauf) per E-Mail und SMS kontaktieren.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">16. Raummiete (Pepe Dome)</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Umfang, Mietdauer, Nutzungszweck, Übergabezeiten und ggf. zusätzliche Leistungen ergeben sich aus dem jeweiligen Mietangebot/der Buchungsbestätigung.</li>
                <li>Die Nutzung ist nur im vereinbarten Rahmen erlaubt. Sicherheits- und Lärmschutzvorgaben sind einzuhalten.</li>
                <li>Der Veranstalter ist berechtigt, bei Verstößen die Nutzung zu beenden, wenn dies zur Gefahrenabwehr, zum Schutz der Anlage oder zur Einhaltung behördlicher Vorgaben erforderlich ist.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">17. Hinweise zum Standort und Lärmschutz</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Der Pepe Dome befindet sich im Ostpark München. Anreise mit ÖPNV über U-Bahnhof Quiddestraße. Parkplätze u.a. am Michaelibad, anschließend ca. 15 Minuten Fußweg.</li>
                <li>Es gelten die allgemeinen Lärmpegelstandards der Stadt München. Ab 22:00 Uhr ist die Lautstärke so zu reduzieren, dass Anwohner:innen nicht beeinträchtigt werden.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">18. Verbraucherstreitbeilegung</h2>
              <p>Der Veranstalter ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900 mb-3">19. Schlussbestimmungen</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Es gilt deutsches Recht.</li>
                <li>Gerichtsstand ist – soweit gesetzlich zulässig – München.</li>
                <li>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</li>
              </ol>
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
