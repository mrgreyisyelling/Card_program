const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    Board: { type: Schema.Types.ObjectId, required: true, ref: 'Board' },
    owner: { type: Schema.Types.ObjectId, required: true, ref: 'Owner' },
    nodeID: { type: String, required: true },
    data: String,
});

module.exports = mongoose.model('Node', nodeSchema);
