import { SecuritySession } from '../hooks/useSecurityAccess';

export function buildDemoUrl(baseUrl: string, session: SecuritySession | null): string {
  if (!baseUrl) return '#';
  try {
    const payload = {
      n: session?.name || 'Cliente',
      e: session?.email || '',
      x: session?.expiresAt || Date.now() + 24 * 60 * 60 * 1000,
    };
    const json = JSON.stringify(payload);
    const token = btoa(unescape(encodeURIComponent(json)));
    const url = new URL(baseUrl, window.location.origin);
    url.searchParams.set('auth', token);
    return url.toString();
  } catch {
    return baseUrl;
  }
}