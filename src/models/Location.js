const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    data: String,
});

module.exports = mongoose.model('Location', locationSchema);