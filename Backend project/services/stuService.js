const students = require("../students");

const getStudents = () => {
    return students;
};

const addStudent = (student) => {
    students.push(student);
    return student;
};

const updateStudent = (id, updatedStudent) => {

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return null;
    }

    students[index] = updatedStudent;

    return students[index];
};

const deleteStudent = (id) => {

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return false;
    }

    students.splice(index,1);

    return true;
};

module.exports = {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
};