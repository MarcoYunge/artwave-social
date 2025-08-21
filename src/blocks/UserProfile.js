function UserProfile() {
  return (
    <div className="block">
      <h2>Mi Perfil</h2>
      <div className="card">
        <label>Nombre</label>
        <input type="text" placeholder="Tu nombre" />
        
        <label>Ubicación</label>
        <input type="text" placeholder="Ciudad, País" />
        
        <label>Intereses</label>
        <select>
          <option>Música</option>
          <option>Arte visual</option>
          <option>Danza</option>
        </select>
        
        <button className="btn">Guardar</button>
      </div>
    </div>
  );
}

export default UserProfile;
