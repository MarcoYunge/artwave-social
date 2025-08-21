function NewArtists() {
  const artists = [
    { name: "SoulWave", genre: "Indie Rock", location: "Bogotá" },
    { name: "NeonPiano", genre: "Electrónica", location: "Madrid" },
    { name: "Voz del Sur", genre: "Folk", location: "Lima" }
  ];

  return (
    <div className="block new-artists">
      <h2>🌟 Nuevos Artistas</h2>
      <ul>
        {artists.map((artist, i) => (
          <li key={i}>
            <strong>{artist.name}</strong> • {artist.genre} • {artist.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewArtists;
