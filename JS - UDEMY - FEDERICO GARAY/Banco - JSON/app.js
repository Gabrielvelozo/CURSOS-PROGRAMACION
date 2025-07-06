const nombre = document.querySelector('.nombre');
const cuenta = document.querySelector('.cuenta');
const usd = document.querySelector('.usd');
const ars = document.querySelector('.ars');
const cbu = document.querySelector('.cbu');

fetch('banco.json')
.then(res => res.json())
.then((datosCuenta)=>{
    nombre.textContent = datosCuenta.titular;
    cuenta.textContent = datosCuenta.nro_cuenta;
    usd.textContent = datosCuenta.saldo[0].monto;
    ars.textContent = datosCuenta.saldo[1].monto;
    cbu.textContent = datosCuenta.cbu;
})
.catch((error)=>{
    alert(error)
});