const guardar = () => {
    validar()
}
const validar = () => {
    const nombre = document.getElementById("id_nombre").value;

    if (nombre === "") {
        console.log("NOMBRE NO INGRESADO")
    } else {
        console.log("VALIDADO")
    }
}