// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/componenetes/HomePage';
import Cadastro from './assets/componenetes/Cadastro';
import Fornecedor from './assets/componenetes/Fornecedor'; 
import Pedido from './assets/componenetes/Pedido'; 
import UserExperiences from './assets/componenetes/UserExperiences';
import AboutUs from './assets/componenetes/AboutUs';
import CadastroNovoUsuario from './assets/componenetes/CadastroNovoUsuario';
import FornecedorLoginPage from './assets/componenetes/FornecedorLoginPage';
import FornecedorCadastroPage from './assets/componenetes/FornecedorCadastroPage';
import PropostasFornecedorPage from './assets/componenetes/PropostasFornecedorPage';
import DashboardFornecedorPage from './assets/componenetes/DashboardFornecedorPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Cadastro />} />
        <Route path="/fornecedor" element={<Fornecedor />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/experiencias" element={<UserExperiences />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/cadastro-novo-usuario" element={<CadastroNovoUsuario />} />
        <Route path="/fornecedor/login" element={<FornecedorLoginPage />} />
        <Route path="/fornecedor/cadastro" element={<FornecedorCadastroPage />} />
        <Route path="/fornecedor/propostas" element={<PropostasFornecedorPage />} />
        {/* Rota para o Dashboard do Fornecedor */}
        <Route path="/dashboard-fornecedor" element={<DashboardFornecedorPage />} />
        {/* ROTAS FUTURAS PARA O FORNECEDOR (Exemplos) */}
        <Route path="/fornecedor/meus-servicos" element={<div>Página de Meus Serviços (Em breve!)</div>} />
        <Route path="/fornecedor/calendario" element={<div>Página do Calendário (Em breve!)</div>} />
        <Route path="/fornecedor/perfil" element={<div>Página de Edição de Perfil (Em breve!)</div>} />
      </Routes>
    </Router>
  );
}

export default App;