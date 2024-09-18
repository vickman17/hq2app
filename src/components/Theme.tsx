import React, { useState, useEffect } from 'react';
import { IonToggle, IonLabel, IonItem } from '@ionic/react';
import edit from './theme.module.css';
import SunIcon from "./Sun.svg";
import MoonIcon from "./Moon.svg";
import "./DarkMode.css";



const Theme: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => localStorage.getItem('theme') === '');

  const handleToggleChange = () => {
    setIsDarkMode((prevMode) => {
        const newMode  = !prevMode;
        document.body.classList.toggle('dark', newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
        return newMode;

    });
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);


  return (
      <div className='dark_mode'>
      <input
          className='dark_mode_input'
          type='checkbox'
          id='darkmode-toggle'
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
