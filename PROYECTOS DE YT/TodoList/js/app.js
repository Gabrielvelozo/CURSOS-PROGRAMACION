const elementoFecha = document.querySelector("#fecha");
const elementoLista = document.querySelector("#lista");
const elementoInput = document.querySelector("#input");
const botonEnter = document.querySelector("#enter");
const check = 'fa-check-circle';
const unCheck = 'fa-circle';
const lineThrough = 'line-through';
let id;
let listaTareas;





//Fecha actual.
const fechaActual =new Date;
elementoFecha.innerHTML =fechaActual.toLocaleDateString('es-AR',{weekday:'long',month:'long',day:'numeric'});

//Funcion Agregar tarea
function agregarTarea(tarea,id,realizado,eliminado){
 
 if(eliminado){return}

 const validarRealizado = realizado ?check :unCheck;   // Si realizado, es TRUE activa (check) - si es FALSE activa (uncheck) 
 const lineaTachada = realizado ?lineThrough :'';

 const elemento = `<li class="tarea-lista" id="elemento">
                    <i class="far ${validarRealizado} co tarea-icon" data="realizado" id="${id}"></i>
                    <p class="tarea-text ${lineaTachada}">${tarea}</p>
                    <i class="fas fa-trash de tarea-icon" data="eliminado" id="${id}"></i>
                    </li>`
 elementoLista.insertAdjacentHTML("beforeend",elemento)
}

function tareaRealizada(element){
    element.classList.toggle(check);
    element.classList.toggle(unCheck);
    element.parentNode.querySelector('.tarea-text').classList.toggle(lineThrough);
    listaTareas[element.id].realizado = listaTareas[element.id].realizado ?false :true ;
    
}

function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    listaTareas[element.id].eliminado = true;
}


botonEnter.addEventListener("click",( )=> {
    const tarea = elementoInput.value;
    if (tarea) {
        agregarTarea(tarea,id,false,false);
        listaTareas.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado: false
        })
    }
    localStorage.setItem('TODO',JSON.stringify(listaTareas))
    elementoInput.value = "";
    id++;
})

document.addEventListener('keyup',function(event){
    if(event.key == 'Enter'){
        const tarea = elementoInput.value;
        if(tarea){
            agregarTarea(tarea,id,false,false);
            listaTareas.push({
                nombre: tarea,
                id: id,
                realizado: false,
                eliminado: false
            })
        }
    localStorage.setItem('TODO',JSON.stringify(listaTareas))
    elementoInput.value ='';
    id++;
    console.log(listaTareas);
    
    }
})

elementoLista.addEventListener('click',function(event){
    const element = event.target;
    const elementData = element.attributes.data.value;
    if (elementData==='realizado'){
        tareaRealizada(element);
    }
    else if (elementData==='eliminado'){
        tareaEliminada(element);
    }
    localStorage.setItem('TODO',JSON.stringify(listaTareas))
})

// Local Storage get item

let dataStorage = localStorage.getItem('TODO');
if(dataStorage){
    listaTareas = JSON.parse(dataStorage);
    id = listaTareas.length;
    cargarLista(listaTareas);
} else {
    listaTareas = [];
    id = 0;
}

function cargarLista(valor){
     valor.forEach(function(i){
        agregarTarea(i.nombre,i.id,i.realizado,i.eliminado);
     })
}