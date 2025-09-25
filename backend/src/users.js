const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { auth } = require('./middleware');
const prisma = new PrismaClient();
const router = express.Router();

router.get('/me', auth, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: { id: true, name: true, email: true, bio: true, avatarUrl: true }
    });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

module.exports = router;
