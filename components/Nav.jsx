import React from 'react';
import Image from 'next/image';


function Nav() {
  return (
    <div className='bg-gray-700 h-full'>
      <Image src='/myphoto.jpeg' width={300} height={200} alt='Minha Foto' />
    </div>
  );
}

export default Nav;





