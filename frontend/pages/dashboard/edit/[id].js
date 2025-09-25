import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { api } from '../../../lib/api';

export default function EditPost() {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    api(`/posts/${id}`)
      .then(post => {
        setTitle(post.title);
        setBody(post.body);
      })
      .catch(() => setError('Erro ao carregar post.'))
      .finally(() => setLoading(false));
  }, [id]);

  async function updatePost(e) {
    e.preventDefault();
    try {
      await api(`/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body })
      });
      alert('Post atualizado com sucesso!');
      router.push('/dashboard');
    } catch {
      alert('Erro ao atualizar post.');
    }
  }

  if (loading) return <p>Carregando post...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif', backgroundColor: '#f4eee1', minHeight: '100vh' }}>
      <h1 style={{ color: '#5b3a29' }}>Editar Post</h1>

      <form onSubmit={updatePost} style={{ marginTop: 20 }}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Título"
          required
          style={{ padding: 8, width: '100%', marginBottom: 10, borderRadius: 5, border: '1px solid #d4b996' }}
        />
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder="Conteúdo"
          required
          style={{ padding: 8, width: '100%', marginBottom: 10, borderRadius: 5, border: '1px solid #d4b996' }}
        />
        <button
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#a87c5a', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer' }}
        >
          Atualizar
        </button>
      </form>
    </div>
  );
}
