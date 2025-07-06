const $select = document.querySelector('select');
const $input = document.querySelector('.input');
const buscar = document.querySelector('.buscar');
const lista = document.querySelector('#lista');

let datosActules = [];
cambiarJson('peliculas');

function cambiarJson(tipo){
    const archivo = tipo === 'peliculas' ? 'peliculas.json' : 'series.json';

    fetch(archivo)
    .then(res => res.json())
    .then(data => {
        datosActules = data.data;
        console.log(`${tipo} cargadas: `, datosActules);
    })
    .catch(error =>{
        console.error('error al cargar los datos : ', error);
    })
}

//* Evento change  para el boton select
$select.addEventListener(('change'), evento =>{
    const seleccion = evento.target.value.toLowerCase();
    cambiarJson(seleccion);
})

//* Evento para $input
$input.addEventListener('keydown',(evento)=>{
   
    if((evento.key < 65 || evento.key > 90)  && evento.key != 8 && evento.key != 32){
        evento.preventDefault();
    };      
})



//* Evento para buscar
buscar.addEventListener('click', ()=>{
    
    const palabraBuscar = $input.value.toLowerCase();
    if(palabraBuscar == ''){
        alert('Debe ingresar datos en el campo para la busqueda');
    }

    buscarContenido(palabraBuscar);
})

