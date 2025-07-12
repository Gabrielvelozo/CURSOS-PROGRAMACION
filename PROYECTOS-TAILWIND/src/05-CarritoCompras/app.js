// Variables
const btnFinish = document.querySelector('.finishcard');
const btnItems = document.querySelectorAll('.add-cart');
const carrito = document.querySelector('.carrito');
const shopContainer = document.querySelector('.shop-container');

//Eventos
btnItems.forEach(item => {
  item.addEventListener('click', agregarCarrito);
})
btnFinish.addEventListener('click', resetearCarrito);


// Funciones

// Captura los datos al clickear
function agregarCarrito(event){
  const button = event.target;
  const itemButton = button.closest('.item');
  const itemTitle = itemButton.querySelector('.title').textContent;
  const itemPrice = itemButton.querySelector('.price').textContent;
  const itemImg = itemButton.querySelector('.img').src;
  
  agregarItemCarrito(itemImg, itemTitle, itemPrice);
};

// Genera el contenedor del Carrito
const agregarItemCarrito = (imagen, titulo, precio) => {
  // validar si hay un item dentro del carrito, si es repetido sumar cantidad y si no existe crearlo
  const validar = carrito.getElementsByClassName('shop-title');
  for (let i = 0; i < validar.length; i++) {
    if(validar[i].innerText === titulo)    {
      const validarCantidad = validar[i].parentElement.querySelector('.cantidad')
      validarCantidad.value ++;
      updateShopPrice();
      return     
    }
  }
  
  const cuerpo = document.createElement('div');
  const contenidoCarrito = `
  <div class="item flex justify-around my-2 items-center border-b pb-2  card-shop">
  <img class=" w-[30px] hover:scale-110 " src="${imagen}">
  <h3 class="title shop-title">${titulo}</h3>
  <p class="text-gray-500 font-bold price ">${precio}</p>
  <input type=number class="bg-gray-200 rounded-xs p-1 outline-0 w-[40px] cantidad" value=1  >
  <a href="#" class="bg-red-500 w-[25px] h-[25px] rounded-full flex items-center justify-center font-bold text-2xl text-white hover:cursor-pointer   
  hover:scale-105 transition-all duration-300 ease-in-out clear">&times</a>
  </div>
  `
  cuerpo.innerHTML = contenidoCarrito;
  
  carrito.appendChild(cuerpo);
  
  cuerpo.querySelector('.clear').addEventListener('click',eliminarItem);
  cuerpo.querySelector('.cantidad').addEventListener('change', leerCambios);
  updateShopPrice();
};

// Sumar el valor total de los items
const updateShopPrice = () => {
  let total = 0;
  const itemShop = document.querySelectorAll('.card-shop');
  itemShop.forEach( precio => {
    const precioShop = Number(precio.querySelector('.price').textContent.replace('$', ''));
    const cantidadItem = Number(precio.querySelector('.cantidad').value);
    total = total + precioShop *cantidadItem;
  });
  document.querySelector('.total').textContent = `Total : ${total.toFixed(2)} $`;
};

// Eliminar un item del carrito
const eliminarItem = (event) => {
  const clearItem = event.target;
  clearItem.closest('.card-shop').remove(); 
  updateShopPrice();
};

// Actualiza la cantidad de item
const leerCambios = (event) => {
  const $input = event.target;
  $input.value < 1 ? $input.value = 1 : null;
  updateShopPrice();
};

// Resetear carrito al finalizar la compra
function resetearCarrito(){
  // carrito.closest('.carrito').remove();  //! Esta opcion no te permite volver a seleccionar luego de finalizar la compra.
  carrito.innerHTML = '';
  updateShopPrice();
  alert('Gracias por tu compra, el pedido esta en preparacion!')
}