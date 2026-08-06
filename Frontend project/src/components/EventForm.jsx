import { useState, useEffect } from "react";

const EventForm = ({ onSubmit, editingEvent }) => {

  const [formData, setFormData] = useState({
    event_name: "",
    event_date: "",
    venue: "",
    description: "",
  });

  useEffect(() => {
    if (editingEvent) {
      setFormData(editingEvent);
    }
  }, [editingEvent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(formData);

    if (!editingEvent) {
      setFormData({
        event_name: "",
        event_date: "",
        venue: "",
        description: "",
      });
    }
  };

  return (
    <div className="event-form">

      <h2>
        {editingEvent ? "Update Event" : "Add Event"}
      </h2>

      <form onSubmit={submitForm}>

        <input
          type="text"
          name="event_name"
          placeholder="Event Name"
          value={formData.event_name}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="event_date"
          value={formData.event_date}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={formData.venue}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        />

        <button type="submit">
          {editingEvent ? "Update Event" : "Add Event"}
        </button>

      </form>

    </div>
  );
};

export default EventForm;