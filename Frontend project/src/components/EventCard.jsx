const EventCard = ({ event, onEdit, onDelete }) => {
  return (
    <div className="event-card">

      <div className="event-content">

        <h3>{event.event_name}</h3>

        <p>📅 {event.event_date}</p>

        <p>📍 {event.venue}</p>

        <p>{event.description}</p>

      </div>

      <div className="event-buttons">

        <button
          className="edit-btn"
          onClick={() => onEdit(event)}
        >
          ✏ Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(event.id)}
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
};

export default EventCard;