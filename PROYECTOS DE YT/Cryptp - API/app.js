const usdBTC = document.querySelector('#btc__usd');
const arsBTC = document.querySelector('#btc__ars');

document.querySelector('.btn').addEventListener('click',()=>{
    fetch('https://min-api.cryptocompare.com/data/price?fsym=HEX&tsyms=USD,ARS')
    .then(res => res.json())
    .then(dato=> {
        console.log(dato);
        usdBTC.textContent = '$ ' + dato.USD + ' USD';
        arsBTC.textContent = '$ ' + dato.ARS + ' ARS' ;
})
})

