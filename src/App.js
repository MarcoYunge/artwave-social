// src/App.js
import React, { useState } from 'react';
import './App.css';

// Importamos los bloques esclavos
import NewsFeed from './blocks/NewsFeed';
import NewArtists from './blocks/NewArtists';
import Marketplace from './blocks/Marketplace';
import ArtistProfile from './blocks/ArtistProfile';
import UserProfile from './blocks/UserProfile';
import Header from './blocks/Header';
import Footer from './blocks/Footer';

function App() {
  const [currentView, setCurrentView] = useState('news');

  return (
    <div className="App">
      <Header setCurrentView={setCurrentView} />
      
      <main className="main-content">
        {currentView === 'news' && <NewsFeed />}
        {currentView === 'new-artists' && <NewArtists />}
        {currentView === 'marketplace' && <Marketplace />}
        {currentView === 'artist-profile' && <ArtistProfile />}
        {currentView === 'user-profile' && <UserProfile />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
