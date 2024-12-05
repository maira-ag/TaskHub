import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import home from '../assets/images/home.png'

const Header = ({ title }) => {
  return (
    <header>
      <Link className='link_logo' to="/">
        <h1>{title}</h1> {/*fazer isso um link para a tela de boas-vindas*/}
      </Link>
      <nav>
        <div className='botao_nav' id='botao_cadastro_usuario'>
          <Link className='link_telas' id='link_cadastro_usuario' to="/cadastro-usuario">Cadastro de Usuário</Link>
        </div>

        <div className='botao_nav' id='botao_cadastro_tarefas'>
          <Link className='link_telas' id='link_cadastro_tarefas' to="/cadastro-tarefas">Cadastro de Tarefas</Link>
        </div>
        
        <div className='botao_nav' id='botao_home'>
           <Link className='link_telas' id='link_gerenciamento' to="/home">Home
           <img src={home} alt="home-icon" />
           </Link>
        </div>
       
      </nav>
    </header>
  );
};

export default Header;
