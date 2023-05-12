import Link from 'next/link';
import React from 'react';
import ThemeContext from '@/context/ThemeContext';
import { useContext, useState, useEffect } from 'react';

const Footer = () => {
  const theme = useContext(ThemeContext);
  const [themeClass, setThemeClass] = useState('flex flex-grow-0 flex-shrink-0 items-center justify-center h-16 bg-stone-950');
  useEffect(() => {
    setThemeClass(
      theme.color === 'light'
        ? 'flex flex-grow-0 flex-shrink-0 items-center justify-center h-16 bg-stone-950'
        : 'flex flex-grow-0 flex-shrink-0 items-center justify-center h-16 bg-gray-800'
    );
  }, [theme.color]);
  return (
    <div>
             <footer className={themeClass}>
          <div className="container mx-auto text-center">
            <Link href="/contact">
              <span className="text-5xl animate-pulse bg-gradient-to-r from-blue-15b8c6 to-blue-500 bg-clip-text text-blue-600 animate-pulse-stronger">
                Contato
              </span>

            </Link>  
          </div>
        </footer>
    </div>
  );
}

export default Footer;
