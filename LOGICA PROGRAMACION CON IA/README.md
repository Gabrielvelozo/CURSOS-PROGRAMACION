###### Practicando Logica

> Nivel Fácil

```
// Pide al usuario dos números y muestra la suma.
let user1 = prompt('Ingrese un numero: ');
 let user2 = prompt('Ingrese un numero: ');
 let resultado = Number(user1) + Number(user2);
 console.log(resultado);

// Verificar par o impar, pide un número y determina si es par o impar.
let user1 = parseInt(prompt('Ingrese un numero: '));

function isPar(dato) {
  if (dato % 2 == 0) {
    console.log('Es par');
  } else {
    console.log('No es par');
  }
}
isPar(user1);

// Dados tres números, identifica cuál es el mayor.
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

// Convierte grados Celsius a Fahrenheit (F = C × 9/5 + 32).
const grados = parseInt(prompt('ingresar los grados: '));
let convertir = (grados * 9) / 5 + 32;
console.log(convertir);

// Pide una palabra y muestra cuántas letras tiene.
let palabra = prompt('Ingresa una palabra: ');
let contarLetras = palabra.length;
console.log(contarLetras);
```

> Nivel intermedio

```

// Calcula el factorial de un número ingresado (ej: 5! = 5 × 4 × 3 × 2 × 1 = 120).
let user = parseInt(prompt('Ingresa un número: '), 10);

let factorial = 1;

for (let i = 1; i <= user; i++) {
  factorial *= i;
  console.log(factorial);
}
console.log(`Factorial: ${factorial}`);

// Determina si una palabra es palíndromo (se lee igual al revés, como "reconocer").
let user = prompt('¿Es pálindromo?: ');


// Muestra los primeros n números de la secuencia (0, 1, 1, 2, 3, 5, 8...).
const secuencia = [0, 1, 1, 2, 3, 5, 8];

let user = parseInt(prompt('Ingrese cuantos n desea ver....'));
let mostrar = [];

for (let i = 0; i < user; i++) {
  mostrar.push(secuencia[i]);
}
alert(`Numero seleccionados ${user} a mostrar: ${mostrar}`);

// Pide una frase y cuenta cuántas vocales (a, e, i, o, u) tiene.
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


// Genera un número aleatorio entre 1 y 100 y permite al usuario adivinarlo con pistas ("mayor" o "menor").

const random = Math.floor(Math.random() * 101);
console.log(`** Maquinda: ${random} **`);

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

```
