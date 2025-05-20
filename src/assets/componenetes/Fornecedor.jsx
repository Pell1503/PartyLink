import React, { useState } from 'react';
import styles from './PaginaInicial.module.css';
import { useNavigate } from 'react-router-dom';

function Fornecedor() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const produtos = [
    {
      imagem: 'https://via.placeholder.com/200x150/FFC107/000000?Text=Sabores',
      texto: 'Sabores & Estilo'
    }, {
      imagem: 'https://via.placeholder.com/200x150/4CAF50/FFFFFF?Text=Encanto',
      texto: 'Encanto & Arte'
    }, {
      imagem: 'https://via.placeholder.com/200x150/9C27B0/FFFFFF?Text=Palazzo',
      texto: 'Palazzo Fest'
    }
  ];

  const handleOrcamentoClick = () => {
    navigate('/pedido');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProdutos = produtos.filter(produto =>
    produto.texto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles['cadastro-container']}>
      <div className={styles['background-image']}></div>

      <div className={styles.logo}>
        <span className={styles['logo-blue']}>Party</span>
        <span className={styles['logo-black']}>Link</span>
      </div>

      <div className={styles.cabecalho}>
        <button className={styles['botao-voltar']}>←</button>
        <div className={styles['barra-pesquisa']}>
          <input
            type="text"
            placeholder="PESQUISAR"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className={styles['botao-pesquisar']}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="10.5" cy="10.5" r="7.5"/><path d="m21 21-5.2-5.2"/></svg>
          </button>
        </div>

        <div className={styles['perfil-icon-container']}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
      </div>

      <div className={styles['conteudo-principal']}>
        {filteredProdutos.map((item, index) => (
          <div className={styles['card-opcao']} key={index}>
            <div className={styles['card-imagem']}>
              <img src={item.imagem} alt={item.texto} />
            </div>
            <div className={styles['card-texto']}>{item.texto}</div>
            <div className={styles['card-acoes']}>
              <button onClick={handleOrcamentoClick} className={styles['botao-orcamento']}>ORÇAMENTO</button>
              <a href="tel:SEU_TELEFONE" className={styles['botao-ligar']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M15 22v-4a4 4 0 0 0-4-4H7c-2 0-4 2-4 4v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z"/><path d="M17 9v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z"/><line x1="12" x2="12" y1="3" y2="7"/></svg>
                LIGAR
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.rodape}>
        <div className={styles['fundo-silhuetas']}></div>
      </div>
    </div>
  );
}

export default Fornecedor;