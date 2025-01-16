const express = require('express');
const router = express.Router();
const nodeController = require('../controllers/nodeController');

router.post("/create-node", nodeController.createNode);


// Get all nodes
router.get("/", nodeController.getAllNodes);

// Get a single node by ID
router.get("/:id", nodeController.getNodeById);

// Update a node by ID
router.put("/:id", nodeController.updateNode);

// Delete a node by ID
router.delete("/:id", nodeController.deleteNode);

module.exports = router;