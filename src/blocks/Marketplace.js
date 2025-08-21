function Marketplace() {
  const items = [
    { title: "Guitarra acústica", type: "venta", price: "$150" },
    { title: "Micrófono vintage", type: "regalo", price: "Gratis" }
  ];

  return (
    <div className="block">
      <h2>Compra / Vende / Regala</h2>
      {items.map((item, i) => (
        <div key={i} className="card">
          <h3>{item.title}</h3>
          <p><strong>Tipo:</strong> {item.type}</p>
          <p><strong>Precio:</strong> {item.price}</p>
          <button className="btn">Contactar</button>
        </div>
      ))}
    </div>
  );
}

export default Marketplace;
