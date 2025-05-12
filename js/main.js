document.addEventListener("DOMContentLoaded", () => {
  fetch("data/productos.json")
    .then(response => response.json())
    .then(data => mostrarProductos(data))
    .catch(error => console.error("Error al cargar los productos:", error));
});

function mostrarProductos(productos) {
  const contenedor = 
    document.getElementById("productos") || 
    document.getElementById("catalogo");

  if (!contenedor) {
    console.warn("No se encontró ningún contenedor para productos.");
    return;
  }

  productos.forEach(prod => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("producto");

    tarjeta.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p class="precio">$${prod.precio.toFixed(2)}</p>
      <button class="btn-agregar" onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
    `;

    contenedor.appendChild(tarjeta);
  });
}

function agregarAlCarrito(idProducto) {
  alert(`Producto con ID ${idProducto} agregado al carrito (función en desarrollo).`);
}
