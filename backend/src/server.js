require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./auth');
const userRoutes = require('./users');
const postRoutes = require('./posts');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));
