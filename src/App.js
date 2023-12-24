import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Questionpaper from './pages/Questionpapers/Questionpaper';
import Syllabus from './pages/Syllabus/Syllabus';
import AboutUs from './pages/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';

import Download from './components/Download/Download';

import './App.css';
import Footer from './components/Footer/Footer';



const App = () => {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/questionpaper" element={<Questionpaper />} />
        <Route path='/AboutUs' element={<AboutUs/>} />
      </Routes>
      <Footer/>
    </Router>

  );
};

export default App;