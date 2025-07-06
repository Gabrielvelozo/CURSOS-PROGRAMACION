// Variables
const climaBtn = document.querySelector('.btn');

// Eventos
window.addEventListener('load', () => {
    climaBtn.addEventListener('click', actualizarClima);
})

//funciones
function actualizarClima(){
    
    //validar
    const $pais = document.querySelector('#pais').value;
    const $ciudad = document.querySelector('#ciudad').value;
    
    if($pais == '' || $ciudad == ''){
        //Error
        mostrarEror('¡Ambos campos son obligatorios!');
        return
    }
    
    const appId = 'dacbace5d3b04117ce7b2c2ce7a28fd6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${$ciudad},${$pais}&appid=${appId}`;
    
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(dato => {
        if(dato.cod === '404'){
            mostrarEror('Ciudad no encontrada');
            return
        }
        mostrarClima(dato);
    })
}


function mostrarEror(mensaje){
    const $notificacion = document.querySelector('.notificacion');
   
    // Notificacion
   if(!$notificacion){
        const alert = document.querySelector('#alert');
        const p = document.createElement('p');
        const pMensaje = document.createElement('p');
        pMensaje.textContent = 'Error!';
        pMensaje.classList.add('error');
        p.textContent = mensaje;
        alert.appendChild(pMensaje);
        alert.appendChild(p);
        alert.classList.add('notificacion');
   }
   setTimeout(() => {
       document.querySelector('.notificacion').remove();
   }, 5000);
   
}

function mostrarClima(dato){
    const { name, main:{temp, temp_max, temp_min} } = dato;
    
    const grados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);
    
    const html = `
        <h2>${name}</h2>
        <span>${grados} °C</span>
        <p>Max: ${max} °C</p>
        <p>Min: ${min} °C</p>
    `;
    
    const clima = document.querySelector('.clima__box');
    clima.innerHTML = html;
    clima.classList.add('clima');
    clima.appendChild('clima');
    
    
    const climaAnterior = document.querySelector('.clima');
    if(climaAnterior){
        climaAnterior.remove();
    }
    
}
function kelvinACentigrados(kelvin){
    return parseInt(kelvin - 273.15);
}   