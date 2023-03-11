import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Data from './Data';
import Project from './Project';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/projects" element={<Project/>} />
        <Route exact path="/projects/:id" element={<Data/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;