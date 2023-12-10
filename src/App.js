import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Questionpaper from './pages/Questionpapers/Questionpaper';
import Navigation from './components/Navigator/Navigation';
import Syllabus from './pages/Syllabus/Syllabus';
import AboutUs from './pages/AboutUs/AboutUs';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/syllabus" element={<Syllabus theme={theme} />} />
        <Route path="/questionpaper" element={<Questionpaper theme={theme} />} />
        <Route path='/AboutUs' element={<AboutUs theme={theme} />} />
      </Routes>
    </Router>
  );
};

export default App;
