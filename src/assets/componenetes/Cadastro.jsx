import React from 'react';
import styles from './Cadastro.module.css'; 
import { Link } from 'react-router-dom';

function Cadastro() {
  return (
    <div className={styles['cadastro-container']}>
      <div className={styles['background-image']}></div>

      <div className={styles.logo}>
        <span className={styles['logo-blue']}>Party</span>
        <span className={styles['logo-black']}>Link</span>
      </div>

      <h1 className={styles.titulo}>LOGIN</h1> 
      <div className={styles.formulario}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Senha"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Confirme sua senha"
          className={styles.input}
        />

        <Link to="/fornecedor" className={styles['botao-play']}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['play-icon']}>
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          PLAY
        </Link>
      </div>
    </div>
  );
}

export default Cadastro;