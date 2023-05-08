import React from 'react';
import ThemeContext from '../context/ThemeContext';
import { useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '@/components/Footer';

const Index = () => {
  const [themeColor, setThemeColor] = useState("dark");
  function toogleTheme(){
    setThemeColor(themeColor === "dark" ? "light" : "dark");
  }
  return (

    <div className='h-screen'>
      <ThemeContext.Provider value={{ color: themeColor, toogleTheme }}>
      <Header />
      <Nav />
      <Footer /> 
      </ThemeContext.Provider>
    </div>


  );
}

export default Index;

