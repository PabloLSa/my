/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext, useEffect } from 'react';
import ThemeContext from '@/context/ThemeContext';

function Nav() {
  const [isLandscape, setIsLandscape] = useState(false);
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('bg-stone-950 h-full');

  const handleOrientationChange = () => {
    setIsLandscape(window.matchMedia('(orientation: landscape)').matches);
  };

  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'bg-gray-600 h-full text-2xl font-bold text-stone-950'
        : 'bg-stone-950 h-full text-2xl font-bold text-slate-200'
    );
  }, [theme.color]);

  useEffect(() => {
    handleOrientationChange(); // Verificar a orientação inicial

    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <>
      {isLandscape ? (
        <div className="landscape">
          <div className={themeClasses}>
            <div className="flex flex-col justify-center items-center h-full">
              <img
                src="/myphototwo.jpeg"
                alt="My Photo"
                className="rounded-full shadow-lg h-full w-96 object-cover my-4 transition-all duration-1000"
              />

            </div>
          </div>
        </div>
      ) : (
        <div className="portrait">
          <div className={themeClasses}>
            <div className="flex flex-col justify-center items-center h-full">
              <img
                src="/myphototwo.jpeg"
                alt="Minha Foto"
                className="rounded-full shadow-lg h-96 w-auto object-cover my-4"
              />
              <div className="text-center">
                <p className={themeClasses}>Desenvolvedor Front-end</p>
                <p className={themeClasses}>Campinas, São Paulo</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
