const $number1 = document.querySelector("#number1");
const $number2 = document.querySelector("#number2");
const $resultado = document.querySelector("#resultado");

const number1Value =$number1.value;
const number2Value =$number2.value;


document.querySelector('.theme').addEventListener('click', ()=>{
  document.body.classList.toggle('dark-mode');
  document.querySelector('.theme').textContent = document.querySelector('.theme').textContent === 'Light' ? 'Dark' : 'Light';
})

document.querySelector('.plus').addEventListener('click', ()=>{

  const operacion = Number($number1.value) + Number($number2.value);
  mostrarResultado(operacion);
  $number1.value ='';
  $number2.value ='';
})

document.querySelector('.minus').addEventListener('click', ()=>{
  const operacion = Number($number1.value) - Number($number2.value);
  mostrarResultado(operacion);
  $number1.value='';
  $number2.value='';
})
document.querySelector('.multiplicar').addEventListener('click', ()=>{
  const operacion = Number($number1.value) * Number($number2.value);
  mostrarResultado(operacion);
  $number1.value='';
  $number2.value='';
})
document.querySelector('.dividir').addEventListener('click', ()=>{
  const operacion = Number($number1.value) / Number($number2.value);
  mostrarResultado(operacion);
  $number1.value='';
  $number2.value='';
})
document.querySelector('.potencia').addEventListener('click', ()=>{
  const operacion = Math.pow(Number($number1.value), Number($number2.value));
  mostrarResultado(operacion);
  $number1.value='';
  $number2.value='';
})
document.querySelector('.raiz').addEventListener('click', ()=>{
  const operacion = Math.sqrt(Number($number1.value), Number($number2.value));
  mostrarResultado(operacion);
  $number1.value='';
  $number2.value='';
})
document.querySelector('.absoluto').addEventListener('click', ()=>{
  const operacion = Math.abs(Number($number1.value), Number($number2.value));
  mostrarResultado(operacion);
  $number1.value='';
  $number2.value='';
})
document.querySelector('.random').addEventListener('click', ()=>{
  const operacion = Math.floor(Math.random() * (number1Value - number2Value) + number1Value );
  mostrarResultado(operacion);
})


document.querySelector('.round').addEventListener('click',()=>{
  mostrarResultado(Math.round($resultado.textContent))
})
document.querySelector('.floor').addEventListener('click',()=>{
  mostrarResultado(Math.floor($resultado.textContent))
})
document.querySelector('.ceil').addEventListener('click',()=>{
  mostrarResultado(Math.ceil($resultado.textContent))
})



function mostrarResultado(valor){
  $resultado.textContent = valor;
}