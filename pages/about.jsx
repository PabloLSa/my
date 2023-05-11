import { useContext, useEffect, useState } from 'react';
import ThemeContext from '@/context/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaCoffee, FaReact } from 'react-icons/fa';
import Image from 'next/image';

function About() {
  const about = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('bg-stone-950');

  useEffect(() => {
    setThemeClasses(about.color === 'light' ? 'bg-gray-600' : 'bg-stone-950');
  }, [about.color]);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className={`flex-grow ${themeClasses}`}>
          <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
                Sobre Mim
              </span>
              <div className="flex justify-center mt-4">
                <FaCoffee className="text-4xl md:text-5xl lg:text-6xl text-blue-500 mx-4" />
                <FaReact className="text-4xl md:text-5xl lg:text-6xl text-blue-500 mx-4" />
              </div>
            </h1>

            <div className="max-w-3xl mx-auto bg-gray-600 p-6 rounded-lg md:flex items-center">
              <div className="md:w-1/2 md:pr-6">
                <div className="text-gray-800 text-lg">
                  Olá,
                  <br />
                  <br />
                  Sou um desenvolvedor front-end com foco nas tecnologias React, JavaScript, CSS e GitHub. Estou sempre disponível para aprender mais sobre tecnologia e estou trilhando o caminho para me tornar um desenvolvedor full-stack. Em agosto de 2022, decidi fazer a transição de carreira e ingressei na Trybe, uma escola de tecnologia, para atuar como desenvolvedor full-stack. Tenho aprendido através de projetos como é ingressar nessa carreira emocionante.
                  <br />
                  <br />
                  Tenho experiência de 13 anos vendendo e instalando serviços de rastreador veicular, onde desenvolvi habilidades valiosas em negociação e comunicação.
                  <br />
                  <br />
                  Sou casado e extremamente feliz com uma mulher linda, maravilhosa e batalhadora. Temos dois filhos que são a luz das nossas vidas.
                </div>
              </div>
              <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
                <div className="relative h-64 w-64 md:h-auto md:w-96 mx-auto rounded-full overflow-hidden">
                  <Image src="/myphoto.jpeg" alt="My Photo" layout="fill" objectFit="cover" className="rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default About;
