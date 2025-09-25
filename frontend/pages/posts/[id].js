import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { api } from '../../lib/api';

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    api(`/posts/${id}`)
      .then(data => setPost(data))
      .catch(() => setError('Erro ao carregar post.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ textAlign: 'center' }}>Carregando post...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;
  if (!post) return null;

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f4eee1', 
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          borderRadius: 10,
          boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
          padding: 40,
          backgroundColor: '#f4eee1', 
        }}
      >
        <button
          onClick={() => router.push('/posts')}
          style={{
            marginBottom: 30,
            padding: '10px 25px',
            backgroundColor: '#a87c5a',
            color: '#fff',
            border: 'none',
            borderRadius: 5,
            cursor: 'pointer',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Voltar para posts
        </button>

        {post.author?.avatarUrl && (
          <img
            src={post.author.avatarUrl}
            alt={post.author.name}
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              display: 'block',
              margin: '0 auto 20px auto',
              objectFit: 'cover',
              border: '3px solid #a87c5a'
            }}
          />
        )}

        <h1
          style={{
            color: '#5b3a29',
            textAlign: 'center',
            marginBottom: 10,
            fontSize: '2em'
          }}
        >
          {post.title}
        </h1>

        <p
          style={{
            color: '#7a5c48',
            textAlign: 'center',
            marginBottom: 30,
            fontStyle: 'italic'
          }}
        >
          por <strong>{post.author?.name}</strong> -{' '}
          {new Date(post.createdAt).toLocaleString('pt-BR', {
            dateStyle: 'short',
            timeStyle: 'short'
          })}
        </p>

        <div
          style={{
            color: '#5b3a29',
            lineHeight: 1.8,
            fontSize: '1.1em',
            textAlign: 'justify'
          }}
        >
          {post.body}
        </div>
      </div>
    </div>
  );
}
