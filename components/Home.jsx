/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext, useEffect } from 'react';
import ThemeContext from '@/context/ThemeContext';
import Link from 'next/link';

function Home() {
  const [isLandscape, setIsLandscape] = useState(false);
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('bg-stone-950 h-full');

  const handleOrientationChange = () => {
    setIsLandscape(window.matchMedia('(orientation: landscape)').matches);
  };

  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'bg-gray-600 h-full'
        : 'bg-stone-950 h-full'
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
              <div className="flex items-center">
                <Link href='/about' className='mr-4'>
                  <span
                    className={`text-4xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text ${themeClasses}`}>
                    Sobre Mim
                  </span>
                </Link>
                <img
                  src="/myphototwo.jpeg"
                  alt="My Photo"
                  className="rounded-full shadow-lg h-full w-96 object-cover my-4"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="portrait">
          <div className={themeClasses}>
            <div className="flex flex-col justify-center items-center h-full">
              <Link href='/about'>
                <img
                  src="/myphototwo.jpeg"
                  alt="Minha Foto"
                  className="rounded-full shadow-lg h-96 w-auto object-cover my-4"
                  style={{ maxWidth: '100%' }}
                />
              </Link>

              <div className="text-center">
                <p className={`bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text ${themeClasses}`}>
                  Desenvolvedor Front-end
                </p>
                <p className={`bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text ${themeClasses}`}>
                  Campinas, São Paulo
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
