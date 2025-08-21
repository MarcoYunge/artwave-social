function NewsFeed() {
  const posts = [
    { id: 1, user: "DJ Nova", content: "Nuevo track subido! 🎧 Escúchalo en mi perfil.", likes: 12 },
    { id: 2, user: "Luna Art", content: "Pintura digital inspirada en el cosmos 🌌", likes: 8 }
  ];

  return (
    <div className="block">
      <h2>Inicio</h2>
      {posts.map(post => (
        <div key={post.id} className="card">
          <h3>{post.user}</h3>
          <p>{post.content}</p>
          <button className="btn">❤️ {post.likes}</button>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;
