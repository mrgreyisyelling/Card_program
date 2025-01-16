const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true },
    roles: {
        isCardOwner: { type: Boolean, default: false },
        isNodeOwner: { type: Boolean, default: false },
        isPrinter: { type: Boolean, default: false },
        isDeliveryPerson: { type: Boolean, default: false },
    },
    cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
    nodes: [{ type: Schema.Types.ObjectId, ref: 'Node' }],
    printers: [{ type: Schema.Types.ObjectId, ref: 'Printer' }],
    deliveries: [{ type: Schema.Types.ObjectId, ref: 'Delivery' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
