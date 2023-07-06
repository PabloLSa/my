import React, { useState } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contacts = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [textArea, setTextArea] = useState('');

  const contactInfo = [
    { icon: <FiMail />, text: 'pablolandimdesa@gmail.com' },
    { icon: <FiPhone />, text: '(+55) 19 99628-6293' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar a mensagem
    clearInputs();
  };

  const clearInputs = () => {
    setInputName('');
    setInputEmail('');
    setTextArea('');
  };

  return (
    <>
      <Header />
      <div className="bg-gray-800">
        <section id="contact" className="px-3 py-10 text-gray-900">
          <div className="container mx-auto">
            <h3 className="text-4xl font-semibold text-center text-blue-600 animate-pulse bg-gradient-to-r from-blue-15b8c6 to-blue-500 bg-clip-text animate-pulse-stronger">
              Inicie o diálogo
            </h3>
            <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto mt-16 md:grid-cols-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-lg text-white">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Digite seu nome"
                    className="input-field"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-lg text-white">
                    Seu Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    placeholder="Digite seu email"
                    className="input-field"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-lg text-white">
                    Sua Mensagem
                  </label>
                  <textarea
                    id="message"
                    value={textArea}
                    onChange={(e) => setTextArea(e.target.value)}
                    placeholder="Digite sua mensagem"
                    rows={6}
                    className="input-field"
                  ></textarea>
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="mt-4 btn-primary w-fit"
                  >
                    Enviar Mensagem
                  </button>
                  <button
                    type="reset"
                    className="mt-4 btn-primary w-fit"
                    onClick={clearInputs}

                  >
                    Limpar campos
                  </button>
                </div>
              </form>
              <div className="grid grid-cols-2 gap-8">
                {contactInfo.map((contact, i) => (
                  <div key={i} className="flex flex-row items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-gradient-to-r from-blue-500 to-blue-700">
                      {contact.icon}
                    </div>
                    <p className="text-sm">{contact.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
