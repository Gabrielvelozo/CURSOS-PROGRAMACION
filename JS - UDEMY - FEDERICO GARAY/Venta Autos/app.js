const lista1 = document.querySelector('.a1');
const lista2 = document.querySelector('.a2');
const lista3 = document.querySelector('.a3');

function Automovil(marca, modelo, color, anio, titular){
     this.marca = marca;
     this.modelo = modelo;
     this.color = color;
     this.anio = anio;
     this.titular = titular;
}

const auto1 = new Automovil('Renault', 'Clio','Negro' ,2011, 'Gabriel');
const auto2 = new Automovil('Peugeot', 208, 'Gris', 2021, 'Brenda');
const auto3 = new Automovil('Toyota', 'Hylux', 'Blanco', 2017, 'Oscar');


Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
};

Automovil.prototype.verAuto = function(){
  return `Marca:  ${this.marca} <br> Modelo:  ${this.modelo} <br> Año:  ${this.anio} <br>Titutar:  ${this.titular}`;
}; 

document.querySelector('.auto1').addEventListener('click',()=>{
    lista1.innerHTML = '';
    const li = document.createElement('li');
    li.innerHTML = auto1.verAuto();
    lista1.appendChild(li);
})
document.querySelector('.auto2').addEventListener('click',()=>{
    lista2.innerHTML = '';
    const li = document.createElement('li');
    li.innerHTML = auto2.verAuto();
    lista2.appendChild(li);
})
document.querySelector('.auto3').addEventListener('click',()=>{
    lista3.innerHTML = '';
    const li = document.createElement('li');
    li.innerHTML = auto3.verAuto();
    lista3.appendChild(li);
})

Automovil.prototype.encender = function(){
    alert(`El automovil esta en marcha`);
};


