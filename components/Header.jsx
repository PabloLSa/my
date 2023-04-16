import ThemeContext from '@/context/ThemeContext';
import { useContext } from 'react';
import { useState } from 'react';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineFlashlightOff, MdOutlineFlashlightOn } from 'react-icons/md';

// text-blue-15b8c6
// text-blue-500
function Header() {
  const theme = useContext(ThemeContext);
  // console.log(theme);
  return (

    <header className='bg-gray-800 flex flex-col justify-center items-center h-32 w-full'>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full px-4">
        <h1 className=' text-blue-15b8c6 text-4xl font-bold text-center'
          style={{
            textShadow: '0px 0px 10px rgba(0, 191, 255, 0.5)',
            boxShadow: '0px 0px 10px rgba(0, 191, 255, 0.5)',
            padding: '0.3em',
            borderRadius: '0.5em',
            whiteSpace: 'nowrap'
          }}>
          Pablo Landim de Sá
        </h1>
        <div className="flex items-center mt-2">
          <span className='text-white mx-2 text-xl flex items-center'>
            <a href='https://www.linkedin.com/in/pablolandimdesadev/'
              target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
          </span>
          <span className='text-white mx-2 text-xl flex items-center'>
            <a href='https://github.com/PabloLSa'
              target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
          </span>
          <span className='text-white mx-2 text-xl flex items-center'>
            <button
              onClick={() => theme.toogleTheme()}>
                {theme.color === "dark" ? <MdOutlineFlashlightOff /> : 
                <MdOutlineFlashlightOn/>}</button>
          </span>
        </div>
      </div>
    </header>








  );
}

export default Header;
