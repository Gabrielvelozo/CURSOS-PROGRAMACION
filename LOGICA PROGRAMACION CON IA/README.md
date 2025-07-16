## PRACTICANDO CARRITO DE COMPRAS.

#### Con los tips mencionados por [Deepseek](https://www.deepseek.com/)

Nivel 1: Estructura básica y funcionalidades iniciales
Objetivo: Manipular arrays y objetos para almacenar productos y mostrarlos.

Ejercicio 1: Crear la lista de productos
Define un array de objetos productos, donde cada objeto tenga:

javascript
{ id: 1, nombre: "Camisa", precio: 20, stock: 10 }
Tip: Usa console.log para imprimir la lista.

Ejercicio 2: Mostrar productos en consola
Recorre el array con forEach o map y muestra cada producto en formato:
"1 - Camisa - $20".

Ejercicio 3: Función para buscar un producto por ID
Crea una función buscarProducto(id) que retorne el producto o null si no existe.

Tip: Usa el método find.

Nivel 2: Carrito y operaciones básicas
Objetivo: Gestionar un carrito usando funciones.

Ejercicio 4: Crear el carrito
Declara un array vacío carrito que almacenará objetos con { id, nombre, precio, cantidad }.

Ejercicio 5: Añadir productos al carrito
Función agregarAlCarrito(id, cantidad):

Busca el producto por ID.

Si existe, añádelo al carrito (o incrementa la cantidad si ya está).

Tip: Usa some o findIndex para verificar si el producto ya está en el carrito.

Ejercicio 6: Mostrar el carrito en consola
Imprime cada item del carrito y el total a pagar. Ejemplo:

text
Carrito:  
2 x Camisa - $40  
Total: $40
Nivel 3: Funcionalidades avanzadas
Objetivo: Implementar lógica más compleja.

Ejercicio 7: Eliminar productos del carrito
Función eliminarDelCarrito(id): Elimina un producto por ID.

Tip: Filtra el array con filter.

Ejercicio 8: Calcular descuentos
Si el total supera $100, aplica un 10% de descuento.

Tip: Usa una condición en la función que calcula el total.

Ejercicio 9: Validar stock al agregar
Antes de añadir al carrito, verifica que haya suficiente stock.

Tip: Compara la cantidad solicitada con producto.stock.

Nivel 4: Persistencia y optimización
Objetivo: Mejorar la experiencia de usuario.

Ejercicio 10: Guardar carrito en localStorage
Al recargar la página, el carrito debe mantenerse.

Tip: Usa localStorage.setItem() y JSON.stringify().

Ejercicio 11: Vaciar el carrito
Función vaciarCarrito() que reinicie el array y actualice el localStorage.
