const stuService = require("../services/stuService");
const getStudents = (req,res)=>{

    res.json(stuService.getStudents());

};

const addStudent = (req,res)=>{

    const student = stuService.addStudent(req.body);

    res.json({
        message:"Student Added Successfully",
        data:student
    });

};

const updateStudent = (req,res)=>{

    const student = stuService.updateStudent(
        Number(req.params.id),
        req.body
    );

    if(!student){

        return res.status(404).json({
            message:"Student Not Found"
        });

    }

    res.json({
        message:"Student Updated Successfully",
        data:student
    });

};

const deleteStudent = (req,res)=>{

    const deleted = stuService.deleteStudent(Number(req.params.id));

    if(!deleted){

        return res.status(404).json({
            message:"Student Not Found"
        });

    }

    res.json({
        message:"Student Deleted Successfully"
    });

};

module.exports={
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
};