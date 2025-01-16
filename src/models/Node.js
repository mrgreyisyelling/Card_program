const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    data: String,
});

module.exports = mongoose.model('Node', nodeSchema);
