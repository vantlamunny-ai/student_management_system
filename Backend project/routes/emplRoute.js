const express = require("express");
const employees = require("../employees");
const router = express.Router();
router.get("/", (req, res) => {
    res.status(200).json(employees);
});
router.post("/", (req, res) => {
    const newEmployee = req.body;
    employees.push(newEmployee);
    res.status(200).json({
        message: "Employee Added Successfully",
        data: newEmployee
    });
});
router.put("/", (req, res) => {
    res.status(200).json({
        message: "Employee Updated Successfully"
    });
});
router.delete("/", (req, res) => {
    res.status(200).json({
        message: "Employee Deleted Successfully"
    });

});

module.exports = router;