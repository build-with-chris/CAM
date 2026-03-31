import { redirect } from 'next/navigation';

/**
 * Spenden-URL: Weiterleitung zu Unterstützen (ein Einstieg für Spender*innen).
 */
export default function SpendenPage() {
  redirect('/unterstuetzen');
}
