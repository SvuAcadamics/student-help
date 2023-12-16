import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Questionpaper from './pages/Questionpapers/Questionpaper';
import Syllabus from './pages/Syllabus/Syllabus';
import AboutUs from './pages/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/questionpaper" element={<Questionpaper />} />
        <Route path='/AboutUs' element={<AboutUs/>} />
      </Routes>
    </Router>
  );
};

export default App;
