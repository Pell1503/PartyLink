import React, { useState } from 'react';
import styles from './PropostasFornecedorPage.module.css'; // Importe o CSS Module
import { Link } from 'react-router-dom';

function PropostasFornecedorPage() {
  // Estado para todas as propostas (dados originais)
  const [allPropostas] = useState([
    {
      id: 1,
      nome: 'MARIA JOSÉ',
      pedido: 'QUERO FAZER O ORÇAMENTO PARA MINHA FESTA DE ANIVERSÁRIO! Preciso de buffet e decoração.',
      status: 'pendente'
    },
    {
      id: 2,
      nome: 'JOÃO LUIZ',
      pedido: 'QUERO FAZER O ORÇAMENTO PARA MINHA FESTA DE CASAMENTO! Procuro fotógrafo e banda.',
      status: 'pendente'
    },
    {
      id: 3,
      nome: 'ANA SILVA',
      pedido: 'Preciso de um DJ e iluminação para formatura.',
      status: 'pendente'
    },
    {
      id: 4,
      nome: 'CARLOS FERREIRA',
      pedido: 'Orçamento para buffet completo de casamento em 2026.',
      status: 'pendente'
    },
    {
      id: 5,
      nome: 'FERNANDA LIMA',
      pedido: 'Procuro um espaço para festa infantil com tema de super-heróis.',
      status: 'pendente'
    },
    {
      id: 6,
      nome: 'RODRIGO ALVES',
      pedido: 'Quero um bolo personalizado e doces finos para um noivado.',
      status: 'pendente'
    },
  ]);

  // Estado para as propostas exibidas (filtradas)
  const [filteredPropostas, setFilteredPropostas] = useState(allPropostas);
  // Estado para o termo de pesquisa
  const [searchTerm, setSearchTerm] = useState('');

  const handleAceitarProposta = (id) => {
    // Atualiza o status na lista original e depois refiltra
    const updatedAllPropostas = allPropostas.map(prop =>
      prop.id === id ? { ...prop, status: 'aceito' } : prop
    );
    // Para que a mudança de status seja refletida, precisamos refiltrar
    // (ou você pode passar updatedAllPropostas para setFilteredPropostas diretamente,
    // mas a lógica de filtro abaixo já faria isso ao renderizar)
    setFilteredPropostas(updatedPropostas(updatedAllPropostas, searchTerm));
    alert(`Proposta de ${updatedAllPropostas.find(p => p.id === id).nome} aceita!`);
  };

  const handleRemoverProposta = (id) => {
    // Remove da lista original e depois refiltra
    const updatedAllPropostas = allPropostas.filter(prop => prop.id !== id);
    setFilteredPropostas(updatedPropostas(updatedAllPropostas, searchTerm)); // Refiltrar com a lista atualizada
    alert('Proposta removida!');
  };

  // Função auxiliar para filtrar as propostas
  const updatedPropostas = (proposals, term) => {
    if (!term) {
      return proposals;
    }
    const lowerCaseTerm = term.toLowerCase();
    return proposals.filter(prop =>
      prop.nome.toLowerCase().includes(lowerCaseTerm) ||
      prop.pedido.toLowerCase().includes(lowerCaseTerm)
    );
  };

  // Função para lidar com a mudança no campo de pesquisa
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setFilteredPropostas(updatedPropostas(allPropostas, term));
  };


  return (
    <div className={styles['propostas-fornecedor-container']}>
      <div className={styles['background-image']}></div>
      <div className={styles.overlay}></div>

      {/* Cabeçalho */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles['logo-blue']}>Party</span>
          <span className={styles['logo-black']}>Link</span>
        </div>
        <div className={styles['header-buttons']}>
          <Link to="/dashboard-fornecedor" className={styles['header-button']}>Dashboard</Link>
          <Link to="/fornecedor/login" className={styles['header-button']}>Sair</Link>
        </div>
      </header>

      {/* Título "PROPOSTAS" */}
      <div className={styles['section-title-wrapper']}>
        <h2 className={styles['section-title']}>PROPOSTAS</h2>
      </div>

      {/* Campo de Pesquisa */}
      <div className={styles['search-bar-wrapper']}> {/* Novo wrapper para centralizar o input */}
        <input
          type="text"
          placeholder="Pesquisar cliente ou pedido..."
          className={styles['search-input']}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['search-icon']}>
          <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>


      {/* Título "CLIENTES" com ícone */}
      <div className={styles['section-title-wrapper']}>
        <h3 className={styles['clients-title']}>
          CLIENTES ({filteredPropostas.length}) {/* Exibe a contagem de propostas */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['clients-icon']}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </h3>
      </div>

      {/* Lista de Clientes/Propostas */}
      <div className={styles['clients-list']}>
        {filteredPropostas.length > 0 ? (
          filteredPropostas.map((proposta) => (
            <div key={proposta.id} className={styles['client-card']}>
              <div className={styles['client-avatar']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['avatar-icon']}>
                  <circle cx="12" cy="7" r="4"/><path d="M2 21v-2a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2"/>
                </svg>
              </div>
              <div className={styles['client-info']}>
                <div className={styles['client-name']}>{proposta.nome}</div>
                <div className={styles['client-request']}>{proposta.pedido}</div>
              </div>
              <div className={styles['card-actions']}>
                <button
                  className={`${styles['action-button']} ${styles.check}`}
                  onClick={() => handleAceitarProposta(proposta.id)}
                  disabled={proposta.status === 'aceito'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['action-icon']}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </button>
                <button
                  className={`${styles['action-button']} ${styles.delete}`}
                  onClick={() => handleRemoverProposta(proposta.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['action-icon']}>
                    <path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className={styles['no-proposals-message']}>Nenhuma proposta encontrada.</p>
        )}
      </div>
    </div>
  );
}

export default PropostasFornecedorPage;