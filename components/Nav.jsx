/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ThemeContext from '@/context/ThemeContext';
import { useState, useContext, useEffect } from 'react';
import Image from 'next/image';


function Nav() {
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('bg-stone-950 h-full');

  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'bg-gray-600 h-full text-2xl font-bold text-stone-950'
        : 'bg-stone-950 h-full text-2xl font-bold text-slate-200'
    );
  }, [theme.color]);

  return (
    <div className={themeClasses}>
      <div className="flex flex-col justify-center items-center h-full">
        <img
          src='/myphoto.jpeg'  //excesão img 
          alt='Minha Foto'
          className="rounded-full shadow-lg h-95 w-64 object-cover my-4"
        />
        <div className="text-center">
          <h2 className={themeClasses}>Desenvolvedor Front-end</h2>
        </div>
      </div>
    </div>
  );
}

export default Nav;







