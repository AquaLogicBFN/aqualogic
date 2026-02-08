import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ServiceDetail from './components/ServiceDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-slate-900 font-sans selection:bg-cyan-400 selection:text-slate-900">
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

export default App;