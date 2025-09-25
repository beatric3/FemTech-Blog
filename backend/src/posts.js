const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { auth } = require('./middleware');
const prisma = new PrismaClient();
const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const { title, body } = req.body;
    if (!title || !body) return res.status(400).json({ error: 'Campos obrigatórios' });
    const post = await prisma.post.create({
      data: { title, body, authorId: req.userId }
    });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: { author: { select: { name: true, avatarUrl: true } } },
      orderBy: { createdAt: 'desc' }
    });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: Number(req.params.id) },
      include: { author: { select: { name: true, avatarUrl: true, bio: true } } }
    });
    if (!post) return res.status(404).json({ error: 'Post não encontrado' });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const post = await prisma.post.findUnique({ where: { id: Number(req.params.id) } });
    if (!post) return res.status(404).json({ error: 'Post não encontrado' });
    if (post.authorId !== req.userId) return res.status(403).json({ error: 'Sem permissão' });

    const updated = await prisma.post.update({
      where: { id: post.id },
      data: { title: req.body.title ?? post.title, body: req.body.body ?? post.body }
    });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await prisma.post.findUnique({ where: { id: Number(req.params.id) } });
    if (!post) return res.status(404).json({ error: 'Post não encontrado' });
    if (post.authorId !== req.userId) return res.status(403).json({ error: 'Sem permissão' });

    await prisma.post.delete({ where: { id: post.id } });
    res.json({ message: 'Post deletado' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

module.exports = router;
