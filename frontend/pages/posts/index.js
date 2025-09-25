import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { api } from '../../lib/api';

export default function Posts() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    api('/posts')
      .then(data => setPosts(data))
      .catch(() => setError('Erro ao carregar posts.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando posts...</p>;
  if (error) return <p>{error}</p>;
  if (!posts.length) return <p>Nenhum post por aqui.</p>;

  return (
    <div
      style={{
        padding: 40,
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4eee1',
        minHeight: '100vh'
      }}
    >
      <h1 style={{ color: '#5b3a29', textAlign: 'center', marginBottom: 30 }}>
        Timeline
      </h1>

      <button
        onClick={() => router.push('/dashboard')}
        style={{
          display: 'block',
          margin: '0 auto 30px auto',
          padding: '10px 25px',
          backgroundColor: '#a87c5a',
          color: '#fff',
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer'
        }}>Criar Novo Post
      </button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 25,
          maxWidth: 900,
          margin: '0 auto'
        }}
      >
        {posts.map(post => (
          <div
            key={post.id}
            style={{
              border: '1px solid #d4b996',
              borderRadius: 12,
              padding: 20,
              backgroundColor: '#f7f1e7',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {post.author?.avatarUrl && (
              <img
                src={post.author.avatarUrl}
                alt={post.author.name}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  margin: '0 auto 15px auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            )}
            <h3 style={{ margin: '0 0 15px 0', color: '#5b3a29', textAlign: 'center' }}>
              <Link
                href={{
                  pathname: '/posts/[id]',
                  query: { id: post.id },
                }}
                style={{ textDecoration: 'none', color: '#5b3a29' }}
              >
                {post.title}
              </Link>
            </h3>
            <p style={{ margin: '0 0 15px 0', color: '#7a5c48' }}>
              {post.body.length > 250 ? post.body.slice(0, 250) + '...' : post.body}
            </p>
            <small style={{ color: '#9e8b76', display: 'block', textAlign: 'center' }}>
              por {post.author?.name} -{' '}
              {new Date(post.createdAt).toLocaleString('pt-BR', {
                dateStyle: 'short',
                timeStyle: 'short'
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
