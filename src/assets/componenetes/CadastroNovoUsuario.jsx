// src/assets/componenetes/CadastroNovoUsuario.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './CadastroNovoUsuario.module.css'; // <--- CORREÇÃO AQUI: Caminho relativo correto para o CSS

function CadastroNovoUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem. Por favor, verifique.');
      return;
    }

    if (nome.length < 3) {
      setError('O nome deve ter pelo menos 3 caracteres.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('Por favor, insira um email válido.');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    console.log('Dados para cadastro:', { nome, email, password });
    setSuccessMessage('Cadastro realizado com sucesso! Redirecionando para o login...');

    setTimeout(() => {
      navigate('/cadastro');
    }, 2000);
  };

  return (
    <div className={styles['cadastro-novo-usuario-container']}>
      <div className={styles['background-image']}></div>
      <div className={styles['overlay-cadastro']}></div>

      <div className={styles.logo}>
        <span className={styles['logo-blue']}>Party</span>
        <span className={styles['logo-black']}>Link</span>
      </div>

      <h1 className={styles.titulo}>Crie sua Conta</h1>

      <form className={styles.formulario} onSubmit={handleCadastro}>
        <input
          type="text"
          placeholder="Seu Nome Completo"
          className={styles.input}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Seu Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Crie uma Senha"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirme sua Senha"
          className={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {error && <p className={styles['error-message']}>{error}</p>}
        {successMessage && <p className={styles['success-message']}>{successMessage}</p>}

        <button type="submit" className={styles['botao-cadastrar-conta']}>
          Cadastrar Conta
        </button>
      </form>

      <div className={styles['form-links']}>
        <Link to="/cadastro" className={styles['form-link']}>Já tem conta? Faça Login!</Link>
      </div>
    </div>
  );
}

export default CadastroNovoUsuario;