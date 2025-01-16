const express = require('express');
const app = express();
const cardRoutes = require('./routes/cards');

app.use(express.json());
app.use('/api/cards', cardRoutes);

module.exports = app;

