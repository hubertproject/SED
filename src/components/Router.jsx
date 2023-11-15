 // App.jsx
 import React from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Navbar from "./components/Navbar";
 import Home from "./components/Home";
 import About from "./components/About";
 import Courses from "./components/Courses";
 import Review from "./components/Review";
 import Contact from "./components/Contact";
 import Footer from "./components/Footer";
 import Gallery from "./components/Gallery";
 
 const App = () => {
   return (
     <Router>
       <div>
         <Navbar />
 
         <main>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/courses" element={<Courses />} />
             <Route path="/review" element={<Review />} />
             <Route path="/gallery" element={<Gallery />} />
             <Route path="/contact" element={<Contact />} />
           </Routes>
         </main>
 
         <Footer />
       </div>
     </Router>
   );
 };
 
 export default App;
 