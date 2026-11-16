import nodemailer from 'nodemailer';

/** Empfänger aller Formulare. Punycode, weil SMTP die Umlaut-Domain nicht direkt annimmt. */
export const VEREIN_EMAIL = 'info@xn--circusakademiemnchen-3ec.de';
/** Dieselbe Adresse in lesbarer Form, für Texte in Mails. */
export const VEREIN_EMAIL_ANZEIGE = 'info@circusakademiemünchen.de';

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Ein Transport für alle Routen. Zugangsdaten kommen aus den SMTP_*-Variablen. */
export function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true für Port 465, false für andere Ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/** Absender: SMTP_FROM, sonst der Anzeigename vor dem SMTP-Konto. */
export function absender(anzeigename: string): string {
  return process.env.SMTP_FROM || `"${anzeigename}" <${process.env.SMTP_USER}>`;
}

/** Eingabe zu einem getrimmten String mit Obergrenze machen. Alles außer Strings und Zahlen wird leer. */
export function feld(wert: unknown, maxLaenge: number): string {
  if (typeof wert !== 'string' && typeof wert !== 'number') return '';
  return String(wert).trim().slice(0, maxLaenge);
}

/** Wie feld(), zusätzlich ohne Zeilenumbrüche. Für Werte, die in Betreff oder Kopfzeilen landen. */
export function einzeilig(wert: unknown, maxLaenge: number): string {
  return feld(wert, maxLaenge).replace(/[\r\n]+/g, ' ');
}

/** Alles, was ein Mensch eingetippt hat, läuft hier durch, bevor es ins Mail-HTML kommt. */
export function escapeHtml(wert: string): string {
  return wert
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Erst escapen, dann Zeilenumbrüche zu <br>. Andersherum würden die <br> mit escaped. */
export function escapeHtmlMehrzeilig(wert: string): string {
  return escapeHtml(wert).replace(/\r?\n/g, '<br>');
}
