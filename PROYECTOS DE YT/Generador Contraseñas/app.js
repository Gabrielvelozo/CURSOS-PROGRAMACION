const caracteres = '0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ$.-%{}[]&/()!abcdefghijklmnñopqrstuvwxyz';
//console.log(caracteres.length); //77

const passwordInput = document.querySelector('#password');
const button = document.querySelector('.btn');

function generarContraseña(){
    let contraseña = '';
    for(let i = 0; i < 15; i++ ){
        let random = Math.floor(caracteres.length * Math.random());
        contraseña += caracteres[random];
        //console.log(contraseña);
    }
    passwordInput.value = contraseña;   
    setTimeout( () => {
        passwordInput.value = '';
    },3500);
}
function copiarContraseña(){
    const contraseñaInput = passwordInput;
    contraseñaInput.select();
    navigator.clipboard.writeText(contraseñaInput.value);
}

button.addEventListener('click',generarContraseña);