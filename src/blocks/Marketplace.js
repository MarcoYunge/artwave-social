function Marketplace() {
  const items = [
    { title: "Guitarra acústica", type: "venta", price: "$150" },
    { title: "Micrófono vintage", type: "regalo", price: "Gratis" }
  ];

  return (
    <div className="block marketplace">
      <h2>🛒 Compra / Vende / Regala</h2>
      <div className="items">
        {items.map((item, i) => (
          <div key={i} className={`item item-${item.type}`}>
            <h4>{item.title}</h4>
            <p>Tipo: {item.type}</p>
            <p>Precio: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
