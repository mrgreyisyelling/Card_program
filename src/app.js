const express = require('express');
const path = require('path');
const app = express();
const cardRoutes = require('./routes/cards');
const nodeRoutes = require('./routes/nodes');
const boardRoutes = require('./routes/boards'); // Adjust the path if needed

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Serve index.html as the default file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/api/cards', cardRoutes);
app.use('/api/nodes', nodeRoutes);
app.use('/api/boards', boardRoutes);


module.exports = app;

