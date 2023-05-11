/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from 'react';
import ThemeContext from '@/context/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function About() {
  const about = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('bg-stone-950');

  useEffect(() => {
    setThemeClasses(about.color === 'light' ? 'bg-gray-600' : 'bg-stone-950');
  }, [about.color]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className={`flex-grow ${themeClasses}`}>
        <div className="flex flex-col justify-center items-center h-full">
          <div className="max-w-2xl md:flex md:items-center md:justify-between">
            <img
              src="/myphototwo.jpeg"
              alt="My Photo"
              className="rounded-full shadow-lg h-auto w-64 object-cover md:ml-6 md:order-1 mb-4 md:mb-0"
            />
            <div className="md:order-2">
              <span className={`text-4xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text ${themeClasses}`}>
                Sobre Mim
              </span>
              <div className="text-white mt-4">
                <h1 className={`text-4xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text`}>Desenvolvedor Front-end</h1>
                <p>
                  Campinas, São Paulo. Atualmente com foco em ReactJS, NextJS, CSS3, Git, mas também sempre com vontade e disponível para aprender novas tecnologias. Hoje estou aprendendo SQL, Docker, NodeJs, entre outras. Estou em transição de carreira, sou formado em Front-end pela Trybe e estou rumo ao fullstack.
                  Experiência de 13 anos vendendo e instalando o serviço de rastreador veicular, onde apliquei muita negociação e comunicação.
                </p>
                <div className="flex mt-4">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 mr-4"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 mr-4"
                  >
                    GitHub
                  </a>
                  <a
                    href="/projects"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Projetos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
