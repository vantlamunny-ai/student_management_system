const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Welcome to the Event Management System Backend"
    });
});

app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});