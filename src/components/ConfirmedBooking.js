import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
