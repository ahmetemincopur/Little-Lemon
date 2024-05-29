import React, { useState, useEffect } from "react";

function BookingForm({ onSubmit, availableTimes = [], dispatch }) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: availableTimes.length > 0 ? availableTimes[0] : "",
    guests: 1,
    specialRequests: "",
  });

  useEffect(() => {
    if (availableTimes.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        time: availableTimes[0],
      }));
    }
  }, [availableTimes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "date") {
      dispatch({ type: "UPDATE_TIMES", payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Time:
        <select name="time" onChange={handleChange} required>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      <label>
        Number of Guests:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Special Requests:
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Make Your reservation</button>
    </form>
  );
}

export default BookingForm;
