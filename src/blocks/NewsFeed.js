function NewsFeed() {
  const posts = [
    { id: 1, user: "DJ Nova", content: "¡Nuevo track subido! 🎧", likes: 15 },
    { id: 2, user: "Luna Art", content: "Arte digital del cosmos 🌌", likes: 8 }
  ];

  return (
    <div className="block news-feed">
      <h2>📰 Muro de Noticias</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <strong>{post.user}</strong>
          <p>{post.content}</p>
          <small>❤️ {post.likes} Me gusta</small>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;
