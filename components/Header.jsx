import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Header = () => {
  return (
    <header className='bg-gray-800 flex flex-col justify-center items-center h-32'>

      <h1 className='text-blue-500 text-2xl font-bold text-shadow text-center'>
        Pablo Landim de Sá
      </h1>

      <div className="mt-4 flex justify-center">
        <a href='https://www.linkedin.com/in/pablolandimdesadev//'
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
