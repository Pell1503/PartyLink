// src/assets/componenetes/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Assumindo que você está usando HomePage.css

function HomePage() {
  return (
    <div className="home-container">
      <div className="background-image"></div>

      <header className="header">
        <div className="logo">
          <span className="logo-blue">Party</span><span className="logo-black">Link</span>
        </div>

        <nav className="nav-buttons">
          <Link to="/cadastro" className="nav-button">LOGIN</Link>
          {/* ALTERAÇÃO AQUI: De button para Link e adicionando a rota */}
          <Link to="/fornecedor/login" className="nav-button">LOGIN FORNECEDOR</Link>
          {/* Atualize este link para a nova página de experiências */}
          <Link to="/experiencias" className="nav-button">EXPERIÊNCIAS</Link>
        </nav>
      </header>

      <main className="main-content">
        <p className="tagline-main">
          Nossa plataforma vai transformar sua festa em um momento inesquecível.
        </p>
        {/* ***** APENAS ESTA ALTERAÇÃO: Botão "Começar Agora!" agora aponta para "Sobre Nós" ***** */}
        <Link to="/sobre-nos" className="main-cta-button"> 
          sobre nós
        </Link>

        <div className="features-section">
          <div className="feature-item">
            <span className="feature-icon">🎉</span>
            <h3>Eventos Personalizados</h3>
            <p>Encontre serviços que combinam com seu estilo único.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🤝</span>
            <h3>Conexão Direta</h3>
            <p>Conecte-se com os melhores fornecedores sem intermediários.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✨</span>
            <h3>Experiências Inesquecíveis</h3>
            <p>Planejamento simplificado para momentos mágicos.</p>
          </div>
        </div>
      </main>

      <div className="scroll-indicator">
        <span className="scroll-arrow">↓</span>
      </div>
    </div>
  );
}

export default HomePage;