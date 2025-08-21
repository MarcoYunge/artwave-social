// src/blocks/Header.js
function Header({ setCurrentView }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#" style={{ fontWeight: 'bold' }}>
          🎵 ArtWave
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link btn btn-sm" onClick={() => setCurrentView('news')}>Inicio</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-sm" onClick={() => setCurrentView('new-artists')}>Nuevos</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-sm" onClick={() => setCurrentView('marketplace')}>Mercado</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-sm" onClick={() => setCurrentView('artist-profile')}>Artistas</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-sm" onClick={() => setCurrentView('user-profile')}>Mi Perfil</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
