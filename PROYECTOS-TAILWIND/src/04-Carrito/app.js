const shop = document.getElementById('shop');
carrito.forEach((art) => {
  const { img, titulo, poder, id } = art;
  const card = document.createElement('section');
  card.classList =
    'text-white text-center border border-white border-solid p-4 rounded-2xl mb-4 w-80 m-auto';
  card.innerHTML = `
  <img class="w-[280px]  aspect-[2/3]  bg-cover" src="${img}" alt="" />
  <h2 class="font-bold my-2.5">${titulo}</h2>
  <p>Poder: <span class="text-orange-600 font-bold mb-4">${poder}</span></p>
  <a class="inline-block bg-orange-700 rounded-full px-5 py-1.5 my-3 hover:bg-orange-700/70 transition duration-300 ease-in-out cursor-pointer">Agregar al carrito</a>
  `;
  shop.appendChild(card);
});
