const counterElement = document.querySelector('.counter-info');
const aumentarElement = document.querySelector('.sumar');
const decrecerElement = document.querySelector('.restar');
const resetElement = document.querySelector('.reset');

let contador = '0';

aumentarElement.addEventListener('click',function(){
    contador++;
    counterElement.textContent = contador;
})

decrecerElement.addEventListener('click',function(){
    contador--;
    counterElement.textContent = contador;
})

resetElement.addEventListener('click',function(){
    contador = '0';
    counterElement.textContent = contador;
})