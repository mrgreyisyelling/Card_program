const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create a new order
router.post('/', orderController.createOrder);

// Get all orders
router.get('/', orderController.getAllOrders);

// Get a specific order by ID
router.get('/:id', orderController.getOrderById);

// Get orders with status "Processing"
router.get('/status/processing', orderController.getProcessingOrders);

// Update order status
router.put('/:id/status', orderController.updateOrderStatus);


module.exports = router;
