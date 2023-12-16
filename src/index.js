// index.js or App.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Function to toggle the theme
const toggleTheme = () => {
  const rootElement = document.documentElement;
  rootElement.classList.toggle('dark');
  rootElement.classList.toggle('light');
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppWithThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  const toggleAndSetTheme = () => {
    toggleTheme();
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <React.StrictMode>
      <App theme={theme} toggleTheme={toggleAndSetTheme} />
    </React.StrictMode>
  );
};

root.render(<AppWithThemeToggle />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();