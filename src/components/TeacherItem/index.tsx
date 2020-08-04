import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars0.githubusercontent.com/u/7052300?s=60&v=400'
          alt='Diego Ramires Gonçalves'
        />
        <div>
          <strong>Diego Ramire Gonçalves</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        Nisisimilique quisquam repudiandae quod culpa molestiae, totam dolores
        tempore fuga sed numquam ratione? Quia maxime sequi sunt voluptas! Cum,
        numquam quis?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
