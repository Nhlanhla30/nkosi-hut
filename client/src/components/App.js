import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TestAPI from './TestAPI'; // Import the new component
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar /> {/* Assuming Navbar is correctly imported and set up */}
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />}/>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/test-api" element={<TestAPI />} /> {/* Route for testing the API */}
      </Routes>
    </Router>
  );
}

export default App;

