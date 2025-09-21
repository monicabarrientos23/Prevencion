// Capturamos el formulario
const form = document.getElementById("form-datos");
const tablaResultados = document.getElementById("tabla-resultados").querySelector("tbody");

// Escuchamos el submit del formulario
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Tomamos los valores
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const fecha = document.getElementById("fecha").value;
    const celular = document.getElementById("celular").value;

    // Creamos la fila de resultados
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${nombre}</td>
      <td>${apellido}</td>
      <td>${edad}</td>
      <td>${fecha}</td>
      <td>${celular}</td>
      <td>
        <select>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </td>
    `;

    // Agregamos la fila a la tabla
    tablaResultados.appendChild(fila);

    // Reiniciamos el formulario
    form.reset();
  });
}
