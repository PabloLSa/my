import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div>
             <footer className="flex flex-grow-0 flex-shrink-0 items-center justify-center h-16 bg-stone-950">
          <div className="container mx-auto text-center">
            <Link href="/contact">
              <span className="text-5xl animate-pulse bg-gradient-to-r from-blue-15b8c6 to-blue-500 bg-clip-text text-blue-600 animate-pulse-stronger">
                Contato
              </span>

            </Link>  
          </div>
        </footer>
    </div>
  );
}

export default Footer;
