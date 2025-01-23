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
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Processing', 'Completed', 'Cancelled'],
        default: 'Pending'
    }
});

module.exports = mongoose.model('Order', orderSchema);