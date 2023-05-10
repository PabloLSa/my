import React from 'react';
import ThemeContext from '../context/ThemeContext';
import { useState } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Footer from '@/components/Footer';

const Index = () => {
  const [themeColor, setThemeColor] = useState("dark");
  function toogleTheme() {
    setThemeColor(themeColor === "dark" ? "light" : "dark");
  }
  return (

    <div className='h-screen'>
  

        <Header />
        <Home />
        <Footer />

      
    </div>


  );
}

export default Index;

