const displayInput = document.querySelector(".display");
const botonesInput = document.querySelectorAll(".btn");

botonesInput.forEach((boton) => {
  boton.addEventListener("click", () => {
    const presionado = boton.textContent;
    
    if (boton.id === 'c'){
      displayInput.textContent = '0';
      return;
    }

    if (boton.id === 'borrar'){
      if (displayInput.textContent.length == 1 || displayInput.textContent == 'error') {
        displayInput.textContent = '0';
      } else {
        displayInput.textContent = displayInput.textContent.slice(0,-1);
      }
      return;
    }

    if (boton.id === 'igual'){
      try {
        displayInput.textContent = eval(displayInput.textContent);
      } catch (error) {
        displayInput.textContent = 'error';
      }
      return;
    }

    if(displayInput.textContent ==='0' || displayInput.textContent==='error'){
      displayInput.textContent = presionado;
    } else {
      displayInput.textContent += presionado;
    }
    return;
  });
});
