import React, { useContext, useEffect } from 'react';
import ThemeContext from '@/context/ThemeContext';
import Link from 'next/link';
import Header from '@/components/Header';

const Skills = () => {

  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = 'Skills'; // Altere "Seu Nome" para o seu nome ou título desejado
  }, []);

  return (
    <>
     <div>
        <Header />
        <div className={theme.color === 'light' ? 'bg-gray-600' : 'bg-stone-950'}>
          <div className="flex flex-col items-center py-3">
            <h1 className={`text-6xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text`}>
              Skills
            </h1>
            <div className="text-white w-64 text-center">
              <p>
               Em contsrução
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 py-4 text-center">
        <div className="flex justify-center">
          <Link className="text-blue-500 hover:text-blue-700 mr-4 text-4xl" href="/">
            Home
          </Link>
          <Link className="text-blue-500 hover:text-blue-700 text-4xl" href="/contact">
            Contact
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Skills;
