import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Questionpaper from './pages/Questionpapers/Questionpaper';
import Navigation from './components/Navigator/Navigation';
import Syllabus from './pages/Syllabus/Syllabus';
import Clubs from './pages/Clubs/Clubs';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/questionpaper" element={<Questionpaper />} />
        <Route path='/clubs' element={<Clubs/>}/>
      </Routes>
    </Router>
  );
};

export default App;
