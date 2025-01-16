const express = require('express');
const app = express();
const cardRoutes = require('./routes/cards');
const nodeRoutes = require('./routes/nodes');

app.use(express.json());
app.use('/api/cards', cardRoutes);
app.use('/api/nodes', nodeRoutes);
module.exports = app;

