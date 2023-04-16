import React from 'react';
import ThemeContext from '@/context/ThemeContext';
import { useState, useContext, useEffect } from 'react';
import Image from 'next/image';


function Nav() {
  const theme = useContext(ThemeContext);
  // console.log(theme);
  const [themeClasses, setThemeClasses]
    = useState('bg-gray-600 h-full');
  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'bg-gray-400 h-full'
        : 'bg-gray-600 h-full'
    );
  }, [theme.color]);
  return (
    <div className={themeClasses}>
      <Image src='/myphoto.jpeg' width={300} height={200} alt='Minha Foto' />
    </div>
  );
}
export default Nav;







