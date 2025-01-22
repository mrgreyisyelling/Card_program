const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderName: {
        type: String,
        required: true
    },
    orderQuantity: {
        type: Number,
        required: true
    },
    templateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Template',
        required: true
    },
    cardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card',
        required: true
    },
    qrCodeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QR',
        required: true
    },
    websiteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Website',
        required: true
    },
    submissionTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);
