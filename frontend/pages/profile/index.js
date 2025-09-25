import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { api } from '../../lib/api';

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api('/users/me')
      .then(setUser)
      .catch(() => setError('Erro ao carregar perfil.'));
  }, []);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Carregando...</p>;

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
          boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
        }}
      >
        <h1 style={{ color: '#5b3a29', marginBottom: 30 }}>Meu Perfil</h1>

        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            width={150}
            height={150}
            alt="avatar"
            style={{ borderRadius: '50%', marginBottom: 20, objectFit: 'cover' }}
          />
        )}

        <p style={{ fontWeight: 'bold', color: '#5b3a29', fontSize: '1.3em', marginBottom: 5 }}>
          {user.name}
        </p>
        <p style={{ color: '#5b3a29', marginBottom: 5 }}>{user.email}</p>
        <p style={{ color: '#5b3a29', marginBottom: 20 }}>{user.bio}</p>

        <button
          onClick={() => router.push('/profile/edit')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#a87c5a',
            color: '#fff',
            border: 'none',
            borderRadius: 5,
            cursor: 'pointer',
          }}
        >
          Editar Perfil
        </button>
      </div>
    </div>
  );
}
