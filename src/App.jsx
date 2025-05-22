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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Cadastro />} /> {/* Rota /login também usa o Cadastro */}
        <Route path="/fornecedor" element={<Fornecedor />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/experiencias" element={<UserExperiences />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/cadastro-novo-usuario" element={<CadastroNovoUsuario />} />
        <Route path="/fornecedor/login" element={<FornecedorLoginPage />} />
        {/* NOVA ROTA PARA CADASTRO DE FORNECEDOR */}
        <Route path="/fornecedor/cadastro" element={<FornecedorCadastroPage />} />
        {/* Adicione outras rotas de fornecedor, como o dashboard */}
        <Route path="/dashboard-fornecedor" element={<div>Dashboard do Fornecedor (Página protegida após login)</div>} />
      </Routes>
    </Router>
  );
}

export default App;