const Template = require('../models/Template');

exports.createTemplate = async (req, res) => {
    const { name, description, category } = req.body;
    try {
        const template = new Template({ name, description, category });
        await template.save();
        res.status(201).json({ message: "Template created", template });
    } catch (error) {
        res.status(500).json({ error: "Failed to create template" });
    }
};

// Get all templates
exports.getAllTemplates = async (req, res) => {
    try {
        const templates = await Template.find();
        res.status(200).json(templates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single template by ID
exports.getTemplateById = async (req, res) => {
    try {
        const template = await Template.findById(req.params.id);
        if (!template) return res.status(404).json({ error: 'Template not found' });
        res.status(200).json(template);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a template by ID
exports.updateTemplate = async (req, res) => {
    try {
        const template = await Template.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!template) return res.status(404).json({ error: 'Template not found' });
        res.status(200).json(template);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a template by ID
exports.deleteTemplate = async (req, res) => {
    try {
        const template = await Template.findByIdAndDelete(req.params.id);
        if (!template) return res.status(404).json({ error: 'Template not found' });
        res.status(200).json({ message: 'Template deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};