const express = require("express");
const router = express.Router();

const stuController = require("../controllers/stuController");

router.get("/", stuController.getStudents);
router.post("/", stuController.addStudent);
router.put("/:id", stuController.updateStudent);
router.delete("/:id", stuController.deleteStudent);

module.exports = router;