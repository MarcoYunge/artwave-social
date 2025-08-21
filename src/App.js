import React, { useState } from 'react';
import './App.css';

// Bloques esclavos
import NewsFeed from './blocks/NewsFeed';
import NewArtists from './blocks/NewArtists';
import Marketplace from './blocks/Marketplace';
import ArtistProfile from './blocks/ArtistProfile';
import UserProfile from './blocks/UserProfile';

function App() {
  const [currentView, setCurrentView] = useState('news');

  const renderContent = () => {
    switch (currentView) {
      case 'news': return <NewsFeed />;
      case 'new-artists': return <NewArtists />;
      case 'marketplace': return <Marketplace />;
      case 'artist-profile': return <ArtistProfile />;
      case 'user-profile': return <UserProfile />;
      default: return <NewsFeed />;
    }
  };

  return (
    <div className="app">
      {/* Contenido principal */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* Menú inferior moderno (como app móvil) */}
      <nav className="bottom-nav">
        <button
          className={currentView === 'news' ? 'active' : ''}
          onClick={() => setCurrentView('news')}
        >
          <span role="img" aria-label="inicio">🏠</span>
        </button>
        <button
          className={currentView === 'new-artists' ? 'active' : ''}
          onClick={() => setCurrentView('new-artists')}
        >
          <span role="img" aria-label="nuevos">🌟</span>
        </button>
        <button
          className={currentView === 'marketplace' ? 'active' : ''}
          onClick={() => setCurrentView('marketplace')}
        >
          <span role="img" aria-label="mercado">🛒</span>
        </button>
        <button
          className={currentView === 'artist-profile' ? 'active' : ''}
          onClick={() => setCurrentView('artist-profile')}
        >
          <span role="img" aria-label="perfil">🎭</span>
        </button>
        <button
          className={currentView === 'user-profile' ? 'active' : ''}
          onClick={() => setCurrentView('user-profile')}
        >
          <span role="img" aria-label="mi perfil">👤</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
