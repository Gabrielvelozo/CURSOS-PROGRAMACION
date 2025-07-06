let empleados = [];
const btnMostrar = document.querySelector('.mostrar');
const btnCargar = document.querySelector('.cargar');
const listaEmpleado = document.querySelector('.empleado__descripcion');

function NuevoEmpleado($legajo, $nombre, $apellido, $fecha, $cargo){
   this.legajo = $legajo;
   this.nombre = $nombre;
   this.apellido = $apellido;
   this.fecha = $fecha;
   this.cargo = $cargo;
}

btnCargar.addEventListener('click', ()=>{

  let $legajo = document.querySelector('#legajo').value;
  let $nombre = document.querySelector('#nombre').value;
  let $apellido = document.querySelector('#apellido').value;
  let $fecha = document.querySelector('#fecha').value;
  let $cargo = document.querySelector('#cargo').value;


  const empleado = new NuevoEmpleado($legajo, $nombre, $apellido, $fecha, $cargo);

  empleados.push(empleado);
  
  document.querySelector('#resultado').textContent = 'Nuevo empleado ingresado al sistema';

  resetearFormulario();
})


btnMostrar.addEventListener('click', ()=>{

  for (let elemento of empleados){
    for (let detalle in elemento){
      let item = document.createElement('li');
      item.textContent = `${detalle}: ${elemento[detalle]}`;
      listaEmpleado.appendChild(item);
    }
    item = document.createElement('hr');
    listaEmpleado.appendChild(item);
  }
  
})

function resetearFormulario(){
  let $legajo = document.querySelector('#legajo').value = '';
  let $nombre = document.querySelector('#nombre').value = '';
  let $apellido = document.querySelector('#apellido').value = '';
  let $fecha = document.querySelector('#fecha').value = '';
  let $cargo = document.querySelector('#cargo').value = '';
}