const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const nodeSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    Board: { type: Schema.Types.ObjectId, required: false, ref: 'Board' },
    owner: { type: Schema.Types.ObjectId, required: true, ref: 'Owner' },
    nodeID: { type: String, required: true },
    data: String,
});

module.exports = mongoose.model('Node', nodeSchema);
