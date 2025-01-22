const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Template', templateSchema);