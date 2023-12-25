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
import { Route as RouteNames, RoutePrefix } from './roots';



const App = () => {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path={RoutePrefix} element={<Home/>} />
        <Route path={`${RoutePrefix}/${RouteNames.Home}`} element={<Home />} />
        <Route path={`${RoutePrefix}/${RouteNames.Syllabus}`} element={<Syllabus />} />
        <Route path={`${RoutePrefix}/${RouteNames.QuestionPaper}`} element={<Questionpaper />} />
        <Route path={`${RoutePrefix}/${RouteNames.Aboutus}`} element={<AboutUs/>} />
      </Routes>
      <Footer/>
    </Router>

  );
};

export default App;