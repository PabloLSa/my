import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Header = () => {
  return (
    <header className='bg-gray-800 flex justify-center items-center h-32 w-full'>
      <div className="flex items-center justify-between w-full max-w-4xl px-4">
        <h1 className='text-blue-500 text-4xl font-bold text-center'
          style={{
            textShadow: '0px 0px 10px rgba(0, 191, 255, 0.5)',
            boxShadow: '0px 0px 10px rgba(0, 191, 255, 0.5)',
            padding: '0.3em',
            borderRadius: '0.5em',
          }}>
          Pablo Landim de Sá
        </h1>
        <div className="flex items-center justify-end">
          <a href='https://www.linkedin.com/in/pablolandimdesadev/'
            target="_blank" rel="noreferrer"
            className='text-white mx-2 text-xl'>
            <BsLinkedin />
          </a>
          <a href='https://github.com/PabloLSa'
            target="_blank" rel="noreferrer"
            className='text-white mx-2 text-xl'
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </header>





  );
}

export default Header;
