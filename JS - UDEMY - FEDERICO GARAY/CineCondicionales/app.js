const $edad = document.querySelector('#edad');
const buttonsGenero = document.querySelectorAll('.btn');
const $mensaje = document.querySelector('#mensaje');

buttonsGenero.forEach(genero =>{
    genero.addEventListener('click', (e)=>{
        
        // if($edad.value <13 && genero.className == 'btn Comedia'){
        //    $mensaje.textContent = 'Los Minios II';
        // }

        // Switch
        switch ($edad.value <=13 && genero.className) {
            case 'btn Infantil': $mensaje.textContent = 'Los Minios';
                break;
            case 'btn SuperHeroe': $mensaje.textContent = 'Spiderman';
                break;
            case 'btn Accion': $mensaje.textContent = 'Fast and Furios';
                break;
            case 'btn Aventura': $mensaje.textContent = 'Harry potter';
                break;
        }

        switch (($edad.value <16 && $edad.value >13)  && genero.className) {
            case 'btn Infantil': $mensaje.textContent = 'blanca Nieves';
                break;
            case 'btn SuperHeroe': $mensaje.textContent = 'Los 4 Fantasticos';
                break;
            case 'btn Accion': $mensaje.textContent = 'El sinsajo';
                break;
            case 'btn Aventura': $mensaje.textContent = 'Narnia';
                break;
        }
        switch ($edad.value >=16 && genero.className) {
            case 'btn Infantil': $mensaje.textContent = 'Madagascar';
                break;
            case 'btn SuperHeroe': $mensaje.textContent = 'SuperMan';
                break;
            case 'btn Accion': $mensaje.textContent = 'Apolo 13';
                break;
            case 'btn Aventura': $mensaje.textContent = 'Thor';
                break;
        }
    })
})
