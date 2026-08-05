const db = require("../config/db");

// Create Event
async function createEvent(eventData, organizer_id) {

    const {
        event_name,
        event_date,
        venue,
        description
    } = eventData;

    const query = `
    INSERT INTO events
    (event_name, event_date, venue, description, organizer_id)
    VALUES (?,?,?,?,?)`;

    const [result] = await db.query(query, [
        event_name,
        event_date,
        venue,
        description,
        organizer_id
    ]);

    return {
        id: result.insertId,
        event_name,
        event_date,
        venue,
        description,
        organizer_id
    };
}

// Get All Events
async function getAllEvents() {

    const [rows] = await db.query("SELECT * FROM events");

    return rows;
}

// Get Event By Id
async function getEventById(id) {

    const [rows] = await db.query(
        "SELECT * FROM events WHERE id=?",
        [id]
    );

    return rows[0];
}

// Update Event
async function updateEvent(id, eventData) {

    const {
        event_name,
        event_date,
        venue,
        description
    } = eventData;

    const query = `
    UPDATE events
    SET
        event_name=?,
        event_date=?,
        venue=?,
        description=?
    WHERE id=?`;

    const [result] = await db.query(query, [
        event_name,
        event_date,
        venue,
        description,
        id
    ]);

    if (result.affectedRows === 0) {
        return null;
    }

    return {
        id,
        event_name,
        event_date,
        venue,
        description
    };
}

// Delete Event
async function deleteEvent(id) {

    const [result] = await db.query(
        "DELETE FROM events WHERE id=?",
        [id]
    );

    if (result.affectedRows === 0) {
        return null;
    }

    return {
        message: "Event deleted successfully"
    };
}

module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent
};