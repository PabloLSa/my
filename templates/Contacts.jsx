import React, { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Skills = () => {

  const theme = useContext(ThemeContext);

  return (
    <>
      <div>
        <Header />
        <div className={theme.color === 'light' ? 'bg-gray-600' : 'bg-stone-950'}>
          <div className="flex flex-col items-center py-3">
            <h1 className={`text-6xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text`}>
              Contacts
            </h1>
            <div className="text-white w-64 text-center">
              <p>
                Em contsrução
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skills;
