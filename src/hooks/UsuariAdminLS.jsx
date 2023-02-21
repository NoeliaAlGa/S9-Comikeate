

const UsuariAdminLS = () => {
  const usuarioLS = window.localStorage.getItem("usuarios");
  if(usuarioLS === null) {
    const usuarios = [];

      const usuarioAdmin = {
          nombre: "Admin",
          mail: "admin@comikeate.com",
          contraseña: "Admin",
        };
        
        usuarios.push(usuarioAdmin);
      
        window.localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
}

export default UsuariAdminLS