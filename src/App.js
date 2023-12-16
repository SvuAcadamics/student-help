import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Questionpaper from './pages/Questionpapers/Questionpaper';
import Syllabus from './pages/Syllabus/Syllabus';
import AboutUs from './pages/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
<<<<<<< HEAD
import Download from './components/Download/Download';
=======
import './App.css';
>>>>>>> 1e738f5bf9402e5c4239a5738a2a9a6d7ce3ced1

const App = () => {
  
  return (
<<<<<<< HEAD
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
=======
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/questionpaper" element={<Questionpaper />} />
        <Route path='/AboutUs' element={<AboutUs/>} />
      </Routes>
    </Router>
>>>>>>> 1e738f5bf9402e5c4239a5738a2a9a6d7ce3ced1
  );
};

export default App;
