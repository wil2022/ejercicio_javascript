let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafío';

function mensajeConsola(){
    console.log('El botón fue clicado');
}


function preguntaCiudadBrasil(){
    let ciudad = prompt('Ingrese una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function mensajeAlerta(){
    alert('Yo amo JS');
}


function suma(){
    let num1 = parseInt(prompt('ingrese un numero'));
    let num2 = parseInt(prompt('ingrese otro numero'));
    let resultado = num1 + num2;

    alert(`${num1} + ${num2} = ${resultado}`)

}