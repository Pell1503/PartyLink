import React from 'react';
import styles from './OrcamentoPage.module.css';

function OrcamentoPage() {
  return (
    <div className={styles['orcamento-container']}>
      <div className={styles.logo}>
        <span className={styles['logo-blue']}>Party</span>
        <span className={styles['logo-black']}>Link</span>
      </div>
      <header className={styles.header}>
        <div className={styles['title-container']}>
          <div className={styles['page-title']}>ORÇAMENTO</div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles['input-container']}>
          <div className={styles['user-icon']}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className={styles['text-input']}>QUERO FAZER O ORÇAMENTO PARA MINHA FESTA !</div>
          <button className={styles['send-button']}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles['silhouette-background']}></div>
      </footer>
    </div>
  );
}

export default OrcamentoPage;