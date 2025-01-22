const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    templateId: {
        type: Number,
        unique: true,
        required: true,
        autoIncrement: true,
    },
    cardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card',
        required: true,
    },
    qrCodeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QR', // Assuming QR codes are stored in the same Card collection
        required: true,
    },
    websiteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Website', // Assuming websites are also stored in the same Card collection
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Template', templateSchema);
