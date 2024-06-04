const insertarInformacion = document.getElementById("mostrar-producto");

const productoHTML = localStorage.getItem('nodosProducto');
insertarInformacion.innerHTML = productoHTML;