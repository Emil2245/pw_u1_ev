let valor1 = 0.0;
let valor2 = 0.0;
let signo = "";
let elementoDisplay = "";

const mostrarEnDisplay = (valor) => {
  elementoDisplay = document.getElementById("id_display");
  if (
    valor === "+" ||
    valor === "-" ||
    valor === "*" ||
    valor === "/" ||
    valor === "%"
  ) {
    valor1 = parseFloat(elementoDisplay.innerText);
    elementoDisplay.innerText = "";

    valor2 = 0.0;
    signo = valor;

    console.log(valor1);
    console.log(valor2);

    return;
  }
  if (valor === "=") {
    valor1 = calcularResultado();
    elementoDisplay.innerText = valor1;
    console.log(valor1);
    console.log(valor2);
    return;
  }

  elementoDisplay.innerText = elementoDisplay.innerText + valor;

  console.log(valor1);
  console.log(valor2);
};
function sumar() {
  return valor1 + valor2;
}
function restar() {
  return valor1 - valor2;
}
function multiplicar() {
  return valor1 * valor2;
}
function dividir() {
  if (valor2 === 0) {
    throw new Error("División por cero no permitida");
    return;
  }
  return valor1 / valor2;
}
function modular() {
  return valor1 % valor2;
}

function calcularResultado() {
  valor2 = parseFloat(elementoDisplay.innerText);
  const resultado = 0;

  if (signo === "") {
    return valor2;
  } else if (signo === "+") {
    return sumar();
  } else if (signo === "-") {
    return restar();
  } else if (signo === "*") {
    return multiplicar();
  } else if (signo === "/") {
    try {
      return dividir();
    } catch (error) {
      elementoDisplay.innerText = "Error: División por cero";
      return;
    }
  } else if (signo === "%") {
    return modular();
  }
}

function borrar() {
  elementoDisplay.innerText = elementoDisplay.innerText.slice(0, -1);
}

function limpiarData() {
  valor1 = 0.0;
  valor2 = 0.0;
  signo = "";
  elementoDisplay.innerText = "";
}
