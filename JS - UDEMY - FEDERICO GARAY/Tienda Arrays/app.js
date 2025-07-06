const $contenido = document.querySelector(".container");
const $resultado = document.querySelector('#resultado');



function crearTiendas(cantidad) {
  
  for (x = 1; x <= cantidad; x++) {

    const $input = document.createElement("input");

    $input.setAttribute('type','number');
    $input.setAttribute("placeholder", `Tienda ${x}`);
    $input.setAttribute('id',`tienda${x}`);
    $input.setAttribute('class','tienda');
    $contenido.appendChild($input);

  }
  
  const sumarVentas = sumarTiendas(cantidad);
}

function sumarTiendas(cantidad) {

  const $boton = document.querySelector('.btn');

  $boton.addEventListener('click', () => {
    let total = 0;


    for (x = 1; x <= cantidad; x++) {
      let tienda = Number(document.querySelector(`#tienda${x}`).value);  
      total += tienda;
     
    }
    $resultado.textContent = `Total ventas de las tiendas $ ${total} `;
  });
}


