const $btns = document.querySelectorAll('.btn');
const clear = document.querySelector('#clear');

$btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const display =  document.querySelector('.display');
        
        display.textContent += btn.textContent;

        if( btn.textContent == 'C'){
            display.textContent = '';
        }
        if( btn.textContent == '='){
            display.textContent = eval(display.textContent);
        }
      

    });
});


