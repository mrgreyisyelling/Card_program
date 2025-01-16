const mongoose = require('mongoose');

const printerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    owner: { type: String, required: true },
    printerID: { type: String, required: true },
    location: { type: String, required: true, ref: 'Location' },
    data: String,
});

module.exports = mongoose.model('Printer', printerSchema);
