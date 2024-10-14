import React, { useState, useEffect } from 'react';
import SunIcon from "./Sun.svg";
import MoonIcon from "./Moon.svg";
import "./DarkMode.css";

const Theme: React.FC = () => {
  // Initialize the state based on localStorage value
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Handle theme toggle
  const handleToggleChange = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark', newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Apply saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []); // Empty dependency array to run once on mount

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        checked={isDarkMode}
        onChange={handleToggleChange}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <img src={SunIcon} alt="Sun" className='sun' />
        <img src={MoonIcon} alt="Moon" className='moon' />
      </label>
    </div>
  );
};

export default Theme;
