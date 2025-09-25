import { useState } from 'react';
import { api } from '../lib/api';
import Router from 'next/router';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    bio: '',
    avatarUrl: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.password) {
      setError('Preencha todos os campos obrigatórios.');
      return;
    }

    try {
      setLoading(true);
      await api('/auth/register', { method: 'POST', body: JSON.stringify(form) });
      alert('Registro realizado com sucesso!');
      Router.push('/login');
    } catch (err) {
      setError('Erro ao registrar: ' + (err.message || 'Tente novamente.'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6dfd3',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          padding: 30,
          width: 400,
          backgroundColor: '#f4eee1',
          borderRadius: 10,
          textAlign: 'center',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ color: '#5b3a29', marginBottom: 20 }}>Registro</h1>

        {error && (
          <p style={{ color: 'red', marginBottom: 10 }}>{error}</p>
        )}

        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder="Nome"
            style={{ padding: 10, borderRadius: 5, border: '1px solid #d4b996' }}
          />
          <input
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            style={{ padding: 10, borderRadius: 5, border: '1px solid #d4b996' }}
          />
          <input
            required
            type="password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            placeholder="Senha"
            style={{ padding: 10, borderRadius: 5, border: '1px solid #d4b996' }}
          />
          <input
            value={form.bio}
            onChange={e => setForm({ ...form, bio: e.target.value })}
            placeholder="Bio"
            style={{ padding: 10, borderRadius: 5, border: '1px solid #d4b996' }}
          />
          <input
            value={form.avatarUrl}
            onChange={e => setForm({ ...form, avatarUrl: e.target.value })}
            placeholder="Avatar URL"
            style={{ padding: 10, borderRadius: 5, border: '1px solid #d4b996' }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: 12,
              backgroundColor: '#a87c5a',
              color: '#fff',
              border: 'none',
              borderRadius: 5,
              cursor: 'pointer',
              marginTop: 10
            }}
          >
            {loading ? 'Registrando...' : 'Registrar'}
          </button>
        </form>
      </div>
    </div>
  );
}
