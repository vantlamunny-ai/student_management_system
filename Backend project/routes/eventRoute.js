const express = require("express");

const router = express.Router();

const eventController = require("../controllers/eventController");

const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.post(
    "/",
    verifyToken,
    authorizeRoles("Admin"),
    eventController.createEvent
);

router.get(
    "/",
    verifyToken,
    eventController.getAllEvents
);

router.get(
    "/:id",
    verifyToken,
    eventController.getEventById
);

router.put(
    "/:id",
    verifyToken,
    authorizeRoles("Admin"),
    eventController.updateEvent
);

router.delete(
    "/:id",
    verifyToken,
    authorizeRoles("Admin"),
    eventController.deleteEvent
);

module.exports = router;