const express = require("express");

const router = express.Router();

const reportController = require("../controllers/reportController");

const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Only Admin can view reports

router.get(
    "/registrations",
    verifyToken,
    authorizeRoles("Admin"),
    reportController.getRegistrationReport
);

router.get(
    "/events",
    verifyToken,
    authorizeRoles("Admin"),
    reportController.getEventReport
);

module.exports = router;