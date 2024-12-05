import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroTarefas from './pages/CadastroTarefa';
import GerenciamentoTarefas from './pages/Home-gerenciamento';
import Welcome from './pages/Welcome'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/cadastro-tarefas" element={<CadastroTarefas />} />
        <Route path="/home" element={<GerenciamentoTarefas />} />
      </Routes>
    </Router>
  );
};

export default App;
