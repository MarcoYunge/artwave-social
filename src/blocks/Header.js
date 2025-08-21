function Header({ setCurrentView }) {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>🎵 ArtWave</h1>
      <nav>
        <button onClick={() => setCurrentView('news')}>Inicio</button>
        <button onClick={() => setCurrentView('new-artists')}>Nuevos</button>
        <button onClick={() => setCurrentView('marketplace')}>Mercado</button>
        <button onClick={() => setCurrentView('artist-profile')}>Artistas</button>
        <button onClick={() => setCurrentView('user-profile')}>Mi Perfil</button>
        <button onClick={() => signInWithGoogle()}>Iniciar sesión</button>
      </nav>
    </header>
  );
}
