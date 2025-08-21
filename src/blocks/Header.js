// src/blocks/Header.js
import React from 'react';

function Header({ setCurrentView }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">🎵 ArtWave</span>
        <div>
          <button onClick={() => setCurrentView('news')}>Inicio</button>
          <button onClick={() => setCurrentView('new-artists')}>Nuevos</button>
          <button onClick={() => setCurrentView('marketplace')}>Mercado</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
