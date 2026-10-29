const express = require("express");

const app = express();

// Log the status code of each response
app.use((req, res, next) => {
    res.on("finish", () => {
        console.log(`${req.method} ${req.url} - ${res.statusCode}`);
    });

    next();
});

// GET /
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Node.js and Express Server");
});

// GET /about
app.get("/about", (req, res) => {
    res.status(200).json({
        name: "Your Name",
        section: "Your Section"
    });
});

// GET /time
app.get("/time", (req, res) => {
    const currentDateTime = new Date();
    res.status(200).send(currentDateTime.toString());
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
});

module.exports = app;