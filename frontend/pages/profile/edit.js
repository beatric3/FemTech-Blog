import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { api } from '../../lib/api';

export default function EditProfile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api('/users/me')
      .then(data => {
        setUser(data);
        setName(data.name || '');
        setBio(data.bio || '');
        setAvatarUrl(data.avatarUrl || '');
      })
      .catch(() => setError('Erro ao carregar perfil.'))
      .finally(() => setLoading(false));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      alert('O nome é obrigatório.');
      return;
    }

    setLoading(true);
    try {
      await api('/users/me', {
        method: 'PUT',
        body: JSON.stringify({ name, bio, avatarUrl })
      });
      alert('Perfil atualizado com sucesso!');
      router.push('/profile');
    } catch {
      alert('Erro ao atualizar perfil.');
    } finally {
      setLoading(false);
    }
  }

  if (error) return <p>{error}</p>;
  if (loading && !user) return <p>Carregando seu perfil...</p>;

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
        <h1 style={{ color: '#5b3a29', marginBottom: 20 }}>Editar Perfil</h1>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
        >
          <label style={{ color: '#5b3a29', textAlign: 'left' }}>
            Nome:
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              required
              style={{ width: '100%', padding: 8, borderRadius: 5, border: '1px solid #d4b996' }}
            />
          </label>

          <label style={{ color: '#5b3a29', textAlign: 'left' }}>
            Bio:
            <textarea
              value={bio}
              onChange={e => setBio(e.target.value)}
              rows={4}
              style={{ width: '100%', padding: 8, borderRadius: 5, border: '1px solid #d4b996' }}
            />
          </label>

          <label style={{ color: '#5b3a29', textAlign: 'left' }}>
            URL do Avatar:
            <input
              value={avatarUrl}
              onChange={e => setAvatarUrl(e.target.value)}
              style={{ width: '100%', padding: 8, borderRadius: 5, border: '1px solid #d4b996' }}
            />
          </label>

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
            {loading ? 'Atualizando...' : 'Salvar'}
          </button>
        </form>
      </div>
    </div>
  );
}
