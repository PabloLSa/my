import Link from 'next/link';
import React from 'react';
import ThemeContext from '@/context/ThemeContext';
import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react';

const Footer = () => {
  const router = useRouter();
  const theme = useContext(ThemeContext);
  const [themeClass, setThemeClass] = useState('flex flex-grow-0 flex-shrink-0 items-center justify-center h-16 bg-gray-800');
  useEffect(() => {
    setThemeClass(
      theme.color === 'light'
        ? 'bg-stone-950'
        : 'bg-gray-800'
    );
  }, [theme.color]);
  const renderFooterContent = () => {
    const { pathname } = router;

    if (pathname === '/') {
      return         <footer className={themeClass}>
      <div className="container mx-auto text-center">
        <Link href="/contact">
          <span className="text-5xl animate-pulse bg-gradient-to-r from-blue-15b8c6 to-blue-500 bg-clip-text text-blue-600 animate-pulse-stronger">
            Contact
          </span>

        </Link>  
      </div>
    </footer>;
    } else if (pathname === '/skills') {
      return   <footer className="bg-gray-800 py-4 text-center">
      <div className="flex justify-center">
        <Link className="text-blue-500 hover:text-blue-700 mr-4 text-4xl" href="/">
          Home
        </Link>
        <Link className="text-blue-500 hover:text-blue-700 text-4xl" href="/contact">
          Contact
        </Link>
      </div>
    </footer>;
    } else {
      return     <footer className="bg-gray-800 py-4 text-center">
      <div className="flex justify-center">
        <Link className="text-blue-500 hover:text-blue-700 mr-4 text-4xl" href="/">
          Home
        </Link>
        <Link className="text-blue-500 hover:text-blue-700 text-4xl"  href="/skills">
          Skills
        </Link>
      </div>
    </footer>;
    }
  };
  return (
    <footer>
    {renderFooterContent()}
  </footer>
  );
}

export default Footer;
