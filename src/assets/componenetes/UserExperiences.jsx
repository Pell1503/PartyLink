import React, { useState } from 'react';
import './UserExperiences.css'; // Importa o CSS da página de experiências

function UserExperiences() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Ana Paula',
      timestamp: '15/05/2025 10:30',
      text: 'Minha festa de aniversário foi um sucesso! Encontrei tudo que precisava aqui na PartyLink. Recomendo muito!',
      replies: [
        {
          id: 101,
          author: 'PartyLink Oficial',
          timestamp: '15/05/2025 11:00',
          text: 'Que ótimo, Ana! Ficamos felizes em ajudar a tornar seu dia especial! 🎉',
        },
      ],
      showReplyInput: false,
    },
    {
      id: 2,
      author: 'Carlos Eduardo',
      timestamp: '16/05/2025 14:15',
      text: 'O serviço de fotografia que contratei foi impecável! Fotos lindas e preço justo. Parabéns à plataforma!',
      replies: [],
      showReplyInput: false,
    },
  ]);

  const [newCommentText, setNewCommentText] = useState('');
  const [replyText, setReplyText] = useState({}); // Armazena texto de resposta por ID do comentário

  const handleAddComment = () => {
    if (newCommentText.trim()) {
      const newComment = {
        id: Date.now(), // ID único
        author: 'Você (Novo Usuário)', // Assumindo um usuário genérico por enquanto
        timestamp: new Date().toLocaleString('pt-BR'),
        text: newCommentText.trim(),
        replies: [],
        showReplyInput: false,
      };
      setComments([newComment, ...comments]); // Adiciona o novo comentário no topo
      setNewCommentText('');
    }
  };

  const handleToggleReplyInput = (commentId) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? { ...comment, showReplyInput: !comment.showReplyInput }
        : comment
    ));
  };

  const handleAddReply = (commentId) => {
    if (replyText[commentId] && replyText[commentId].trim()) {
      setComments(comments.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: Date.now() + 1, // ID único para resposta
                  author: 'Você (Respondendo)', // Assumindo um usuário genérico
                  timestamp: new Date().toLocaleString('pt-BR'),
                  text: replyText[commentId].trim(),
                },
              ],
              showReplyInput: false, // Esconde o campo após responder
            }
          : comment
      ));
      setReplyText(prev => ({ ...prev, [commentId]: '' })); // Limpa o campo de resposta
    }
  };

  return (
    <div className="experiences-container">
      {/* NOVO: Div da imagem de fundo - Use a mesma classe da HomePage se quiser */}
      <div className="background-image"></div> 
      {/* O overlay será adicionado via pseudo-elemento no CSS */}

      <h1 className="experiences-title">Experiências dos Usuários</h1>
      <p className="experiences-subtitle">Veja o que as pessoas estão dizendo sobre suas festas e eventos com a PartyLink!</p>

      {/* Seção para adicionar novo comentário */}
      <div className="new-comment-section">
        <textarea
          className="comment-input"
          placeholder="Compartilhe sua experiência..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        ></textarea>
        <button className="submit-comment-button" onClick={handleAddComment}>
          Publicar Comentário
        </button>
      </div>

      {/* Lista de Comentários */}
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-card">
            <div className="comment-header">
              <span className="comment-author">{comment.author}</span>
              <span className="comment-timestamp">{comment.timestamp}</span>
            </div>
            <p className="comment-text">{comment.text}</p>
            <button className="reply-button" onClick={() => handleToggleReplyInput(comment.id)}>
              {comment.showReplyInput ? 'Cancelar Resposta' : 'Responder'}
            </button>

            {comment.showReplyInput && (
              <div className="reply-input-section">
                <textarea
                  className="reply-input"
                  placeholder="Escreva sua resposta..."
                  value={replyText[comment.id] || ''}
                  onChange={(e) => setReplyText(prev => ({ ...prev, [comment.id]: e.target.value }))}
                ></textarea>
                <button className="submit-reply-button" onClick={() => handleAddReply(comment.id)}>
                  Enviar Resposta
                </button>
              </div>
            )}

            {comment.replies.length > 0 && (
              <div className="replies-section">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="reply-card">
                    <div className="reply-header">
                      <span className="reply-author">{reply.author}</span>
                      <span className="reply-timestamp">{reply.timestamp}</span>
                    </div>
                    <p className="reply-text">{reply.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserExperiences;