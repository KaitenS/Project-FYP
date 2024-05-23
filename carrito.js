let carrito = [];

function agregarAlCarrito(ref, precio, titulo, cantidad) {
    const producto = {
        ref,
        precio,
        titulo,
        cantidad
    };

    carrito.push(producto);
    actualizarCarrito();a
}

function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = '';

    if (carrito.length === 0) {
        const noProductos = document.createElement('li');
        noProductos.className = 'nav-item';
        noProductos.innerHTML = '<a class="nav-link active Navb-G" id="centerv" aria-current="page" href="#">NO HAY PRODUCTOS EN EL CARRO</a>';
        carritoItems.appendChild(noProductos);
        actualizarTotal(0);
        return;
    }

    let precioTotal = 0;

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        li.innerHTML = `
            <div class="d-flex justify-content-between">
                <span>${producto.titulo}</span>
                <span>${producto.precio}$</span>
            </div>
        `;
        carritoItems.appendChild(li);

        precioTotal += producto.precio * producto.cantidad;
    });

    actualizarTotal(precioTotal);
}

function actualizarTotal(precioTotal) {
    const totalElement = document.getElementById('total-productos');
    totalElement.innerText = `${precioTotal}$`;
}

function limpiarCarrito() {
    carrito = [];
    actualizarCarrito();
}
