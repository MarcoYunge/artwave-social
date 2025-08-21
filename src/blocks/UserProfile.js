function UserProfile() {
  return (
    <div className="block user-profile">
      <h2>🛠️ Tu Perfil</h2>
      <form>
        <label>Nombre:</label>
        <input type="text" placeholder="Tu nombre" />
        <label>Ubicación:</label>
        <input type="text" placeholder="Ciudad, País" />
        <label>Intereses:</label>
        <select>
          <option>Música</option>
          <option>Arte visual</option>
          <option>Danza</option>
        </select>
        <button type="button">Guardar</button>
      </form>
    </div>
  );
}

export default UserProfile;
