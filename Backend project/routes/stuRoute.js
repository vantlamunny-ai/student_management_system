const express = require("express");
const students = require("../students");

const router = express.Router();

// GET
router.get("/", (req, res) => {
    res.status(200).json(students);
});

// POST
router.post("/", (req, res) => {
    const newStudent = req.body;

    students.push(newStudent);

    res.status(200).json({
        message: "Student Added Successfully",
        data: newStudent
    });
});

// PUT
router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    students[index] = req.body;

    res.status(200).json({
        message: "Student Updated Successfully",
        data: students[index]
    });
});

// DELETE
router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    students.splice(index, 1);

    res.status(200).json({
        message: "Student Deleted Successfully"
    });
});
router.delete('/:id',(req,res)=>{
    const id= Number(req.params.id)
    const index = students.findIndex(student=>student.id ===id)
 
    if(index===-1){
        return res.status(404).json({message:"student not found in array"})
    }
 
    students.splice(index,1)
    return res.status(200).json({mesage:"student deleted succesfully"})
})
 
router.patch('/:id',(req,res)=>{//2
    const id = Number(req.params.id)//2
 
    const index = students.findIndex(student=>student.id === id)//2
 
    if(index===-1){
        return res.status(404).json({message:"student not found in array"})
    }
 
    students[index] = {...students[index],...req.body}//
 
    res.status(200).json({message:"student partially updated",student:students[index]})
 
})

module.exports = router;