function GuardarLogIn(nombreUsuario, contraseñaUsuario) {
  debugger;
  if (window.localStorage.getItem("LogedUser") !== null) {
    localStorage.removeItem("LogedUser");
  }

  const usuario = {
    nombre: nombreUsuario,
    contraseña: contraseñaUsuario,
  };
  console.log("logedUser: ",usuario);
  window.localStorage.setItem("LogedUser", JSON.stringify(usuario));
}

export default GuardarLogIn;
