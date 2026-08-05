const db = require("../config/db");

// Report 1 - All Registrations
async function getRegistrationReport() {

    const query = `
    SELECT
        r.id,
        u.name AS student_name,
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
    ORDER BY r.registration_date DESC`;

    const [rows] = await db.query(query);

    return rows;
}

// Report 2 - Event Wise Registration Count
async function getEventReport() {

    const query = `
    SELECT
        e.id,
        e.event_name,
        e.event_date,
        COUNT(r.id) AS total_registrations
    FROM events e
    LEFT JOIN registrations r
        ON e.id = r.event_id
    GROUP BY e.id`;

    const [rows] = await db.query(query);

    return rows;
}

module.exports = {
    getRegistrationReport,
    getEventReport
};