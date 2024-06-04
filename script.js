const vistaCompletaPromocion = () => {
    const productoAMostrar = document.querySelectorAll(".promociones");

    productoAMostrar.forEach(productoPromocion => {
        productoPromocion.addEventListener("click", () => {
            const productoHTML = productoPromocion.innerHTML; // Convertimos los nodos a HTML
            localStorage.setItem('nodosProducto', productoHTML);
            window.location.href = "mostrarProducto.html";
        })
    });
}

vistaCompletaPromocion();