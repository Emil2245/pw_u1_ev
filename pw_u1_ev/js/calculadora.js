// es un lenguaje de programacion
// comportamiento y o funcionalidad de la pagina web
//no maneja una version directa, como CSS3 y HTML5. se basa en un standar ECMAscript (ult ver. ECMAscript2024)
// 
// manipulacion dimanica de elementos HTML, a traves del DOM (Documento Object Model) 
// [estructura en forma de arbol que contiene de manera jerarquica todos los elementos de la pagina web]
// [accede modifica agrega o elimina cualquier elemento del DOM]
// [siempre hay un elemento raiz "Document"]

// tiene tipos de declaracion: funcionalidad y comportamiento... 
//  en linea (a un solo elemento),
//  interno (a una sola pagina),
//  externo (a varias paginas de manera centralizada).

const SUMA = '+'
const RESTA = '-'
const MULTIPLICACION = '*'
const DIVISION = '/'

function sumar(numero1, numero2) {
    return numero1 + numero2;
}
function restar(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
function dvidir(numero1, numero2) {
    return numero1 / numero2;
}
function evaluarOperacion(tipo
) {
    let numero1 = parseFloat(document.getElementById('id_numero_1').value);
    let numero2 = parseFloat(document.getElementById('id_numero_2').value);
    let resultado = 0;
    if (tipo === SUMA) {
        resultado = sumar(numero1, numero2)
    }
    if (tipo === RESTA) {
        resultado = restar(numero1, numero2)
    }
    if (tipo === MULTIPLICACION) {
        resultado = multiplicar(numero1, numero2)
    }
    if (tipo === DIVISION) {
        resultado = dvidir(numero1, numero2)
    }

    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado;
}

const fundamentos = () => {
    console.log('Fundamentos JS')
    /* Tipos de variables
 var (obsoleto), let (variables cambiantes), const (variables constantes)    
 */
    let nombre = '10';
    let arreglo = [1, 2, 3, 4, 5, 6]
    const NOMBREV = '11'

    console.log('Hola Mundo')

    /* Arreglo   */
    const DIASLABORABLES = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
    console.log(DIASLABORABLES)
    console.log(DIASLABORABLES[0])
    console.log(DIASLABORABLES[50])

    let valor = '';
    console.log(valor);

    DIASLABORABLES.push('Sabado');
    console.log(DIASLABORABLES);
    DIASLABORABLES.unshift('Dias');
    console.log(DIASLABORABLES);
    const arregloNumerosImpares = [1, 3, 5, 7, 9, 11];
    const arregloNumerosPpares = [2, 4, 6, 8, 10, 12];
    numerosTotal = arregloNumerosImpares.concat(arregloNumerosPpares);
    console.log(numerosTotal);

    for (const dia of DIASLABORABLES) {
        console.log(dia);
        if (dia === 'viernes') { console.log('por fin viernes') }
        else {
            console.log('Aun no es vienes')
        }

        if (dia !== 'viernes') { console.log('dia normal') }
        else {
            console.log('Dia de salida')
        }
    }

    /** Manejo de objetos */

    const miProfesor = {
        nombre: 'Emil',
        apellido: 'Verkade',
        edad: 23,
        genero:'Masculino',
        ciudad: 'UIO'
    }
    console.log(miProfesor);
    console.log(miProfesor.apellido);
    miProfesor.apellido='Valdiviezo';
    console.log(miProfesor.apellido);

    if (miProfesor.ciudad==='UIO') console.log('capitalino');

    const estudiante1= {nombre:'Emil', apellido:'Verkade'};
    const estudiante2= {nombre:'Joel', apellido:'Verkade'};
    const estudiante3= {nombre:'Kevin', apellido:'Verkade'};
    const arreglo1= [estudiante1,estudiante2,estudiante3];

    console.log(arreglo1)
    console.table(arreglo1)
    

}

