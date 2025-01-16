const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, required: true. ref: 'Owner' },
    boardID: { type: String, required: true },
    location: { type: String, required: true },
    node: { type: Schema.Types.ObjectId, required: true, ref: 'Node' },
    data: String,
});

module.exports = mongoose.model('Board', boardSchema);
