const arrayNotas = [7.26,8.42,4,1,7.7];
const $notas = document.querySelector('.notas');

function listaNotas(){
    for(const nota of arrayNotas){
        const item = document.createElement('li');
        item.textContent = nota;
        $notas.appendChild(item);
    }
}

function calcularPromedio(){
    let acumular =0;
    for(const nota of arrayNotas){
        acumular += nota;
    }
    const promedio = acumular / arrayNotas.length;
    document.querySelector('#resultado').textContent = promedio;
}

function buscarMejorNota(){
    let mejor = 0;
    for (const nota of arrayNotas){
        if(nota > mejor){
            mejor = nota;
        }
    }
    console.log(mejor);
    
    document.querySelector('#resultado').textContent = mejor;
}


function buscarAplazo(){
    let aplazo = arrayNotas[0];
    let i = 1;
    
    do {
        if(arrayNotas[i]<arrayNotas[0]){
            aplazo = arrayNotas[i];
        }
        i++;
    } while(i<arrayNotas.length);
    document.querySelector('#resultado').textContent = aplazo;
}


document.querySelector('.lista').addEventListener('click', ()=>{
    listaNotas()
})

document.querySelector('.promedio').addEventListener('click',()=>{
    calcularPromedio();
})
document.querySelector('.mejor').addEventListener('click',()=>{
    buscarMejorNota();
})
document.querySelector('.aplazo').addEventListener('click',()=>{
    buscarAplazo();
})