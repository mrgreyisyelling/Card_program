const Node = require('../models/Node');


exports.createNode = async (req, res) => {
    const { name, type, data } = req.body;
    try {
        const { name, type, data } = req.body;
        const node = new Node({ name, type, data });
        await node.save();
        res.status(201).json({ message: "Node created", node });
    } catch (error) {
        res.status(500).json({ error: "Failed to create node" });
    }
};


// Get all nodes
exports.getAllNodes = async (req, res) => {
    try {
        const nodes = await Node.find().populate('Board owner');
        res.status(200).json(nodes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single node by ID
exports.getNodeById = async (req, res) => {
    try {
        const node = await Node.findById(req.params.id).populate('Board owner');
        if (!node) return res.status(404).json({ error: 'Node not found' });
        res.status(200).json(node);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a node by ID
exports.updateNode = async (req, res) => {
    try {
        const node = await Node.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!node) return res.status(404).json({ error: 'Node not found' });
        res.status(200).json(node);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a node by ID
exports.deleteNode = async (req, res) => {
    try {
        const node = await Node.findByIdAndDelete(req.params.id);
        if (!node) return res.status(404).json({ error: 'Node not found' });
        res.status(200).json({ message: 'Node deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};