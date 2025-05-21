import React, { useState, useRef, useEffect } from 'react';
import styles from './OrcamentoPage.module.css';
import { Link } from 'react-router-dom';
// Não precisamos mais importar a imagem aqui, pois ela será referenciada diretamente no CSS
// import silhuetaImage from '../assets/image.png';

function OrcamentoPage() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const newId = messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1;
      // Adiciona a mensagem do usuário
      setMessages(prevMessages => [...prevMessages, { id: newId, text: inputText, sender: 'user' }]);
      setInputText('');

      // Simula uma resposta do bot após um curto atraso
      setTimeout(() => {
        const botNewId = newId + 1;
        // Assegura que o texto da resposta do bot faça sentido para uma primeira mensagem
        const botResponseText = messages.length === 0
          ? "Olá! Para que eu possa te ajudar com seu orçamento, por favor, me diga qual tipo de evento você está planejando e para quando seria a data?"
          : "Certo! Entendi sua mensagem. Estou processando as informações para te dar a melhor resposta.";

        setMessages(prevMessages => [...prevMessages, { id: botNewId, text: botResponseText, sender: 'bot' }]);
      }, 1000); // 1 segundo de atraso
    }
  };

  const filteredMessages = messages.filter(message =>
    message.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles['orcamento-container']}>
      {/* NOVO: Div para a imagem de fundo. A imagem é definida no CSS (referenciando /public/image.png) */}
      {/* Não é necessário o style inline para a imagem, pois o URL está no CSS agora */}
      <div className={styles['background-image']}></div>
      {/* O overlay é um ::before no .orcamento-container no CSS */}

      <header className={styles.header}>
        <Link to="/" className={styles['logo-link']}>
          <div className={styles.logo}>
            <span className={styles['logo-blue']}>Party</span>
            <span className={styles['logo-black']}>Link</span>
          </div>
        </Link>
        <div className={styles['title-container']}>
          <div className={styles['page-title']}>ORÇAMENTO DA FESTA</div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles['search-bar-container']}>
          <input
            type="text"
            placeholder="Pesquisar nas mensagens..."
            className={styles['search-input']}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles['search-button']}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="10.5" cy="10.5" r="7.5"/><path d="m21 21-5.2-5.2"/></svg>
          </button>
        </div>

        <div className={styles['message-display']}>
          {/* Renderiza as mensagens filtradas */}
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              className={`${styles.message} ${
                message.sender === 'user' ? styles['message-user'] : styles['message-bot']
              }`}
            >
              <div className={styles['message-bubble']}>
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
          {/* Mensagem inicial condicional se não houver mensagens */}
          {messages.length === 0 && (
            <div className={`${styles.message} ${styles['message-bot']}`}>
              <div className={styles['message-bubble']}>
                Olá! 👋 Que ótimo que você está aqui para organizar sua festa. Para começarmos, por favor, me diga o tipo de evento (ex: aniversário, casamento, formatura) e a data planejada.
              </div>
            </div>
          )}
        </div>

        <div className={styles['input-area']}>
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className={styles['message-input']}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button className={styles['send-button']} onClick={handleSendMessage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 7m0 0v10l-4-4m4 4L2 12l5-5"/></svg>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* Conteúdo do rodapé */}
      </footer>
    </div>
  );
}

export default OrcamentoPage;