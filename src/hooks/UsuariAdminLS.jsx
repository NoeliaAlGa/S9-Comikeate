

const UsuariAdminLS = () => {
      const usuarioAdmin = {
          nombre: "Admin",
          mail: "admin@comikeate.com",
          contraseña: "Admin",
        };
        const usuarios = [];
        usuarios.push(usuarioAdmin);
      
        window.localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

export default UsuariAdminLS