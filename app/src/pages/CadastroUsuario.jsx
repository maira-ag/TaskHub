import React, { useState } from 'react';
import Header from '../components/Header';
import './styles/cadastro_usuario.css'

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleCadastro = () => {
    const usuario = { nome, email };
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Armazena os usuários no localStorage
    setNome('');
    setEmail('');
    alert('Usuário cadastrado com sucesso!');
  };

  return (
    <div>
      <Header title="TaskHub" />
      <form>
        <div className='nome_input'>
          <h3>Nome:</h3>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className='email_input'>
          <h3>Email:</h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>

        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroUsuario;
