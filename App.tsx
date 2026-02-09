import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ServiceDetail from "./components/ServiceDetail";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen text-slate-900 font-sans">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
