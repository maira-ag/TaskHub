import React from 'react';
import './card.css'

const CardTarefa = ({ tarefa, id, atualizarTarefa, deletarTarefa }) => {
  const handleStatusChange = (e) => {
    atualizarTarefa(id, e.target.value);
  };

  return (
    <div className="task-card">

      <div className='texto-card'>

      <div className='descricao'>
        <h3>Descrição:</h3>
        <p>{tarefa.descricao}</p>
      </div>

      <div className='setor'>
        <h3>Setor:</h3>
        <p>{tarefa.setor}</p>
      </div>

      <div className='prioridade'>
        <h3>Prioridade:</h3>
        <p>{tarefa.prioridade}</p>
      </div>

      <div className='usuario_atribuido'>
        <h3>Atribuída a:</h3>
          <p>{tarefa.usuario}</p>
      </div>

      </div>

      <select value={tarefa.status} onChange={handleStatusChange}>
        <option value="A Fazer">A Fazer</option>
        <option value="Fazendo">Fazendo</option>
        <option value="Pronta">Pronta</option>
      </select>
      <button onClick={() => deletarTarefa(id)}>Excluir</button>
    </div>
  );
};

export default CardTarefa;
