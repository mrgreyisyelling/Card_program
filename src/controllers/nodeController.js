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
