const facturaInput = document.querySelector('#factura');
const porcentajeInput = document.querySelector('#porcentaje');
const button = document.querySelector('.btn');
const totalInput = document.querySelector('#total');

function calcularPropina (){
  const facturaValue = facturaInput.value;
  const porcentajeValue = porcentajeInput.value;
  const totalValue = facturaValue * (1 + porcentajeValue / 100);
  totalInput.textContent = `$ ${totalValue.toFixed(2)}`;
  facturaInput.value = 0;
  porcentajeInput.value = 0;
}

button.addEventListener('click', calcularPropina);