import { redirect } from 'next/navigation';

/**
 * Spenden-Seite: Weiterleitung zu Unterstützen.
 * Kein Spendenaufruf, solange keine Gemeinnützigkeit vorliegt.
 */
export default function SpendenPage() {
  redirect('/unterstuetzen');
}
