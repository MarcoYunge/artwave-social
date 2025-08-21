function NewArtists() {
  const artists = [
    { name: "SoulWave", genre: "Indie Rock", location: "Bogotá" },
    { name: "NeonPiano", genre: "Electrónica", location: "Madrid" },
    { name: "Voz del Sur", genre: "Folk", location: "Lima" }
  ];

  return (
    <div className="block">
      <h2>Nuevos Artistas</h2>
      {artists.map((artist, i) => (
        <div key={i} className="card">
          <h3>{artist.name}</h3>
          <p><strong>Género:</strong> {artist.genre}</p>
          <p><strong>Ubicación:</strong> {artist.location}</p>
          <button className="btn">Seguir</button>
        </div>
      ))}
    </div>
  );
}

export default NewArtists;
