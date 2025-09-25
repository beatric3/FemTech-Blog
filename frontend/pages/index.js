'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { api } from '../lib/api';

export default function Home() {
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

  return (
    <div className="page">
      <header className="header">
        <h3 className="logo">FemTech</h3>

        <nav>
          <Link href="/register" className="nav-link">Registrar</Link>
          <Link href="/login" className="nav-link">Login</Link>
          <Link href="/posts" className="nav-link">Posts</Link>
          <Link href="/profile" className="nav-link">Perfil</Link>
          <Link href="/dashboard" className="nav-link">Dashboard</Link>
        </nav>

      </header>

      <main className="main">
        <h1 className="title">FemTech Blog</h1>
        <h3 className="subtitle">
          Este espaço existe para reforçar que Mulheres Desenvolvedoras são peças fundamentais na construção de uma tecnologia mais inclusiva e justa.
        </h3>

        {loading && <p>Carregando posts...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && posts.length === 0 && <p>Nenhum post encontrado.</p>}

        {!loading && !error && posts.length > 0 && (
          <div className="posts-container">
            {posts.map(post => (
              <div key={post.id} className="post-card">
                {post.author?.avatarUrl && (
                  <img
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    className="avatar"
                  />
                )}
                <h3 className="post-title">
                  <Link
                    href={{ pathname: '/posts/[id]', query: { id: post.id } }}
                    className="post-link"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="post-body">
                  {post.body.length > 250 ? post.body.slice(0, 250) + '...' : post.body}
                </p>
                <small className="post-meta">
                  por {post.author?.name} - {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                </small>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
