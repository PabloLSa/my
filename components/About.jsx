import ThemeContext from '@/context/ThemeContext';
import Header from '@/components/Header';
import { useContext, useState, useEffect } from 'react';

function About() {
  const about = useContext(ThemeContext);
  const [themeClasses, aThemeClasses] = useState('bg-stone-950');

  useEffect(() => {
    aThemeClasses(
      about.color === 'light'
        ? 'bg-gray-600'
        : 'bg-stone-950'
    );
  }, [about.color]);

  return (
    <>
      <Header />
      <body className={themeClasses}>

        <h1 class="text-6xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Sobre mim
        </h1>

      </body>


    </>
  );
}

export default About;
