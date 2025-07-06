// Variables
const lista = document.querySelector("#lista");
const buscarBtn = document.querySelector(".buscar");
const $input = document.querySelector(".input");
const $select = document.querySelector("#busqueda");
let archivoJson = "pelicuas.json";

// Eventos
$select.addEventListener("change", cambiarJson);
$select.addEventListener("cambioAlerta", avisarCambio);
$input.addEventListener("keydown", validarTipado);
buscarBtn.addEventListener('click', buscarContenido);


//Funciones
function cambiarJson() {
  archivoJson = $select.value;
  const eventoNuevo = new CustomEvent("cambioAlerta");
  $select.dispatchEvent(eventoNuevo);
}

function avisarCambio() {
  alert("Motor de busqueda modificado a "+ $select.value);
}

function validarTipado(evento) {
 if((evento.key < 65 || evento.key > 90)  && evento.key != ' ' && evento.key != 8){
  evento.preventDefault();
  }; 
}

function buscarContenido(){
  lista.innerHTML = '';

  fetch(archivoJson)
  .then(res => res.json())
  .then((salida)=>{
    for(let dato of salida.data){
      if(dato.nombre.startsWith($input.value.toUpperCase())){
        const parrafo = document.createElement('p');
        parrafo.id = dato.nombre;
        parrafo.textContent = dato.sinopsis;
        parrafo.style.display = 'none';

        const itemLi = document.createElement('li');
        itemLi.textContent = dato.nombre;
        itemLi.addEventListener('mouseover',()=>{
          parrafo.style.display = 'block';
        })
        itemLi.addEventListener('mouseout',()=>{
          parrafo.style.display = 'none';
        })
        itemLi.appendChild(parrafo);
        lista.appendChild(itemLi);
      }
    }
  })
  .catch((error) =>{
    console.log(error);
  })
}