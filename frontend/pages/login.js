import { useState } from 'react';
import Router from 'next/router';
import { api } from '../lib/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);
      const res = await api('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      localStorage.setItem('token', res.token);
      Router.push('/profile');
    } catch (err) {
      setError('Erro ao entrar: ' + (err.message || 'Tente novamente.'));
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
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div
        style={{
          padding: 30,
          width: 400,
          backgroundColor: '#f4eee1',
          borderRadius: 10,
          textAlign: 'center',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
        }}
      >
        <h1 style={{ color: '#5b3a29', marginBottom: 20 }}>Login</h1>

        {error && <p style={{ color: 'red', marginBottom: 10 }}>{error}</p>}

        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            style={{ padding: 10, borderRadius: 5, border: '1px solid #d4b996' }}
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
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
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}
