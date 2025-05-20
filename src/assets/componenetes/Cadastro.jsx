import React, { useState } from 'react';
import styles from './Cadastro.module.css'; 
import { Link, useNavigate } from 'react-router-dom'; // Importe useNavigate

function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de recarregar a página do formulário

    // Valores esperados para validação
    const correctEmail = 'pedro'; // Usuário 'pedro'
    const correctPassword = '1234'; // Senha '1234'

    if (email === correctEmail && password === correctPassword) {
      setError(''); // Limpa qualquer erro anterior
      // ***** ALTERAÇÃO AQUI: Redireciona para a página de fornecedores *****
      navigate('/fornecedor'); // Redireciona para a rota '/fornecedor'
    } else {
      setError('Usuário ou senha incorretos. Tente novamente.'); // Define a mensagem de erro
    }
  };

  return (
    <div className={styles['cadastro-container']}>
      {/* Imagem de fundo */}
      <div className={styles['background-image']}></div>

      {/* Logo PartyLink no canto superior esquerdo */}
      <div className={styles.logo}>
        <span className={styles['logo-blue']}>Party</span>
        <span className={styles['logo-black']}>Link</span>
      </div>

      {/* Título do formulário */}
      <h1 className={styles.titulo}>Login ou Cadastre-se</h1>

      {/* Formulário de Login/Cadastro */}
      <form className={styles.formulario} onSubmit={handleLogin}> 
        <input
          type="text" // Alterado para 'text' já que não é mais um formato de email específico
          placeholder="Seu usuário (pedro)" // Dica para o usuário
          className={styles.input}
          value={email} // Conecta o input ao estado 'email'
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado 'email' ao digitar
          required // Campo obrigatório
        />
        <input
          type="password"
          placeholder="Senha"
          className={styles.input}
          value={password} // Conecta o input ao estado 'password'
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado 'password' ao digitar
          required // Campo obrigatório
        />

        {/* Exibe a mensagem de erro se houver */}
        {error && <p className={styles['error-message']}>{error}</p>}

        {/* Agora é um <button type="submit"> para disparar o handleLogin */}
        <button type="submit" className={styles['botao-play']}> 
          {/* Ícone SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['play-icon']}>
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Entrar
        </button>
      </form>

      {/* Links adicionais */}
      <div className={styles['form-links']}>
        <Link to="/cadastro-novo-usuario" className={styles['form-link']}>Ainda não tenho conta? Crie agora!</Link>
      </div>
    </div>
  );
}

export default Cadastro;