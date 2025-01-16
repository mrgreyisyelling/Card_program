const express = require('express');
const router = express.Router();
const nodeController = require('../controllers/nodeController');

router.post("/create-node", nodeController.createNode);


module.exports = router;
