const db = require("../config/db");

// Register Event
async function registerEvent(student_id, event_id) {

    const query = `
    INSERT INTO registrations(student_id, event_id)
    VALUES (?, ?)`;

    const [result] = await db.query(query, [
        student_id,
        event_id
    ]);

    return {
        id: result.insertId,
        student_id,
        event_id
    };
}

// Get All Registrations
async function getAllRegistrations() {

    const query = `
    SELECT
        r.id,
        u.name,
        u.email,
        e.event_name,
        e.event_date,
        e.venue,
        r.registration_date
    FROM registrations r
    JOIN users u
        ON r.student_id = u.id
    JOIN events e
        ON r.event_id = e.id`;

    const [rows] = await db.query(query);

    return rows;
}

// Get Registration By Id
async function getRegistrationById(id) {

    const query = `
    SELECT
        r.id,
        u.name,
        u.email,
        e.event_name,
        e.event_date,
        e.venue,
        r.registration_date
    FROM registrations r
    JOIN users u
        ON r.student_id = u.id
    JOIN events e
        ON r.event_id = e.id
    WHERE r.id = ?`;

    const [rows] = await db.query(query, [id]);

    return rows[0];
}

// Delete Registration
async function deleteRegistration(id) {

    const [result] = await db.query(
        "DELETE FROM registrations WHERE id=?",
        [id]
    );

    if (result.affectedRows === 0) {
        return null;
    }

    return {
        message: "Registration deleted successfully"
    };
}

module.exports = {
    registerEvent,
    getAllRegistrations,
    getRegistrationById,
    deleteRegistration
};