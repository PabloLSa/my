import Header from '@/components/Header';
import { useContext, useState, useEffect } from 'react';


const About = () => {
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('bg-stone-950 h-full');


  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'bg-gray-600 h-full text-2xl font-bold text-stone-950'
        : 'bg-stone-950 h-full text-2xl font-bold text-slate-200'
    );
  }, [theme.color]);

  return (
    <>
      <Header />
    <body className={ themeClasses }>

    <h1 class="text-6xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Sobre mim
     </h1>

    </body>
      

    </>
  );
}

export default About;
