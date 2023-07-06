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
          <span className="text-5xl text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
            Contact
          </span>

        </Link>  
      </div>
    </footer>;
    } else if (pathname === '/skills') {
      return   <footer className="py-4 text-center bg-gray-800">
      <div className="flex justify-center">
        <Link className="mr-4 text-4xl text-blue-500 hover:text-blue-700" href="/">
          Home
        </Link>
        <Link className="text-4xl text-blue-500 hover:text-blue-700" href="/contact">
          Contact
        </Link>
      </div>
    </footer>;
    } else {
      return     <footer className="py-4 text-center bg-gray-800">
      <div className="flex justify-center">
        <Link className="mr-4 text-4xl text-blue-500 hover:text-blue-700" href="/">
          Home
        </Link>
        <Link className="text-4xl text-blue-500 hover:text-blue-700"  href="/skills">
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
