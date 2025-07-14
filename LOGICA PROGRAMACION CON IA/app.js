// ! NIVEL FÁCIL
/*
? Pide al usuario dos números y muestra la suma.
let user1 = prompt('Ingrese un numero: ');
 let user2 = prompt('Ingrese un numero: ');
 let resultado = Number(user1) + Number(user2);
 console.log(resultado);
*/

/*
? Verificar par o impar, pide un número y determina si es par o impar.
let user1 = parseInt(prompt('Ingrese un numero: '));

function isPar(dato) {
  if (dato % 2 == 0) {
    console.log('Es par');
  } else {
    console.log('No es par');
  }
}
isPar(user1);
*/

/*
 ? Dados tres números, identifica cuál es el mayor.
 let a, b, c;
 a = 5;
 b = 12;
 c = 12;
 
 let mayor;
 if (a > b && a > c) {
  mayor = a;
} else if (b > a && b > c) {
  mayor = b;
} else {
  mayor = c;
}
console.log(`mayor: ${mayor}`);
*/

/*
? Convierte grados Celsius a Fahrenheit (F = C × 9/5 + 32).
const grados = parseInt(prompt('ingresar los grados: '));
let convertir = (grados * 9) / 5 + 32;
console.log(convertir);
*/

/*
? Pide una palabra y muestra cuántas letras tiene.
let palabra = prompt('Ingresa una palabra: ');
let contarLetras = palabra.length;
console.log(contarLetras);
*/

// ! NIVEL INTERMEDIO

/*
? Calcula el factorial de un número ingresado (ej: 5! = 5 × 4 × 3 × 2 × 1 = 120).
let user = parseInt(prompt('Ingresa un número: '), 10);

let factorial = 1;

for (let i = 1; i <= user; i++) {
  factorial *= i;
  console.log(factorial);
}
console.log(`Factorial: ${factorial}`);
*/

/*
? Determina si una palabra es palindrome (se lee igual al revés, como "reconocer").
let palabra = prompt('Ingresa una palabra, para saber si es palindrome: ');
console.log(palabra);
// let minuscula = palabra.toLocaleLowerCase();
// console.log(minuscula);
let nuevacadena = palabra.toLocaleLowerCase().split('').reverse().join('');
console.log(nuevacadena);

if (palabra.toLocaleLowerCase() === nuevacadena) {
  console.log('ES PALINDROMO');
} else {
  console.log('NO ES PALINDROMO');
}
*/
/*
? Muestra los primeros n números de la secuencia (0, 1, 1, 2, 3, 5, 8...).
const secuencia = [0, 1, 1, 2, 3, 5, 8];

let user = parseInt(prompt('Ingrese cuantos n desea ver....'));
let mostrar = [];

for (let i = 0; i < user; i++) {
  mostrar.push(secuencia[i]);
}
alert(`Numero seleccionados ${user} a mostrar: ${mostrar}`);
*/

/*
? Pide una frase y cuenta cuántas vocales (a, e, i, o, u) tiene.
const user = prompt('Ingrese una frase: ');

function isVocales(palabra) {
  let contador = 0;
  let vocales = 'aeiouAEIOU';
  for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i])) {
      contador++;
    }
  }
  return alert(
    `La cantidad de vocales de la palabra ${palabra} son: ${contador}`
  );
}
isVocales(user);
*/

/* 
? Genera un número aleatorio entre 1 y 100 y permite al usuario adivinarlo con pistas ("mayor" o "menor").
const random = Math.floor(Math.random() * 101);
console.log(`** Maquina: ${random} **`);

let user = parseInt(prompt('Adivina el numero: '));

while (user != random) {
  if (user < random) {
    console.log('ES MENOR');
  } else {
    console.log('ES MAYOR');
  }
  user = parseInt(prompt('Adivina el número: '));
}

console.log(`ADIVINASTE ** Maquina: ${random} **`);
*/
//! PRACTICA CARRITO
//? Ejercicio 1: Crear la lista de productos
const productos = [
  {
    id: 0,
    nombre: 'Camisa',
    precio: 20,
    stock: 10,
  },
  {
    id: 1,
    nombre: 'Jean',
    precio: 12,
    stock: 20,
  },
  {
    id: 2,
    nombre: 'Remera',
    precio: 12,
    stock: 11,
  },
  {
    id: 3,
    nombre: 'Buzo',
    precio: 25,
    stock: 15,
  },
  {
    id: 4,
    nombre: 'Short',
    precio: 8,
    stock: 19,
  },
  {
    id: 5,
    nombre: 'Medias',
    precio: 14,
    stock: 10,
  },
];

//? Ejercicio 2: Mostrar productos en consola
//! forEach
// productos.forEach((art) => {
//   const { id, nombre, precio, stock } = art;
//   console.log(`${id} - ${nombre} - $${precio} `);
// });
//! map
// productos.map((art) => {
//   const { id, nombre, precio, stock } = art;
//   console.log(`${id} - ${nombre} - ${precio}`);
// });

//? Ejercicio 3: Función para buscar un producto por ID
// Crea una función buscarProducto(id) que retorne el producto o null si no existe.

// function buscarProducto(id) {
//   const producto = productos.find((art) => art.id === id);
//   return producto ? console.log(producto) : console.log(null);
// }
// buscarProducto(1);

//? Ejercicio 4: Crear el carrito
// Declara un array vacío carrito que almacenará objetos con { id, nombre, precio, cantidad }.
const carrito = [];

//? Ejercicio 5: Añadir productos al carrito

function agregarAlCarrito(id, cantidad) {
  // Busca el producto x id.
  const producto = productos.find((art) => art.id === id);
  // Si existe, añádelo al carrito (o incrementa la cantidad si ya está).
  if (producto) {
    const productoEnCarrito = carrito.find((item) => item.id === id && item.stock >= cantidad);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad += cantidad;
    } else {
      carrito.push({ ...producto, cantidad });
    }
  } else {
    console.log('Producto no encontrado');
  }
}

agregarAlCarrito(0, 1);

console.table(carrito);

//? Ejercicio 6: Mostrar el carrito en consola
// Imprime cada item del carrito y el total a pagar. Ejemplo:

function imprimirTicket() {
  let imprimir = `    - CARRITO - \n`;
  let total = 0;
  carrito.forEach((producto) => {
    const { cantidad, nombre, precio } = producto;
    imprimir += ` ${cantidad} - X ${nombre}: $ ${precio * cantidad} \n`;
    total += precio * cantidad;
  });
  imprimir += `\n     TOTAL : $ ${total}`;
  console.table(imprimir);
}
imprimirTicket();

//? Ejercicio 7: Eliminar Productos

function eliminarDelCarrito(id) {
  carrito.splice(id, 1);
  return carrito;
}
eliminarDelCarrito();

//? Ejercicio 8: Descuentos
