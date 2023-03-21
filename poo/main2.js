class Persona {
  fechadenacimiento;
  nombre;
  apellido;
  cedula;
  edad;
  constructor(nombre, apellido, cedula, fechadenacimiento, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cedula = cedula;
    this.fechadenacimiento = fechadenacimiento;
  }
}
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const fechadenacimiento = document.getElementById("fechadenaciemiento");
const cedula = document.getElementById("cedula");
const btn = document.getElementById("btn");
const formulario = document.getElementById("formulario");
const fechaactual = new Date();
const datos = [];
const body = document.getElementById("body");
let cont = 0;
const buscar = document.getElementById("buscar");
const datosbuscados = document.getElementById("datosbuscados");
const alerta = document.getElementById("alert");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
});

function añadir() {
  let fechapersona = new Date(fechadenacimiento.value);
  let fechapersona1 = fechapersona.getDate() + 1;
  let fechapersona2 = fechapersona.getMonth();
  let fechaactual1 = fechaactual.getDate();
  let fechaactual2 = fechaactual.getMonth();
  let edad = fechaactual.getFullYear() - fechapersona.getFullYear();
  let persona = new Persona(
    nombre.value,
    apellido.value,
    cedula.value,
    fechadenacimiento.value,
    edad
  );
  if (
    nombre.value != "" &&
    apellido.value != "" &&
    fechadenacimiento.value != "" &&
    cedula.value != ""
  ) {
    datos.push(persona);
    let cajadenombres = document.getElementById("cajanombres");
    let cajafechas = document.getElementById("cajafechas");
    cajadenombres.innerHTML += `<p>${nombre.value.toUpperCase()} ${apellido.value.toUpperCase()}</p>`;
    if (fechapersona1 == fechaactual1 && fechaactual2 == fechapersona2) {
      cajafechas.innerHTML += `<p>SI</p>`;
    } else {
      cajafechas.innerHTML += `<p>NO</p>`;
    }
    localStorage.setItem(`${datos[cont].cedula}`, `${datos[cont].cedula}`);
    cont += 1;
    nombre.value = "";
    apellido.value = "";
    cedula.value = "";
    fechadenacimiento.value = "";
  }
}

function search() {
  if (localStorage.getItem(`${datosbuscados.value}`) == datosbuscados.value) {
    window.open("personas.html", "_self");
  } else {
    alerta.innerText = `Este usuario no esta registrado`;
  }
}
buscar.addEventListener("click", search);
btn.addEventListener("click", añadir);
