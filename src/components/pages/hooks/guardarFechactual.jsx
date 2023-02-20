

function guardarFechactual() {
    const today = new Date();
    const dia = today.getDate();
    const mes = today.getMonth() + 1;
    const año = today.getFullYear();
     
    return(`${dia}/${mes}/${año}`);
}

export default guardarFechactual