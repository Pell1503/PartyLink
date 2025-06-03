import React, { useState } from 'react';
import styles from './Cadastro.module.css';
import { Link, useNavigate } from 'react-router-dom';

function Cadastro() {
  const [email, setEmail] = useState(''); // Nota: o nome da variável é 'email', mas a lógica de login usa 'pedro' como username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const correctEmail = 'pedro'; // Mantém o usuário fixo 'pedro' para a lógica
    const correctPassword = '1234';

    if (email === correctEmail && password === correctPassword) {
      setError('');
      navigate('/fornecedor'); // Ou para onde este login de usuário deve redirecionar
    } else {
      setError('Usuário ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <div className={styles['cadastro-container']}>
      {/* Imagem de fundo */}
      <div className={styles['background-image']}></div>

      {/* Overlay semi-transparente para melhorar o contraste (REATIVADO) */}
      <div className={styles['overlay-cadastro']}></div>

      {/* Logo PartyLink no canto superior esquerdo */}
      <div className={styles.logo}>
        <span className={styles['logo-blue']}>Party</span>
        <span className={styles['logo-black']}>Link</span>
      </div>

      {/* Título do formulário */}
      <h1 className={styles.titulo}>Login </h1>

      {/* Formulário de Login */}
      <form className={styles.formulario} onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Seu usuário" // ALTERADO AQUI: Removido "(pedro)"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        {/* Exibe a mensagem de erro se houver */}
        {error && <p className={styles['error-message']}>{error}</p>}

        {/* Botão de Entrar */}
        <button type="submit" className={styles['botao-play']}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['play-icon']}>
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Entrar
        </button>
      </form>

      {/* ***** BOTÃO/LINK DE CADASTRO FORA DO FORMULÁRIO ***** */}
      <div className={styles['form-links']}>
        {/* Mantive o Link para '/cadastro-novo-usuario' como você tinha antes */}
        <Link to="/cadastro-novo-usuario" className={styles['form-link']}>Ainda não tenho conta? Crie agora!</Link>
      </div>
    </div>
  );
}

export default Cadastro;