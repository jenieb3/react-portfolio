import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Project from './Projects';
import Contact from '../components/Contact';
import CV from '../components/CV';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        
      </Routes>
    </Router>
  );
}

export default App;

