import React, { useState } from 'react';
import styles from './FornecedorCadastroPage.module.css';
import { Link, useNavigate } from 'react-router-dom';

function FornecedorCadastroPage() {
  const [cnpj, setCnpj] = useState('');
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

    // Lógica de validação e simulação de cadastro
    if (cnpj.length !== 14 || !/^\d{14}$/.test(cnpj)) { // Validação de CNPJ mais rigorosa (exatamente 14 dígitos)
      setError('CNPJ inválido. Deve conter exatamente 14 dígitos numéricos.');
      return;
    }
    if (nomeEmpresa.trim() === '') {
      setError('Nome da Empresa é obrigatório.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) { // Validação de e-mail mais robusta
      setError('E-mail inválido.');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    // Se tudo estiver OK, simular o cadastro
    console.log('Dados do Fornecedor Cadastrado:', { cnpj, nomeEmpresa, email, password });
    // REMOVIDO: alert('Cadastro de fornecedor realizado com sucesso! Você será redirecionado para o login.');
    setError(''); // Limpa qualquer erro anterior
    navigate('/fornecedor/login'); // Redireciona direto para a página de login do fornecedor
  };

  return (
    <div className={styles['cadastro-fornecedor-container']}>
      <div className={styles['background-image']}></div>
      <div className={styles['overlay-cadastro-fornecedor']}></div>

      <div className={styles.logo}>
        <span className={styles['logo-blue']}>Party</span>
        <span className={styles['logo-black']}>Link</span>
      </div>

      <h1 className={styles.titulo}>Cadastro de Fornecedor</h1>

      <form className={styles.formulario} onSubmit={handleCadastro}>
        <input
          type="text"
          placeholder="CNPJ (apenas números)"
          className={styles.input}
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          maxLength="14"
          required
        />
        <input
          type="text"
          placeholder="Nome da Empresa"
          className={styles.input}
          value={nomeEmpresa}
          onChange={(e) => setNomeEmpresa(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
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

        {error && <p className={styles['error-message']}>{error}</p>}

        <button type="submit" className={styles['botao-cadastro']}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['cadastro-icon']}>
            <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>
          </svg>
          Cadastrar
        </button>
      </form>

      <div className={styles['form-links']}>
        <Link to="/fornecedor/login">Já tenho uma conta. Fazer Login</Link>
      </div>
    </div>
  );
}

export default FornecedorCadastroPage;