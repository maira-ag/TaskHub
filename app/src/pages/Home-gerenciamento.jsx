import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import CardTarefa from '../components/CardTarefa.jsx';
import './styles/gerenciamento.css'

const GerenciamentoTarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    setTarefas(tarefasSalvas);
  }, []);

  const atualizarTarefa = (id, novoStatus) => {
    const tarefasAtualizadas = tarefas.map((tarefa, index) => {
      if (index === id) {
        tarefa.status = novoStatus;
      }
      return tarefa;
    });
    setTarefas(tarefasAtualizadas);
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));
  };

  const deletarTarefa = (id) => {
    const tarefasAtualizadas = tarefas.filter((_, index) => index !== id);
    setTarefas(tarefasAtualizadas);
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));
  };

  return (
    <div>
      <Header title="TaskHub" />
      <div className="task-columns">
        <div className="column">
          <h3 className='titulo' >A Fazer</h3>
          {tarefas.filter(t => t.status === 'A Fazer').map((tarefa, index) => (
            <CardTarefa
              key={index}
              tarefa={tarefa}
              id={index}
              atualizarTarefa={atualizarTarefa}
              deletarTarefa={deletarTarefa}
            />
          ))}
        </div>
        <div className="column">
          <h3 className='titulo'>Fazendo</h3>
          {tarefas.filter(t => t.status === 'Fazendo').map((tarefa, index) => (
            <CardTarefa
              key={index}
              tarefa={tarefa}
              id={index}
              atualizarTarefa={atualizarTarefa}
              deletarTarefa={deletarTarefa}
            />
          ))}
        </div>
        <div className="column">
          <h3 className='titulo'>Pronta</h3>
          {tarefas.filter(t => t.status === 'Pronta').map((tarefa, index) => (
            <CardTarefa
              key={index}
              tarefa={tarefa}
              id={index}
              atualizarTarefa={atualizarTarefa}
              deletarTarefa={deletarTarefa}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GerenciamentoTarefas;
