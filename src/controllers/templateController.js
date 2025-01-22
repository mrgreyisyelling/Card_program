const Template = require('../models/Template');
const Website = require('../models/Website');
const QR = require('../models/QR');
const Card = require('../models/Card');

// Create a new template
exports.createTemplate = async (req, res) => {
    try {
        const { cardId, qrCodeId, websiteId } = req.body;

        if (!cardId || !qrCodeId || !websiteId) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newTemplate = new Template({
            templateId: Date.now(), // For simplicity, using a timestamp
            cardId,
            qrCodeId,
            websiteId,
        });

        await newTemplate.save();
        res.status(201).json({ message: 'Template created successfully', templateId: newTemplate.templateId });
    } catch (error) {
        console.error('Error creating template:', error.message);
        res.status(500).json({ error: 'Failed to create template' });
    }
};

// Fetch all templates
exports.getAllTemplates = async (req, res) => {
    try {
        const templates = await Template.find()
            .populate('cardId')
            .populate('qrCodeId')
            .populate('websiteId');
        res.status(200).json({ message: 'Templates Retrieved', templates });
    } catch (error) {
        console.error('Error fetching templates:', error.message);
        res.status(500).json({ error: 'Failed to fetch templates' });
    }
};

// Fetch a single template by ID
exports.getTemplateById = async (req, res) => {
    try {
        const template = await Template.findById(req.params.id)
            .populate('cardId')
            .populate('qrCodeId')
            .populate('websiteId');
        if (!template) return res.status(404).json({ error: 'Template not found' });
        res.status(200).json(template);
    } catch (error) {
        console.error('Error fetching template:', error.message);
        res.status(500).json({ error: 'Failed to fetch template' });
    }
};

exports.getAllIds = async (req, res) => {
    try {
        const cards = await Card.find({}, '_id');
        const qrs = await QR.find({}, '_id');
        const websites = await Website.find({}, '_id');

        res.status(200).json({
            cards: cards.map(card => card._id),
            qrs: qrs.map(qr => qr._id),
            websites: websites.map(website => website._id)
        });
    } catch (error) {
        console.error('Error fetching IDs:', error.message);
        res.status(500).json({ error: 'Failed to fetch IDs' });
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