// src/blocks/NewsFeed.js
function NewsFeed() {
  const posts = [
    { id: 1, user: "DJ Nova", content: "¡Nuevo track subido! 🎧 Escúchalo en mi perfil.", likes: 15 },
    { id: 2, user: "Luna Art", content: "Pintura digital inspirada en el cosmos 🌌", likes: 8 }
  ];

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary">📰 Muro de Noticias</h2>
      {posts.map(post => (
        <div className="card mb-3 shadow-sm" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.user}</h5>
            <p className="card-text">{post.content}</p>
            <button className="btn btn-outline-primary btn-sm">
              ❤️ {post.likes} Me gusta
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;
