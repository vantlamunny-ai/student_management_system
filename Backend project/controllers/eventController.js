const eventService = require("../services/eventService");

async function createEvent(req, res) {

    try {

        const event = await eventService.createEvent(
            req.body,
            req.user.id
        );

        res.status(201).json({
            success: true,
            message: "Event created successfully",
            data: event
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

async function getAllEvents(req, res) {

    try {

        const events = await eventService.getAllEvents();

        res.status(200).json({
            success: true,
            data: events
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

async function getEventById(req, res) {

    try {

        const { id } = req.params;

        const event = await eventService.getEventById(id);

        if (!event) {

            return res.status(404).json({
                success: false,
                message: "Event not found"
            });

        }

        res.status(200).json({
            success: true,
            data: event
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

async function updateEvent(req, res) {

    try {

        const { id } = req.params;

        const event = await eventService.updateEvent(id, req.body);

        if (!event) {

            return res.status(404).json({
                success: false,
                message: "Event not found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Event updated successfully",
            data: event
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

async function deleteEvent(req, res) {

    try {

        const { id } = req.params;

        const event = await eventService.deleteEvent(id);

        if (!event) {

            return res.status(404).json({
                success: false,
                message: "Event not found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Event deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent
};