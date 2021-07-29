import React, { useContext, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import ThemeContext from '../context/theme';

const DarkMode = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {/* <button
        type="button"
        className="focus:outline-none"
        // onClick={() => setDarkMode(!darkMode)}
        onClick={handleTheme}
        aria-label="Theme toggle"
      > */}
      {theme === 'dark' ? (
        <SunIcon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="h-10 w-10  dark:text-gray-base  focus:outline-none"
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="h-10 w-10 focus:outline-none dark:text-gray-base"
        />
      )}
      {/* </button> */}
    </div>
  );
};

export default DarkMode;
