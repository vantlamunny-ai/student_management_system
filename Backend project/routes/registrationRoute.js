const express = require("express");

const router = express.Router();

const registrationController = require("../controllers/registrationController");

const verifyToken = require("../middleware/authMiddleware");

router.post(
    "/",
    verifyToken,
    registrationController.registerEvent
);

router.get(
    "/",
    verifyToken,
    registrationController.getAllRegistrations
);

router.get(
    "/:id",
    verifyToken,
    registrationController.getRegistrationById
);

router.delete(
    "/:id",
    verifyToken,
    registrationController.deleteRegistration
);

module.exports = router;