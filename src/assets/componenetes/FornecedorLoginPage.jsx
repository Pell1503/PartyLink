import React, { useState } from 'react';
import styles from './FornecedorLoginPage.module.css';
import { Link, useNavigate } from 'react-router-dom';

function FornecedorLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const correctUsername = 'pedro'; // Usuário fixo
    const correctPassword = '1234'; // Senha fixa

    if (username === correctUsername && password === correctPassword) {
      setError('');
      // REDIRECIONAMENTO DIRETO PARA A PÁGINA DE PROPOSTAS APÓS LOGIN BEM-SUCEDIDO
      navigate('/fornecedor/propostas'); // Altera o redirecionamento aqui!
    } else {
      setError('Usuário ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <div className={styles['login-fornecedor-container']}>
      <div className={styles['background-image']}></div>
      <div className={styles['overlay-login']}></div>

      <div className={styles.logo}>
        <span className={styles['logo-blue']}>Party</span>
        <span className={styles['logo-black']}>Link</span>
      </div>

      <h1 className={styles.titulo}>Login do Fornecedor</h1>

      <form className={styles.formulario} onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Seu usuário"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className={styles['error-message']}>{error}</p>}

        <button type="submit" className={styles['botao-login']}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['login-icon']}>
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Entrar
        </button>
      </form>

      <div className={styles['form-links']}>
        <Link to="/fornecedor/esqueceu-senha"></Link>
        <Link to="/fornecedor/cadastro">Não tem uma conta? Cadastre-se agora!</Link>
      </div>
    </div>
  );
}

export default FornecedorLoginPage;