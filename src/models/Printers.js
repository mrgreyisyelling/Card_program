const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const printerSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, required: true, ref: 'Owner' },
    printerID: { type: String, required: true },
    location: { type: String, required: true, ref: 'Location' },
    data: String,
});

module.exports = mongoose.model('Printer', printerSchema);
