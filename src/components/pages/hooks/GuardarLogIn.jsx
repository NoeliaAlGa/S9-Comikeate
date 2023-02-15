function GuardarLogIn(nombreUsuario, contraseñaUsuario) {
  if (window.localStorage.getItem("LogedUser") !== null) {
    localStorage.removeItem("LogedUser");
  }

  const usuario = {
    nombre: nombreUsuario,
    contraseña: contraseñaUsuario,
  };

  window.localStorage.setItem("LogedUser", JSON.stringify(usuario));
}

export default GuardarLogIn;
