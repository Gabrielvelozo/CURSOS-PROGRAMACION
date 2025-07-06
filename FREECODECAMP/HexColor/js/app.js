const contenedorColor = document.querySelector('.hex__container');
const color = document.querySelector('#color');
const button = document.querySelector('button');

function generarColor(){
    const letras = '0123456789ABCDEF';
    let hex = '#';

    for (i=0; i < 6 ; i++) {
        const random = Math.floor(Math.random()*letras.length);
        hex += letras[random];
    }
    return hex;
}

button.addEventListener('click', () => {
    const colorHex = generarColor();
    color.textContent = colorHex;

    contenedorColor.style.backgroundColor = colorHex;
})

