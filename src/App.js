import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/reservations" element={<Reservations />}></Route>
          <Route path="/order-online" element={<OrderOnline />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
