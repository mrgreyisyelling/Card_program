const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const boardSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, required: true, ref: 'Owner' },
    boardID: { type: String, required: true },
    cards: [{ type: Schema.Types.ObjectId, required: true, ref: 'Card' }],
    location: { type: String, required: true },
    nodes: { type: Schema.Types.ObjectId, required: true, ref: 'Node' },
    data: String,
});

module.exports = mongoose.model('Board', boardSchema);
