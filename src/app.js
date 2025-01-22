const express = require('express');
const path = require('path');
const app = express();
const cardRoutes = require('./routes/cards');
const qrRoutes = require('./routes/qr');
const nodeRoutes = require('./routes/nodes');
const boardRoutes = require('./routes/boards'); // Adjust the path if needed
const templateRoutes = require('./routes/templates'); // Adjust the path if needed
const websiteRoutes = require('./routes/website');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Serve index.html as the default file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Serve the view_templates.html file
app.get('/view-templates', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/view_templates.html'));
});

app.use('/api/cards', cardRoutes);
app.use('/api/nodes', nodeRoutes);
app.use('/api/boards', boardRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/qrs', qrRoutes);
app.use('/api/websites', websiteRoutes);

module.exports = app;

