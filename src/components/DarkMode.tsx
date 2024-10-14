import React from "react";
import SunIcon from "./Sun.svg";
import MoonIcon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode: React.FC = () => {
    const setDarkMode = () => {
        const body = document.querySelector("body") as HTMLBodyElement;
        if (body) {
            body.setAttribute('data-theme', 'dark');
        }
    };

    const setLightMode = () => {
        const body = document.querySelector("body") as HTMLBodyElement;
        if (body) {
            body.setAttribute('data-theme', 'light');
        }
    };

    const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    };

    // Initialize with light mode
    React.useEffect(() => {
        setLightMode();
    }, []);

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <img src={SunIcon} alt="Sun" className='sun' />
                <img src={MoonIcon} alt="Moon" className='moon' />
            </label>
        </div>
    );
};

export default DarkMode;
