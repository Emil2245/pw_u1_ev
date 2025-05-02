let valor1= 0.0;
let valor2= 0.0;
const signo ='';


const mostrarEnDisplay=(valor)=>{
    let elementoDisplay = document.getElementById('id_display');

    if( valor ==='+'){
        valor1 = parseFloat(elementoDisplay.innerText);
        elementoDisplay.innerText='';
        return;
    }
    if( valor ==='='){
        valor2 = parseFloat(elementoDisplay.innerText);
        elementoDisplay.innerText=valor1+valor2;
        return;
    }    

    elementoDisplay.innerText=elementoDisplay.innerText+valor;

    console.log(valor1)
    console.log(valor2)
}
