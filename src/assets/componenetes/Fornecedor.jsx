import React, { useState } from 'react';
import styles from './PaginaInicial.module.css'; // Mantenha o CSS Module
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Importe Link para o logo

function Fornecedor() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const produtos = [
    {
      imagem: 'https://via.placeholder.com/200x150/FFD700/8B4513?text=Bolo%20Decorado', // Dourado mais suave
      texto: 'Sabores & Estilo'
    }, {
      imagem: 'https://via.placeholder.com/200x150/8A2BE2/FFFFFF?text=Decoração%20Exclusiva', // Roxo mais vivo
      texto: 'Encanto & Arte'
    }, {
      imagem: 'https://via.placeholder.com/200x150/FF69B4/FFFFFF?text=Espaço%20Premium', // Rosa vibrante
      texto: 'Palazzo Fest'
    },
    // Adicione mais exemplos para preencher a grade e ver o layout
    {
        imagem: 'https://via.placeholder.com/200x150/00CED1/FFFFFF?text=Fotografia%20Criativa', // Azul esverdeado
        texto: 'Olhares Únicos'
    },
    {
        imagem: 'https://via.placeholder.com/200x150/FF4500/FFFFFF?text=Música%20Ao%20Vivo', // Laranja vibrante
        texto: 'Sons & Ritmos'
    },
    {
        imagem: 'https://via.placeholder.com/200x150/32CD32/FFFFFF?text=Buffet%20Gourmet', // Verde mais vivo
        texto: 'Gastronomia Fina'
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
    <div className={styles['fornecedor-container']}> {/* Altera para fornecedor-container para ser mais específico */}
      <div className={styles['background-image']}></div>
      <div className={styles['overlay']}></div> {/* Adiciona um overlay para melhor contraste */}

      <header className={styles.header}> {/* Usa header global para consistência */}
        <div className={styles.logo}>
            <Link to="/" className={styles['logo-link']}> {/* Adiciona link para o logo */}
              <span className={styles['logo-blue']}>Party</span>
              <span className={styles['logo-black']}>Link</span>
            </Link>
        </div>

        <nav className={styles['nav-bar']}> {/* Navbar mais moderna */}
          <button onClick={() => navigate(-1)} className={styles['back-button']}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          </button>
          <div className={styles['search-bar']}>
            <input
              type="text"
              placeholder="PESQUISAR FORNECEDORES..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles['search-input']}
            />
            <button className={styles['search-button']}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="10.5" cy="10.5" r="7.5"/><path d="m21 21-5.2-5.2"/></svg>
            </button>
          </div>
          <div className={styles['profile-icon-container']}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
        </nav>
      </header>

      <main className={styles['main-content-fornecedor']}> {/* Novo nome para o conteúdo principal */}
        <h2 className={styles['section-title']}>Nossos Fornecedores de Destaque</h2>
        <p className={styles['section-subtitle']}>Encontre os melhores parceiros para o seu evento perfeito.</p>

        <div className={styles['cards-grid']}>
          {filteredProdutos.length > 0 ? (
            filteredProdutos.map((item, index) => (
              <div className={styles['product-card']} key={index}> {/* Novo nome de classe */}
                <div className={styles['card-image-wrapper']}>
                  <img src={item.imagem} alt={item.texto} className={styles['card-img']} />
                </div>
                <div className={styles['card-info']}>
                  <h3 className={styles['card-title']}>{item.texto}</h3>
                  <div className={styles['card-actions']}>
                    <button onClick={handleOrcamentoClick} className={styles['budget-button']}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
                      ORÇAMENTO
                    </button>
                    <a href="tel:SEU_TELEFONE" className={styles['call-button']}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M15 22v-4a4 4 0 0 0-4-4H7c-2 0-4 2-4 4v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z"/><path d="M17 9v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z"/><line x1="12" x2="12" y1="3" y2="7"/></svg>
                      LIGAR
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className={styles['no-results']}>Nenhum fornecedor encontrado com este termo.</p>
          )}
        </div>
      </main>

      {/* Não é mais necessário o rodape com fundo-silhuetas, a imagem de fundo já faz o trabalho */}
      {/* <div className={styles.rodape}>
        <div className={styles['fundo-silhuetas']}></div>
      </div> */}
    </div>
  );
}

export default Fornecedor;