import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Digite a sua mensagem..."
        className="input"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
      />
      <button className="sendButton" onClick={(event) => sendMessage(event)}>
        <AiOutlineSend />
      </button>
    </form>
  );
};

export default Input;
