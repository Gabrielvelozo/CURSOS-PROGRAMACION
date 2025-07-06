const button = document.querySelector('button');
const lista = document.querySelector('#lista');

class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
    informacion(){
        return `${this.nombre} - ${this.peso} KG - Edad: ${this.edad} Años`;
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this.raza = raza;
    }
    informacion(){
        return `Perro: ${super.informacion()} - ${this.raza}`;
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
    informacion(){
       return `Gato: ${super.informacion()} - ${this.sexo}`;
    }
}

class Conejo  extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }
    informacion(){
       return `Conejo: ${super.informacion()} - Color: ${this.color}`;
    }
}


const perro1 = new Perro ('Homero', 5, 4, 'Perro');
const gato1 = new Gato ('Zila', 3, 5, 'Hembra');
const conejo1 = new Conejo ('Bunny', 1, 1, 'Blanco');

const animales = [perro1, gato1, conejo1];

button.addEventListener('click',()=>{
    for(let mascota of animales){
        const item = document.createElement('li');
        item.textContent = mascota.informacion();
        lista.appendChild(item);
    }
})


