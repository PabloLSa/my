import React from 'react';
import ThemeContext from '../context/ThemeContext';
import { useState } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Link from 'next/link';

const Index = () => {
  const [themeColor, setThemeColor] = useState("dark");
  function toogleTheme() {
    setThemeColor(themeColor === "dark" ? "light" : "dark");
  }
  return (

    <div className='h-screen'>
      <ThemeContext.Provider value={{ color: themeColor, toogleTheme }}>
        <Header />
        <Home />
        <footer className="flex flex-grow-0 flex-shrink-0 items-center justify-center h-16 bg-gray-800">
          <div className="container mx-auto text-center">
            <Link href="/contact">
              <span className="text-5xl animate-pulse bg-gradient-to-r from-blue-15b8c6 to-blue-500 bg-clip-text text-blue-600 animate-pulse-stronger">
                Contato
              </span>

            </Link>  
          </div>
        </footer>
      </ThemeContext.Provider>
    </div>


  );
}

export default Index;

