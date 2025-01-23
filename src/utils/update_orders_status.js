const mongoose = require('mongoose');
const Order = require('../models/orders'); // Adjust the path as necessary

// Connect to the database
mongoose.connect('mongodb://localhost:27017/your_database_name', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const updateOrdersStatus = async () => {
    try {
        // Update all orders that do not have a status field
        const result = await Order.updateMany(
            { status: { $exists: false } },
            { $set: { status: 'Pending' } }
        );
        console.log(`Updated ${result.nModified} orders.`);
    } catch (error) {
        console.error('Error updating orders:', error);
    } finally {
        mongoose.connection.close();
    }
};

updateOrdersStatus();