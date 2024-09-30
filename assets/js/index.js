// Cargar datos de productos desde el archivo JSON
fetch('data/taller.json')
  .then(response => response.json())
  .then(data => {
    const productos = data.computadores;
    const tablaComputadores = document.getElementById('tabla_computadores');

    // Crear filas de la tabla sin imágenes
    function crearFilaTabla(producto) {
      return `
        <tr>
          <td>${producto.nombre}</td>
          <td>${producto.descripcion}</td>
          <td>$${producto.precio}</td>
        </tr>
      `;
    }

    let html = '';
    productos.forEach(producto => {
      html += crearFilaTabla(producto);
    });

    tablaComputadores.innerHTML = html;
  })
  .catch(error => console.error('Error al cargar el JSON:', error));
