const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const userRoutes = require("./routes/userRoute");
const eventRoutes = require("./routes/eventRoute");
const authRoutes = require("./routes/authRoute");
const registrationRoutes = require("./routes/registrationRoute");
const reportRoutes = require("./routes/reportRoute");

const app = express();

app.use(cors());          // <-- Add this
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Student Management System Backend is Running 🚀");
});
// Routes
app.use("/users", userRoutes);
app.use("/events", eventRoutes);
app.use("/", authRoutes);
app.use("/registrations", registrationRoutes);
app.use("/reports", reportRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});