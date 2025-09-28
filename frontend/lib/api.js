export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function api(path, options = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  let res, data = null;

  try {
    res = await fetch(`${API_URL}${path}`, { ...options, headers });

    try {
      data = await res.json();
    } catch {
      data = null;
    }

    console.log('API Request:', path, options);
    console.log('Status:', res.status, 'OK:', res.ok);
    console.log('Response:', data);

    if (!res.ok) {
      throw new Error(data?.error || `Erro na API: ${res.status}`);
    }

    return data;
  } catch (err) {
    console.error('Erro na requisição API:', err);
    throw new Error(err.message || 'Erro desconhecido na API');
  }
}
