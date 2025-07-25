// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopInfoBar from "./components/TopInfoBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal"; // ✅ Import the modal
import MajestyStays from "./pages/Majestystays";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import StartProject from "./pages/StartProject";
// import Signin from "./components/Signin";
// import Register from "./components/Register";

function App() {
  const [showModal, setShowModal] = useState(false); // ✅ Modal state

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopInfoBar />
        <Navbar onEnquiryClick={() => setShowModal(true)} /> {/* ✅ Pass trigger */}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<StartProject />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/signin" element={<Signin />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/majestystays" element={<MajestyStays />} />
          </Routes>
        </main>

        <Footer />

        {/* ✅ Conditionally render modal */}
        {showModal && <ContactModal onClose={() => setShowModal(false)} />}
      </div>
    </Router>
  );
}

export default App;
