const guardar = () => {
    validar()
}

// todas las validaciones de forma deben hacerse en el front: vacio, cedula
const validar = () => {
    const nombre = document.getElementById("id_nombre").value;

    if (nombre === "") {
        console.log("NOMBRE NO INGRESADO")
    } else {
        console.log("VALIDADO")
    }
}