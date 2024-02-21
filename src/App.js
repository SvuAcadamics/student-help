// import React, { lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import { Route as RouteNames, RoutePrefix } from './roots';
import LazyLoadComp from './lazyLoadComp';

const App = () => {

  return (
    <Router>
      <Navbar/>
      <main>
      <Routes>
        <Route path='/' element={<LazyLoadComp filePath='./pages/Home/Home'/>} />
        <Route path={RoutePrefix} element={<LazyLoadComp filePath='./pages/Home/Home'/>} />
        <Route path={`${RoutePrefix}/${RouteNames.Home}`} element={<LazyLoadComp filePath='./pages/Home/Home'/>}/>
        <Route path={`${RoutePrefix}/${RouteNames.Syllabus}`} element={<LazyLoadComp filePath='./pages/Syllabus/Syllabus'/>} />
        <Route path={`${RoutePrefix}/${RouteNames.QuestionPaper}`} element={<LazyLoadComp filePath='./pages/Questionpapers/Questionpaper'/>} />
        <Route path={`${RoutePrefix}/${RouteNames.Aboutus}`} element={<LazyLoadComp filePath='./pages/AboutUs/AboutUs'/>} />
        <Route path='/login' element={<LazyLoadComp filePath='./containers/LoginContainer'/>} />  
        <Route path='/registration' element={<LazyLoadComp filePath='./containers/RegistrationContainer' />} />             
      </Routes>
      </main>
      <Footer/>
    </Router>

  );
};

export default App;