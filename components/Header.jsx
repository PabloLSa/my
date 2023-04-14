import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Header = () => {
  return (
    <header className='bg-gray-800 flex flex-col justify-center items-center h-32 w-full'>
      <div className="flex flex-col items-center mt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="mb-2 sm:mb-0 sm:mr-auto">
          <h1 className='text-blue-500 text-4xl font-bold text-center'
            style={{
              textShadow: '0px 0px 10px rgba(0, 191, 255, 0.5)',
              boxShadow: '0px 0px 10px rgba(0, 191, 255, 0.5)',
              padding: '0.3em',
              borderRadius: '0.5em',
            }}>
            Pablo Landim de Sá
          </h1>
        </div>
        <div className="flex justify-start sm:justify-end">
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
