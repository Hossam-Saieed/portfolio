import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactMe from './pages/ContactMe';
import About from './pages/About'
import Navbar from './components/NavBar';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import ScrollToTop from './hooks/scrollToTop';
import PBPMProject from './components/PBPMProject';
import GeoSpatialProject from './components/GeoSpatialProject';


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio-content" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/pbpm" element={<PBPMProject />} />
        <Route path="/geo-spatial" element={<GeoSpatialProject />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
