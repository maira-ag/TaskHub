import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import './styles/cadastro_tarefa.css'

const CadastroTarefas = () => {
  const [descricao, setDescricao] = useState('');
  const [setor, setSetor] = useState('');
  const [usuario, setUsuario] = useState('');
  const [prioridade, setPrioridade] = useState('baixa');
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];
    setUsuarios(usuariosSalvos);
  }, []);

  const handleCadastroTarefa = () => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const tarefa = { descricao, setor, usuario, prioridade, status: 'A Fazer' };
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    alert('Tarefa cadastrada!');
  };

  return (
    <div>
      <Header title="TaskHub" />
      <form className='form_tarefa'>

        <div className='centralizando'>
        <div className='descricao_tarefa'>
          <h3>Descriçaõ:</h3>
          <input
           type="text"
           placeholder="Descrição da tarefa"
           value={descricao}
           onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div className='setor_input'>
          <h3>Setor:</h3>
          <input
            type="text"
            placeholder="Setor"
            value={setor}
            onChange={(e) => setSetor(e.target.value)}
          />
        </div>

        <div className='usuario_selecao'>
          <h3>Usuário:</h3>
          <select value={usuario} onChange={(e) => setUsuario(e.target.value)} className='select_usuario'>
            <option value="">Selecione o Usuário</option>
            {usuarios.map((user, index) => (
              <option key={index} value={user.nome}>
                {user.nome}
              </option>
            ))}
          </select>
        </div>
        
          <div className='prioridade_select'>
            <h3>Prioridade:</h3>
            <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
            <option value="baixa">Baixa</option>
            <option value="média">Média</option>
            <option value="alta">Alta</option>
             </select>
          </div>    
        
        <button type="button" onClick={handleCadastroTarefa} className='cadastrar_tarefa'>
          Cadastrar Tarefa
        </button>
        </div>

      </form>
    </div>
  );
};

export default CadastroTarefas;
