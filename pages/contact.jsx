import React, { useContext, useEffect } from 'react';
import ThemeContext from '@/context/ThemeContext';
import Link from 'next/link';
import Header from '../components/Header';

function Contact() {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = 'Contato | Seu Nome'; // Altere "Seu Nome" para o seu nome ou título desejado
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className={theme.color === 'light' ? 'bg-gray-600' : 'bg-stone-950'}>
          <div className="flex flex-col items-center py-16">
            <h1 className={`text-4xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text`}>
              Construindo
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
        <div className="text-white">
          <Link className="text-blue-500 hover:text-blue-700" href="/">
            Home
          </Link>
          <Link className="text-blue-500 hover:text-blue-700" href="/skills">
            Skills
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Contact;
