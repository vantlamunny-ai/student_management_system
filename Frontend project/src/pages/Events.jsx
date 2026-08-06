import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";

import {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
} from "../api/eventApi";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  // ==========================
  // Fetch All Events
  // ==========================
  const fetchEvents = async () => {
    try {
      const response = await getEvents();

      console.log("API Response:", response.data);

      if (response.data.success) {
        setEvents(response.data.data);
      }

    } catch (error) {

      console.log("Error fetching events:", error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to connect to server");
      }

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ==========================
  // Add / Update Event
  // ==========================
  const handleSubmit = async (formData) => {

    try {

      if (editingEvent) {

        await updateEvent(editingEvent.id, formData);

        alert("Event Updated Successfully");

      } else {

        await addEvent(formData);

        alert("Event Added Successfully");

      }

      setEditingEvent(null);

      fetchEvents();

    } catch (error) {

      console.log(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong");
      }

    }

  };

  // ==========================
  // Edit
  // ==========================
  const handleEdit = (event) => {

    setEditingEvent(event);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  // ==========================
  // Delete
  // ==========================
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    try {

      await deleteEvent(id);

      alert("Event Deleted Successfully");

      fetchEvents();

    } catch (error) {

      console.log(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Delete Failed");
      }

    }

  };

  return (
    <div className="container">

      <div className="dashboard-header">

        <h1>📅 Events Management</h1>

        <p>
          Create, Update and Manage Events Easily
        </p>

      </div>

      {/* Event Form */}

      <EventForm
        onSubmit={handleSubmit}
        editingEvent={editingEvent}
      />

      <br />

      <h2 className="events-title">
        All Events
      </h2>

      {loading ? (

        <h3 style={{ textAlign: "center" }}>
          Loading Events...
        </h3>

      ) : events.length === 0 ? (

        <h3 style={{ textAlign: "center" }}>
          No Events Available
        </h3>

      ) : (

        <div className="event-grid">

          {events.map((event) => (

            <EventCard
              key={event.id}
              event={event}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />

          ))}

        </div>

      )}

    </div>
  );
};

export default Events;