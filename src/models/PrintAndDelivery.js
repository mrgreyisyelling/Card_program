const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String },
    cardID: { type: Schema.Types.ObjectId, required: true, ref: 'Card' },
    destinationID: { type: Schema.Types.ObjectId, required: true, ref: 'Board' },
    printerID: { type: Schema.Types.ObjectId, required: true, ref: 'Printer' },
    deliveryPersonID: { type: Schema.Types.ObjectId, ref: 'DeliveryPerson' },
    status: { type: String, enum: ['sent to printer', 'being printed', 'printed, waiting for pickup', 'delivery assigned', 'job picked up', 'delivery in progress', 'delivery completed'], required: true, default: 'sent to printer' },
    data: String,
});

module.exports = mongoose.model('DeliveryPerson', deliveryPersonSchema);
