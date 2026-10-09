import { APP_CONFIG } from '../config/appConfig.ts';

export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day); // months start at 0 in JavaScript
  return date.toLocaleDateString(APP_CONFIG.dateLocale, APP_CONFIG.dateDisplayFormat);
}

export function getTodayString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function isPastDate(dateString: string): boolean {
  if (!dateString) return false;
  return dateString < getTodayString();
}
