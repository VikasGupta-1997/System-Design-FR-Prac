const API =  "http://localhost:8000" // e.g. http://localhost:4000

async function getCsrf() {
  const r = await fetch(`${API}/api/v1/auth/csrf`, { credentials: 'include' });
  const j = await r.json();
  return j.csrfToken as string;
}

export async function registerEmail(email: string, password: string, username?: string) {
  const csrf = await getCsrf();
  const r = await fetch(`${API}/api/v1/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-csrf-token': csrf },
    credentials: 'include',
    body: JSON.stringify({ email, password, username }),
  });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}

export async function loginEmail(email: string, password: string) {
  const csrf = await getCsrf();
  const r = await fetch(`${API}/api/v1/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-csrf-token': csrf },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}

export async function logout() {
  const csrf = await getCsrf();
  await fetch(`${API}/api/v1/auth/logout`, {
    method: 'GET',
    headers: { 'x-csrf-token': csrf },
    credentials: 'include',
  });
}

export async function me() {
  const r = await fetch(`${API}/api/v1/auth/me`, { credentials: 'include' });
  if (!r.ok) return null;
  return r.json();
}

export function startOAuth(provider: 'google' | 'github') {
  window.location.href = `${API}/api/v1/auth/oauth/${provider}`;
}
