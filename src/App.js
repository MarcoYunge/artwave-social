import React, { useState } from 'react';
import './App.css';

// Importamos los bloques esclavos
import NewsFeed from './blocks/NewsFeed';
import NewArtists from './blocks/NewArtists';
import Marketplace from './blocks/Marketplace';
import ArtistProfile from './blocks/ArtistProfile';
import UserProfile from './blocks/UserProfile';

function App() {
  const [currentView, setCurrentView] = useState('news');

  return (
    <div className="App">
      <header className="header">
        <h1>🎵 ArtWave</h1>
        <nav>
          <button onClick={() => setCurrentView('news')}>Inicio</button>
          <button onClick={() => setCurrentView('new-artists')}>Nuevos Artistas</button>
          <button onClick={() => setCurrentView('marketplace')}>Mercado</button>
          <button onClick={() => setCurrentView('artist-profile')}>Perfil Artista</button>
          <button onClick={() => setCurrentView('user-profile')}>Mi Perfil</button>
        </nav>
      </header>

      <main className="main-content">
        {currentView === 'news' && <NewsFeed />}
        {currentView === 'new-artists' && <NewArtists />}
        {currentView === 'marketplace' && <Marketplace />}
        {currentView === 'artist-profile' && <ArtistProfile />}
        {currentView === 'user-profile' && <UserProfile />}
      </main>

      <footer className="footer">
        <p>© 2025 ArtWave - Conectando artistas emergentes</p>
      </footer>
    </div>
  );
}

export default App;
