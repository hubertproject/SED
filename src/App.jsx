// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import ApplicationForm from "./components/ApplicationForm";

import Gallery from "./components/Gallery";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <div id="home">
            <Home />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="courses">
            <Courses />
          </div>

          <div id="review">
            <Review />
          </div>
          <div id="gallery">
            <Gallery />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
      {/* <ApplicationForm /> */}
    </Router>
  );
};

export default App;
