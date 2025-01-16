const mongoose = require('mongoose');

const deliveryPersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    location: { type: Schema.Types.ObjectId, required: true, ref: 'Location' },
    deliveryPersonID: { type: String, required: true },
    data: String,
});

module.exports = mongoose.model('DeliveryPerson', deliveryPersonSchema);
