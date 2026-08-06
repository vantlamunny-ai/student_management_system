import axios from "axios";

const API = "http://localhost:5000/events";

const getToken = () => {
  return localStorage.getItem("token");
};

const config = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
});

// Get Events
export const getEvents = () => {
  return axios.get(API, config());
};

// Add Event
export const addEvent = (data) => {
  return axios.post(API, data, config());
};

// Update Event
export const updateEvent = (id, data) => {
  return axios.put(`${API}/${id}`, data, config());
};

// Delete Event
export const deleteEvent = (id) => {
  return axios.delete(`${API}/${id}`, config());
};