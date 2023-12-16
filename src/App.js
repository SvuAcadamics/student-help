import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Questionpaper from './pages/Questionpapers/Questionpaper';
import Syllabus from './pages/Syllabus/Syllabus';
import AboutUs from './pages/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Download from './components/Download/Download';

const App = () => {
  
  return (
    <>
      <Download/>
    </>
    // <Router>
    //   <Navbar/>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/syllabus" element={<Syllabus />} />
    //     <Route path="/questionpaper" element={<Questionpaper />} />
    //     <Route path='/AboutUs' element={<AboutUs/>} />
    //   </Routes>
    // </Router>
  );
};

export default App;
