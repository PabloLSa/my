import React, { useEffect } from 'react';
import Contacts from '@/templates/Contacts';

function Contact() {

  useEffect(() => {
    document.title = 'Contact | Plsa'; // Altere "Seu Nome" para o seu nome ou título desejado
  }, []);
  return (
    <>
     <Contacts />
    </>
  );
}

export default Contact;
