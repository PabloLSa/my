import ThemeContext from '@/context/ThemeContext';
import Header from '@/components/Header';
import { useContext, useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import { FaCoffee, FaReact } from 'react-icons/fa';
import Image from 'next/image';

function About() {
  const about = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('bg-stone-950');

  useEffect(() => {
    setThemeClasses(
      about.color === 'light'
        ? 'bg-gray-600'
        : 'bg-stone-950'
    );
  }, [about.color]);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className={`flex-grow ${themeClasses}`}>
          <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-4 text-center relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
                Sobre Mim
              </span>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <FaCoffee className="text-2xl md:text-3xl lg:text-4xl text-blue-500" />
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <FaReact className="text-2xl md:text-3xl lg:text-4xl text-blue-500" />
              </div>
            </h1>

            <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md relative">
              <div className="absolute top-0 left-0 w-full h-full opacity-25 bg-black rounded-md" />
              <div className="text-gray-800 text-lg">
                Aqui você pode escrever um pouco sobre si mesmo, suas experiências, habilidades, interesses, etc.
              </div>
              <div className="absolute bottom-0 left-0 w-full h-full z-0">
                <div className="object-cover w-full h-full opacity-50 rounded-md">
                  <Image src="/myPhoto3.jpeg" alt="My Photo" layout="fill" objectFit="cover" objectPosition="center" className="rounded-md" />
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
