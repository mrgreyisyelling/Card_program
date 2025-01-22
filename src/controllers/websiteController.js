const Website = require("../models/Website");

exports.createBlankWebsite = async (req, res) => {
    try {
        const newWebsite = new Website({ title: "Untitled Website", description: "" });
        const savedWebsite = await newWebsite.save();

        res.status(201).json({ message: "Blank Website created", Website: savedWebsite });
    } catch (error) {
        res.status(500).json({ error: "Failed to create Website" });
    }
};

exports.updateWebsite = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedWebsite = await Website.findByIdAndUpdate(id, updates, { new: true });
        if(!updatedWebsite) return res.status(404).json({ error: "Website not found" });
        res.status(200).json({ message: "Website updated", Website: updatedWebsite });
    } catch (error) {
        res.status(500).json({ error: "Failed to update Website" });
    }
};

exports.getWebsite = async (req, res) => {
    const { id } = req.params;
    try {
        const WebsiteFromDB = await Website.findById(id);
        if(!WebsiteFromDB) return res.status(404).json({ error: "Website not found" });
        res.status(200).json({ message: "Website Found", Website: WebsiteFromDB  });
    } catch (error) {
        res.status(500).json({ error: "Failed to get Website" });
    }
};

exports.deleteWebsite = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedWebsite = await Website.findByIdAndDelete(id);
        if(!deletedWebsite) return res.status(404).json({ error: "Website not found" });
        res.status(200).json({ message: "Website deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete Website" });
    }
};

exports.getAllWebsites = async (req, res) => {
    try {
        const allWebsites = await Website.findAll();
        res.status(200).json({ message: "All Websites", Websites: allWebsites });
    } catch (error) {
        res.status(500).json({ error: "Failed to get Websites" });
    }
};

exports.createWebsite_2 = async (req, res) => {
    const { title, description, category } = req.body;
    try {
        const newWebsite = new Website({ title, description, category });
        const savedWebsite = await newWebsite.save();
        res.status(201).json({ message: "Website created", Website: savedWebsite });
    } catch (error) {
        console.error("Error creating Website:", error);
        res.status(500).json({ error: "Failed to create Website" });
    }
};

exports.createWebsiteOnSubmit = async (req, res) => {
    try {
        // Create a new Website entry with the current date and default description
        const newWebsite = new Website();
        await newWebsite.save();

        console.log(`Website created at: ${new Date().toISOString()}`);
        res.status(200).send('Website successfully created and logged.');
    } catch (error) {
        console.error('Error creating Website:', error);
        res.status(500).send('Error creating Website.');
    }
};

