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

exports.createQRUrl = async (req, res) => { 
    try {
        console.log("Generating QR URL...");
        const { id } = req.params;
        const { qrCodeUrl } = req.body;

        console.log(`Received ID: ${id}`);
        console.log(`Received QR Code URL: ${qrCodeUrl}`);

        // Find the QR by ID
        const qr = await QR.findById(id);
        if (!qr) {
            console.log('QR not found');
            return res.status(404).json({ error: 'QR not found' });
        }
       
        // Update the qrCodeUrl field
        qr.qrCodeUrl = qrCodeUrl;

        // Save the changes to the database
        await qr.save();       

        console.log('QR URL updated successfully');
        res.status(200).json({ qrCodeUrl });
    } catch (error) {
        console.error('Error generating QR URL:', error.message);
        res.status(500).json({ error: 'Failed to generate QR URL' });
    }
}
exports.updateQRRedirectUrl = async (req, res) => {
    try {
        const { id } = req.params;
        const { qrRedirectUrl } = req.body;

        // Find the QR by ID
        const qr = await QR.findById(id);
        if (!qr) {
            return res.status(404).json({ error: 'QR not found' });
        }

        // Update the qrRedirectUrl field
        qr.qrRedirectUrl = qrRedirectUrl;

        // Save the changes to the database
        await qr.save();

        res.status(200).json({ message: 'QR redirect URL updated successfully', qr });
    } catch (error) {
        console.error('Error updating QR redirect URL:', error.message);
        res.status(500).json({ error: 'Failed to update QR redirect URL' });
    }
};