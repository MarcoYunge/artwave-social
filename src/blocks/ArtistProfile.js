// src/blocks/ArtistProfile.js
function ArtistProfile() {
  return (
    <div className="container my-4">
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <img 
          src="https://via.placeholder.com/150" 
          className="card-img-top rounded-circle mx-auto mt-4" 
          alt="Foto del artista" 
          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
        />
        <div className="card-body text-center">
          <h3 className="card-title">DJ Nova</h3>
          <p className="text-muted">Techno • Bogotá</p>
          <p>Productor de música electrónica. Apasionado por los sintetizadores analógicos.</p>
          <div className="d-flex justify-content-center gap-2 mb-3">
            <button className="btn btn-primary btn-sm">Seguir</button>
            <button className="btn btn-outline-dark btn-sm">Enviar mensaje</button>
          </div>
          <h5>🎧 Tracks</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Noche Profunda</li>
            <li className="list-group-item">Circuito 7</li>
            <li className="list-group-item">Eclipse</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArtistProfile;
