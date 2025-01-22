const QR = require("../models/QR");

exports.createBlankQR = async (req, res) => {
    try {
        const newQR = new QR({ title: "Untitled QR", description: "" });
        const savedQR = await newQR.save();

        res.status(201).json({ message: "Blank QR created", QR: savedQR });
    } catch (error) {
        res.status(500).json({ error: "Failed to create QR" });
    }
};

exports.updateQR = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedQR = await QR.findByIdAndUpdate(id, updates, { new: true });
        if(!updatedQR) return res.status(404).json({ error: "QR not found" });
        res.status(200).json({ message: "QR updated", QR: updatedQR });
    } catch (error) {
        res.status(500).json({ error: "Failed to update QR" });
    }
};

exports.getQR = async (req, res) => {
    const { id } = req.params;
    try {
        const QRFromDB = await QR.findById(id);
        if(!QRFromDB) return res.status(404).json({ error: "QR not found" });
        res.status(200).json({ message: "QR Found", QR: QRFromDB  });
    } catch (error) {
        res.status(500).json({ error: "Failed to get QR" });
    }
};

exports.deleteQR = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedQR = await QR.findByIdAndDelete(id);
        if(!deletedQR) return res.status(404).json({ error: "QR not found" });
        res.status(200).json({ message: "QR deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete QR" });
    }
};

exports.getAllQRs = async (req, res) => {
    try {
        const allQRs = await QR.findAll();
        res.status(200).json({ message: "All QRs", QRs: allQRs });
    } catch (error) {
        res.status(500).json({ error: "Failed to get QRs" });
    }
};

exports.createQR_2 = async (req, res) => {
    const { title, description, category } = req.body;
    try {
        const newQR = new QR({ title, description, category });
        const savedQR = await newQR.save();
        res.status(201).json({ message: "QR created", QR: savedQR });
    } catch (error) {
        console.error("Error creating QR:", error);
        res.status(500).json({ error: "Failed to create QR" });
    }
};

exports.createQROnSubmit = async (req, res) => {
    try {
        // Create a new QR entry with the current date and default description
        const newQR = new QR();
        await newQR.save();

        console.log(`QR created at: ${new Date().toISOString()}`);
        res.status(200).send('QR successfully created and logged.');
    } catch (error) {
        console.error('Error creating QR:', error);
        res.status(500).send('Error creating QR.');
    }
};

