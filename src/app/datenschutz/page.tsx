import type { Metadata } from 'next';
import { Lesetext } from '@/components/layout/Lesetext';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Datenschutz | Circus Akademie München e.V.',
  description: 'Datenschutzerklärung des Circus Akademie München e.V.',
};

/*
 * Diese Erklärung beschreibt nur, was diese Website wirklich tut: Hosting bei Vercel,
 * drei Formulare, die per E-Mail zugestellt werden, keine Cookies, kein Tracking,
 * lokal ausgelieferte Schriften. Kommt ein Dienst dazu, gehört er hier hinein.
 */
export default function DatenschutzPage() {
  return (
    <Lesetext titel="Datenschutzerklärung" einleitung={<p>Stand: 17.11.2026</p>}>
      <section>
        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          Circus Akademie München e.V. (CAM e.V.)<br />
          Ranhazweg 18, 85521 Ottobrunn, Deutschland<br />
          E-Mail: <a href="mailto:info@xn--circusakademiemnchen-3ec.de">info@circusakademiemünchen.de</a>
        </p>
        <p>
          Einen Datenschutzbeauftragten haben wir nicht bestellt, da keine gesetzliche Pflicht besteht.
        </p>
      </section>

      <hr />

      <section>
        <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
        <p>
          Wir verarbeiten personenbezogene Daten, wenn Sie unsere Website nutzen, uns kontaktieren oder einen Mitgliedsantrag stellen. Personenbezogene Daten sind z.B. Name, E-Mail-Adresse, Telefonnummer, IP-Adresse.
        </p>
        <p className="font-semibold text-ink">Rechtsgrundlagen (Auswahl):</p>
        <ul>
          <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag / vorvertragliche Maßnahmen, z.B. Mitgliedsantrag)</li>
          <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, z.B. Foto- und Videoaufnahmen)</li>
          <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse, z.B. sichere Bereitstellung der Website)</li>
          <li>Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung, z.B. Aufbewahrungsfristen)</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>3. Hosting (Vercel) und Server-Logfiles</h2>
        <p>
          Unsere Website wird bei Vercel gehostet. Beim Aufruf der Website werden durch den Hosting-Anbieter und/oder durch uns technisch notwendige Daten verarbeitet (sog. Server-Logfiles), z.B.:
        </p>
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>aufgerufene Seite/URL</li>
          <li>Referrer-URL</li>
          <li>Browser/Device/Betriebssystem</li>
          <li>Statuscodes / Datenmenge</li>
        </ul>
        <p>
          <strong>Zweck:</strong> Auslieferung der Website, Stabilität, Sicherheit, Fehleranalyse.<br />
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb).
        </p>
        <p>
          Dabei kann es zu Datenübermittlungen in Drittstaaten (insb. USA) kommen. Details dazu siehe Abschnitt „Drittlandübermittlung“.
        </p>
      </section>

      <hr />

      <section>
        <h2>4. Cookies und Tracking</h2>
        <p>
          Diese Website setzt keine Cookies. Wir nutzen keine Analyse- oder Marketing-Dienste und betten keine Inhalte von Drittanbietern ein (z.B. Videos oder Karten). Ein Cookie-Banner ist deshalb nicht erforderlich.
        </p>
      </section>

      <hr />

      <section>
        <h2>5. Schriften</h2>
        <p>
          Die Schriften dieser Website (Outfit und Inter) werden zusammen mit der Website ausgeliefert. Beim Aufruf der Website wird keine Verbindung zu Servern von Google aufgebaut.
        </p>
      </section>

      <hr />

      <section>
        <h2>6. Kontaktaufnahme (Kontaktformular, Sponsoring-Anfrage, E-Mail)</h2>
        <p>
          Wenn Sie uns über das Kontaktformular schreiben, verarbeiten wir die von Ihnen eingegebenen Daten: Name, E-Mail-Adresse, Betreff und Nachricht. Bei einer Sponsoring-Anfrage kommen Unternehmen und Budget hinzu. Die Übermittlung erfolgt per E-Mail an unser Postfach. Zum Spam-Schutz nutzen wir einen Honeypot.
        </p>
        <p>
          <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage.<br />
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertraglich/vertraglich) oder Art. 6 Abs. 1 lit. f DSGVO (allgemeine Anfragen).<br />
          <strong>Speicherdauer:</strong> 6 Monate (danach Löschung, sofern keine gesetzlichen Pflichten entgegenstehen).
        </p>
      </section>

      <hr />

      <section>
        <h2>7. Mitgliedsantrag</h2>
        <p>
          Wenn Sie über das Formular die Mitgliedschaft beantragen, verarbeiten wir: Vorname, Nachname, Anschrift, E-Mail-Adresse und Mitgliedsart. Wenn Sie sie angeben, kommen Telefonnummer, gewünschter Jahresbeitrag und Ihre Nachricht an den Vorstand hinzu. Der Antrag geht per E-Mail an den Vorstand. Zusätzlich werden Eingangszeit, IP-Adresse und Browserkennung übermittelt. Sie erhalten eine Eingangsbestätigung per E-Mail.
        </p>
        <p>
          <strong>Zweck:</strong> Bearbeitung des Aufnahmeantrags und Verwaltung der Mitgliedschaft.<br />
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Anbahnung und Durchführung der Mitgliedschaft). Für IP-Adresse und Browserkennung: Art. 6 Abs. 1 lit. f DSGVO (Schutz vor Missbrauch des Formulars).<br />
          <strong>Speicherdauer:</strong> für die Dauer der Mitgliedschaft. Wird ein Antrag nicht angenommen oder endet die Mitgliedschaft, löschen wir die Daten, sofern keine gesetzlichen Pflichten entgegenstehen.
        </p>
        <p>
          Näheres zum Umgang mit Mitgliedsdaten regelt § 15 der{' '}
          <a href={site.satzung.download} target="_blank" rel="noopener noreferrer">Satzung</a>.
        </p>
      </section>

      <hr />

      <section>
        <h2>8. Google Workspace (Rechnungen/Organisation)</h2>
        <p>
          Rechnungen und organisatorische Dokumente werden im Google Workspace gespeichert; für Fotos/Videos wird Google Drive genutzt (siehe auch Abschnitt Fotos/Videos). Dabei kann es zu Drittlandübermittlungen (USA) kommen.
        </p>
        <p>
          <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertrag), Art. 6 Abs. 1 lit. c DSGVO (Aufbewahrung), Art. 6 Abs. 1 lit. f DSGVO (Organisation).
        </p>
      </section>

      <hr />

      <section>
        <h2>9. Links zum Pepe Dome und zu Social Media</h2>
        <p>
          Im Footer verlinken wir auf die Website des Pepe Dome und auf dessen Social-Media-Profile. Es handelt sich um reine Links (keine automatisch ladenden Feeds/Plugins). Beim Laden unserer Website werden dadurch nicht automatisch Daten an die Plattformen übertragen – erst beim Anklicken des Links.
        </p>
      </section>

      <hr />

      <section>
        <h2>10. Foto- und Videoaufnahmen bei Veranstaltungen/Workshops</h2>
        <p>
          Bei Veranstaltungen/Workshops werden Fotos/Videos nur erstellt, wenn wir vorher um Einverständnis bitten. Personen, die nicht aufgenommen werden möchten, werden nicht abgelichtet. Für eine Veröffentlichung (Website/Social Media) fragen wir zusätzlich gesondert.
        </p>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). <strong>Speicherung:</strong> Google Drive. <strong>Zugriff:</strong> Team sowie die jeweiligen Fotograf:innen; sie erhalten Zugriff nur auf den jeweiligen Ordner.
        </p>
      </section>

      <hr />

      <section>
        <h2>11. Drittlandübermittlung (insb. USA)</h2>
        <p>
          Einige eingesetzte Dienstleister können Daten in Drittländer (insbesondere USA) übermitteln oder dort verarbeiten (z.B. Vercel, Google Workspace/Drive). Soweit erforderlich, erfolgen Übermittlungen auf Grundlage geeigneter Garantien (z.B. EU-Standardvertragsklauseln) und ggf. zusätzlicher Schutzmaßnahmen, sofern der Anbieter diese bereitstellt.
        </p>
      </section>

      <hr />

      <section>
        <h2>12. Speicherdauer</h2>
        <ul>
          <li>Kontakt- und Sponsoring-Anfragen: 6 Monate</li>
          <li>Mitgliedsdaten: für die Dauer der Mitgliedschaft, danach nur, soweit gesetzliche Aufbewahrungspflichten bestehen</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>13. Ihre Rechte</h2>
        <p>Sie haben nach DSGVO insbesondere folgende Rechte:</p>
        <ul>
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen Verarbeitung auf Basis berechtigter Interessen (Art. 21 DSGVO)</li>
          <li>Widerruf von Einwilligungen jederzeit (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>
          Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (Art. 77 DSGVO).
        </p>
      </section>

      <hr />

      <section>
        <h2>14. Datensicherheit</h2>
        <p>
          Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre Daten zu schützen (z.B. Zugriffsbeschränkungen, Rollen/Rechte).
        </p>
      </section>

      <hr />

      <section>
        <h2>15. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir passen diese Datenschutzerklärung an, wenn sich die Website, eingesetzte Dienste oder rechtliche Anforderungen ändern.
        </p>
      </section>
    </Lesetext>
  );
}
