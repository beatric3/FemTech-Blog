import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { api } from '../../lib/api';

export default function Dashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/login');
    else load();
  }, []);

  async function load() {
    setLoading(true);
    try {
      const data = await api('/posts');
      setPosts(data.filter(p => p.author && p.author.name));
    } catch {
      alert("Erro ao carregar posts.");
    } finally {
      setLoading(false);
    }
  }

  async function create(e) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      alert("Preencha todos os campos!");
      return;
    }
    try {
      await api('/posts', { method: 'POST', body: JSON.stringify({ title, body }) });
      setTitle('');
      setBody('');
      load();
      alert("Post criado com sucesso!");
    } catch {
      alert("Erro ao criar post.");
    }
  }

  async function remove(id) {
    if (!confirm('Deseja Deletar este post?')) return;
    await api(`/posts/${id}`, { method: 'DELETE' });
    load();
  }

  function edit(id) {
    router.push(`/dashboard/edit/${id}`);
  }

  function handleLogout() {
    localStorage.removeItem('token');
    router.push('/login');
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif', backgroundColor: '#f4eee1', minHeight: '100vh' }}>
      <h1 style={{ color: '#5b3a29' }}>Dashboard</h1>

      <button
        onClick={handleLogout}
        style={{ marginBottom: 20, padding: '10px 20px', backgroundColor: '#a87c5a', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer' }}
      >
       Sair 
      </button>

      <form onSubmit={create} style={{ marginBottom: 20 }}>
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
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#a87c5a', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer' }}>
          Criar
        </button>
      </form>

      <h2 style={{ color: '#5b3a29' }}>Meus Posts / Posts Recentes</h2>
      {loading && <p>Carregando posts...</p>}
      {!loading && posts.length === 0 && <p>Nenhum post encontrado.</p>}

      {posts.map(p => (
        <div
          key={p.id}
          style={{
            border: '1px solid #d4b996',
            borderRadius: 8,
            padding: 15,
            backgroundColor: '#f7f1e7',
            boxShadow: '2px 2px 6px rgba(0,0,0,0.08)',
            marginBottom: 15
          }}
        >
          <h3 style={{ margin: '0 0 10px 0', color: '#5b3a29' }}>{p.title}</h3>
          <p style={{ color: '#7a5c48' }}>{p.body}</p>
          <small style={{ color: '#9e8b76' }}>por {p.author?.name} - {new Date(p.createdAt).toLocaleString('pt-BR')}</small>
          <br />
          <button onClick={() => remove(p.id)} style={{ marginTop: 10, marginRight: 10, padding: '5px 10px', backgroundColor: '#a87c5a', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer' }}>
            Apagar
          </button>
          <button onClick={() => edit(p.id)} style={{ marginTop: 10, padding: '5px 10px', backgroundColor: '#a87c5a', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer' }}>
            Editar
          </button>
        </div>
      ))}
    </div>
  );
}
