const counterDisplay = document.querySelector('.counter__title');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');

const maximo = 10;
const minimo = 0;

function actualizarDisable(){
    plusBtn.classList.toggle('btn--disable',counterDisplay.textContent >= maximo);
    minusBtn.classList.toggle('btn--disable',counterDisplay.textContent <= minimo);
}
plusBtn.addEventListener('click', ()=>{
    counterDisplay.textContent++;
    actualizarDisable();
})
minusBtn.addEventListener('click', ()=> {
    counterDisplay.textContent --;
    actualizarDisable();
})