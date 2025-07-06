const inputRojo = document.querySelector('#rojo');
const inputVerde = document.querySelector('#verde');
const inputAzul = document.querySelector('#azul');

const textoRojo = document.querySelector('.texto-rojo');
const textoVerde = document.querySelector('.texto-verde');
const textoAzul = document.querySelector('.texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

function generarColor(rojo,verde,azul) {
  const colorRgb = `rgb(${rojo},${verde},${azul})`;
  document.body.style.backgroundColor = colorRgb;
}

inputRojo.addEventListener('change', (e) => {
  rojo = e.target.value; 
  textoRojo.textContent = rojo;
  generarColor(rojo,verde,azul);
})

inputVerde.addEventListener('change', (e) => {
  verde = e.target.value; 
  textoVerde.textContent = verde;
  generarColor(rojo,verde,azul);
}
)
inputAzul.addEventListener('change', (e) => {
  azul = e.target.value; 
  textoAzul.textContent = azul;
  generarColor(rojo,verde,azul);
})