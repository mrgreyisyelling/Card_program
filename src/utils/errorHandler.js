exports.handleError = (res, error, message = "An error occurred") => {
    console.error(error);
    res.status(500).json({ error: message });
}
