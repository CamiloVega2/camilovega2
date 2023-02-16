const basededatos = document.getElementById("basededatos");
const btn = document.getElementById("submit");

function subirdatos() {
  const empleados = {
    nombre,
    edad,
    apellido,
    salario,
    fechadenacimiento,
  };
  empleados.nombre = document.getElementById("nombre").value;
  empleados.edad = document.getElementById("edad").value;
  empleados.apellido = document.getElementById("apellido").value;
  empleados.salario = document.getElementById("salario").value;
  empleados.fechadenacimiento =
    document.getElementById("fechadenacimiento").value;
  basededatos.innerHTML += `<div class="datospersonales">
 <img src="../iconos/images.png" alt="imagen">
 <p>Nombre:${empleados.nombre}</p>
 <p>Apellidos:${empleados.apellido}</p>
 <p>Salario:${empleados.salario}</p>
 </div>`;
document.getElementById('formulario').reset()
}
btn.addEventListener("click", subirdatos);
