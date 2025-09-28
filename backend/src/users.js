const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { auth } = require('./middleware');
const prisma = new PrismaClient();
const router = express.Router();

router.put('/me', auth, async (req, res) => {
  try {
    const { name, bio, avatarUrl } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'O nome é obrigatório.' });
    }

    const updatedUser = await prisma.user.update({
      where: { id: req.userId },
      data: { name, bio, avatarUrl },
      select: { id: true, name: true, email: true, bio: true, avatarUrl: true }
    });

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar perfil.' });
  }
});


module.exports = router;
