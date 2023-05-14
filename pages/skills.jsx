
import Skills from "@/templates/Skills";
import { useEffect } from 'react';

const Skill = () => {

  useEffect(() => {
    document.title = 'Skill'; // Altere "Seu Nome" para o seu nome ou título desejado
  }, []);

  return (
    <>
  <Skills />
    </>
  );
}

export default Skill;
