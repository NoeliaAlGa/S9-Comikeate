

function BuscarUsuario(nombreUsuario, contraseñaUsuario) {

    const usuarios =  JSON.parse(window.localStorage.getItem("usuarios"));

     const encontrado = usuarios.some(usuario => usuario.nombre === nombreUsuario && usuario.contraseña === contraseñaUsuario);

     return encontrado;

}

export default BuscarUsuario;