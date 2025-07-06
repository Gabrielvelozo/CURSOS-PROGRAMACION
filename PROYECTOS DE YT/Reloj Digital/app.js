const hora = document.querySelector('#hora');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

function actualizarHora(){
    const fechaACtual = new Date;

    hora.textContent = String(fechaACtual.getHours()).padStart(2,'0');
    minutos.textContent = String(fechaACtual.getMinutes()).padStart(2,'0');
    segundos.textContent = String(fechaACtual.getSeconds()).padStart(2,'0');
}

setInterval(actualizarHora,1000);
actualizarHora();