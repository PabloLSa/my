import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Header = () => {
  return (
    <header className='bg-gray-800 flex flex-col justify-center items-center h-32 w-full'>

      <h1 className='text-blue-500 text-4xl font-bold text-center'
        style={{
          textShadow: '0px 0px 10px rgba(0, 191, 255, 0.5)',
          boxShadow: '0px 0px 10px rgba(0, 191, 255, 0.5)',
        }}>
        Pablo Landim de Sá
      </h1>


      <div className="mt-4 flex justify-center">
        <a href='https://www.linkedin.com/in/pablolandimdesadev/'
          target="_blank" rel="noreferrer"
          className='text-white mr-2 text-xl'>
          <BsLinkedin /></a>

        <a href='https://github.com/PabloLSa'
          target="_blank" rel="noreferrer"
          className='text-white text-xl'
        ><BsGithub /></a>
      </div>

    </header>


  );
}

export default Header;
