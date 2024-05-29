import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api";

const initializeTimes = () => fetchAPI(new Date());

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

const BookingPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    console.log("Form submitted with data: ", formData);
    if (submitAPI(formData)) {
      navigate("/confirmation");
    }
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  return (
    <div>
      <BookingForm
        onSubmit={handleSubmit}
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
};

export default BookingPage;
