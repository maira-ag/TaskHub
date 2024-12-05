import React from 'react';
import Header from '../components/Header';
import './styles/welcome.css';
import ilustracao_welcome from '../assets/images/ilustracao_welcome.png'

const Welcome = () => {
  return (
    <div className="home-container">
      <Header title="TaskHub" />
      <div className="home-content">
        <div className='titulo'>
          <h1>Gerencie suas tarefas com o TaskHub</h1>
        </div>

        <div className='texto_imagem'>

          <div className="ilustracao">
            <img src={ilustracao_welcome} alt="Ilustração representando organização" />
          </div>

          <div className='paragrafos'>
            <p>
              TaskHub é um sistema simples de gerenciamento de tarefas que utiliza o armazenamento local
            do navegador para salvar os dados.
            </p>
            <p>
              É um site simples que foi criado no processo de estudo de desenvolvimento Web focado em Front-end.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Welcome;
