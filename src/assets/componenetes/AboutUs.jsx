// src/assets/componenetes/AboutUs.jsx
import React from 'react';
import './AboutUs.css'; // Importa o CSS normal, não o CSS Module
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* Imagem de fundo e overlay */}
      <div className="background-image"></div>

      {/* Logo PartyLink e Navegação no cabeçalho */}
      <header className="header">
        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="logo-blue">Party</span>
            <span className="logo-black">Link</span>
          </Link>
        </div>
        <nav className="nav-buttons">
          <Link to="/login" className="nav-button">Login</Link>
          <Link to="/cadastro" className="nav-button">Cadastre-se</Link>
          <Link to="/experiencias" className="nav-button">Experiências</Link>
          <Link to="/fornecedor" className="nav-button">Fornecedores</Link>
        </nav>
      </header>

      <main className="about-us-content">
        <h1 className="about-us-title">Nossa História e Missão</h1>
        <p className="about-us-text">
          A PartyLink nasceu da paixão por celebrar e da necessidade de simplificar a organização de eventos. Percebemos que encontrar os melhores fornecedores para festas, desde fotógrafos e decoradores até buffets e DJs, era uma tarefa que demandava muito tempo e pesquisa.
        </p>
        <p className="about-us-text">
          Nossa missão é conectar pessoas que sonham com festas incríveis a fornecedores de qualidade, tornando o processo de planejamento de eventos mais fácil, rápido e divertido. Acreditamos que cada celebração é única e merece os melhores talentos para se tornar inesquecível.
        </p>
        <p className="about-us-text">
          Trabalhamos com uma plataforma intuitiva, onde você pode explorar portfólios, ler avaliações, entrar em contato direto com os profissionais e organizar todos os detalhes do seu evento em um só lugar. Seja para um aniversário, casamento, formatura ou qualquer outra celebração, a PartyLink está aqui para te ajudar a transformar ideias em realidade.
        </p>
        <p className="about-us-text">
          Junte-se à nossa comunidade e descubra como é simples planejar a festa dos seus sonhos!
        </p>

        <Link to="/cadastro" className="cta-button">
          Comece a Planejar sua Festa!
        </Link>
      </main>
    </div>
  );
}

export default AboutUs;