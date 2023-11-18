/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Courses from "./components/Courses";
import Review from "./components/Review";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";
// import PaymentForm from "./components/PaymentForm";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/review" element={<Review />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ApplicationForm" element={<ApplicationForm />} />
          {/* <Route path="/PaymentForm" element={<PaymentForm />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
