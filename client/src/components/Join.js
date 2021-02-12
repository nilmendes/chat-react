import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Junte-se</h1>
        <div>
          <input type="text" className="joinInput" onChange={(event) => setName(event.target.value)} placeholder="Nome" />
        </div>
        <div>
          <input type="text" className="joinInput mt-20" onChange={(event) => setRoom(event.target.value)} placeholder="Sala" />
        </div>
        <Link onClick={(event) => (!name || !room ? event.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`}>
          <button type="submit" className="button mt-20">
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
