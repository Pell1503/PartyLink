import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DashboardFornecedorPage.module.css';

function DashboardFornecedorPage() {
  const fornecedorNome = "Pedro"; // Pode vir de autenticação real
  const novasPropostas = 7;
  const propostasAceitas = 12;
  const eventosFuturos = 5;
  const avaliacaoMedia = 4.8;

  return (
    <div className={styles['dashboard-container']}>
      <div className={styles['background-image']}></div>
      <div className={styles.overlay}></div>

      {/* Cabeçalho */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles['logo-blue']}>Party</span>
          <span className={styles['logo-black']}>Link</span>
        </div>
        <div className={styles['header-buttons']}>
          <Link to="/fornecedor/propostas" className={styles['header-button']}>Ver Propostas</Link>
          <Link to="/fornecedor/login" className={styles['header-button']}>Sair</Link>
        </div>
      </header>

      {/* Conteúdo do Dashboard */}
      <main className={styles['dashboard-content']}>
        {/* Seção de Boas-Vindas */}
        <section className={styles['welcome-section']}>
          <h1 className={styles['welcome-title']}>Bem-vindo, {fornecedorNome}!</h1>
          <p className={styles['welcome-subtitle']}>
            Aqui está um resumo do seu desempenho na PartyLink.
          </p>
        </section>

        {/* Seção de Métricas Principais */}
        <section className={styles['metrics-section']}>
          <h2 className={styles['metrics-title']}>Suas Estatísticas Rápidas</h2>
          <div className={styles['metric-grid']}>
            <div className={styles['metric-item']}>
              <div className={styles['metric-value']}>{novasPropostas}</div>
              <div className={styles['metric-label']}>Novas Propostas</div>
            </div>
            <div className={styles['metric-item']}>
              <div className={styles['metric-value']}>{propostasAceitas}</div>
              <div className={styles['metric-label']}>Propostas Aceitas</div>
            </div>
            <div className={styles['metric-item']}>
              <div className={styles['metric-value']}>{eventosFuturos}</div>
              <div className={styles['metric-label']}>Eventos Futuros</div>
            </div>
            <div className={styles['metric-item']}>
              <div className={styles['metric-value']}>{avaliacaoMedia}</div>
              <div className={styles['metric-label']}>Avaliação Média</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardFornecedorPage;
