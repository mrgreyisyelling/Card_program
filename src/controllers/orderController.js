const Order = require('../models/orders');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const { orderName, orderQuantity, cardId, qrCodeId, websiteId, templateId } = req.body;

        if (!orderName || !orderQuantity || !cardId || !qrCodeId || !websiteId || !templateId) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newOrder = new Order({
            orderName,
            orderQuantity,
            cardId,
            qrCodeId,
            websiteId,
            templateId
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order created successfully', orderId: newOrder._id });
    } catch (error) {
        console.error('Error creating order:', error.message);
        res.status(500).json({ error: 'Failed to create order' });
    }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('templateId')
            .populate('cardId')
            .populate('qrCodeId')
            .populate('websiteId');
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error.message);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};

// Get a specific order by ID
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('cardId')
            .populate('qrCodeId')
            .populate('websiteId');
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.status(200).json(order);
    } catch (error) {
        console.error('Error fetching order:', error.message);
        res.status(500).json({ error: 'Failed to fetch order' });
    }
};


// Update order status
exports.updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order status', error });
    }
};