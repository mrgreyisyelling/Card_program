const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    data: String,
});

module.exports = mongoose.model('Owner', ownerSchema);