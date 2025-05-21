// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/componenetes/HomePage';
import Cadastro from './assets/componenetes/Cadastro';
import Fornecedor from './assets/componenetes/Fornecedor'; // Certifique-se que Fornecedor.jsx existe e é o correto
import Pedido from './assets/componenetes/Pedido'; // Certifique-se que Pedido.jsx existe e é o correto
import UserExperiences from './assets/componenetes/UserExperiences';
import AboutUs from './assets/componenetes/AboutUs';
import CadastroNovoUsuario from './assets/componenetes/CadastroNovoUsuario'; // <--- CORREÇÃO AQUI!

// Se você tiver um Navbar genérico para as outras páginas, importe-o aqui
// import Navbar from './assets/componenetes/Navbar'; // Exemplo de um Navbar genérico

function App() {
  return (
    <Router>
      <Routes>
        {/* HomePage é a principal e tem seu próprio header */}
        <Route path="/" element={<HomePage />} />

        {/* As outras páginas. Você pode envolver com um Layout ou Navbar */}
        <Route path="/cadastro" element={<Cadastro />} />
        {/* Adicione a rota para /login se você quer que ela também use o componente Cadastro */}
        <Route path="/login" element={<Cadastro />} />

        <Route path="/fornecedor" element={<Fornecedor />} />

        {/* Assumindo que Pedido é uma página real */}
        <Route path="/pedido" element={<Pedido />} />

        {/* Experiências dos Usuários */}
        <Route path="/experiencias" element={<UserExperiences />} />

        {/* Rota para a página "Sobre Nós" */}
        <Route path="/sobre-nos" element={<AboutUs />} />

        {/* <--- ROTA CORRIGIDA PARA CADASTRO DE NOVO USUÁRIO */}
        <Route path="/cadastro-novo-usuario" element={<CadastroNovoUsuario />} />

      </Routes>
    </Router>
  );
}

export default App;