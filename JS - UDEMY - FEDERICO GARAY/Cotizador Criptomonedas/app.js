const theme = document.querySelector('.btn');
const change1Hs = document.querySelector('.cambio1');
const change24Hs = document.querySelector('.cambio24');
const url = 'https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&fsyms=HEX,PLS,PLSX';


// Eventos
theme.addEventListener('click', cambiarTema);

fetch(url)
.then(respuesta => respuesta.json())
.then(datos => actualizarChange())


function actualizarChange(){
        const cripto = datos.DISPLAY;
    const pls= cripto.PLS.USD;
    const plsx = cripto.PLSX.USD;
    const hex = cripto.HEX.USD;

    document.querySelector('.pls .price').textContent = pls.PRICE;
    document.querySelector('.plsx .price').textContent = plsx.PRICE;
    document.querySelector('.hex .price').textContent = hex.PRICE;

    document.querySelector('.pls .coin__title').textContent = pls.FROMSYMBOL;
    document.querySelector('.plsx .coin__title').textContent = plsx.FROMSYMBOL;
    document.querySelector('.hex .coin__title').textContent = hex.FROMSYMBOL;
    
    change24Hs.addEventListener('click',()=>{
        document.querySelector('.pls .change').textContent = pls.CHANGEPCTDAY + '%';
        document.querySelector('.plsx .change').textContent = plsx.CHANGEPCTDAY + '%';
        document.querySelector('.hex .change').textContent = hex.CHANGEPCTDAY + '%';
    })
    
    change1Hs.addEventListener('click',()=>{
        document.querySelector('.pls .change').textContent = pls.CHANGEPCTHOUR + '%';
        document.querySelector('.plsx .change').textContent = plsx.CHANGEPCTHOUR + '%';
        document.querySelector('.hex .change').textContent = hex.CHANGEPCTHOUR + '%';
    })
    
    if(hex.CHANGEPCTDAY > 0){
        document.querySelector('.hex .change').classList.add('green');
        document.querySelector('.hex .change').classList.remove('red');   
    }else{
        document.querySelector('.hex .change').classList.add('red');
        document.querySelector('.hex .change').classList.remove('green');
    }

    if(pls.CHANGEPCTDAY > 0){
        document.querySelector('.pls .change').classList.add('green');
        document.querySelector('.pls .change').classList.remove('red');   
    }else{
        document.querySelector('.pls .change').classList.add('red');
        document.querySelector('.pls .change').classList.remove('green');
    }

    if(plsx.CHANGEPCTDAY > 0){
        document.querySelector('.plsx .change').classList.add('green');
        document.querySelector('.plsx .change').classList.remove('red');   
    }else{
        document.querySelector('.plsx .change').classList.add('red');
        document.querySelector('.plsx .change').classList.remove('green');
    }

}
    



// Funciones
function cambiarTema(){
    document.body.classList.toggle('dark');
}