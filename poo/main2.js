class Persona {
  fechadenacimiento;
  nombre;
  apellido;
  cedula;
  edad;
  constructor(nombre,apellido,fechadenacimiento,cedula,edad) {
    this.nombre = nombre
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
const fechaactual = new Date()
const datos = [];

formulario.addEventListener("submit",form)

function form(event){
    event.preventDefault()
}
function añadir() {
    let fechapersona = new Date(fechadenacimiento.value)
    let edad = fechaactual.getFullYear() - fechapersona.getFullYear()
    let persona = new Persona(nombre.value,apellido.value,cedula.value,fechadenacimiento.value,edad)
    datos.push(persona)
    nombre.value = ""
    apellido.value = ""
    cedula.value = ""
    fechadenacimiento.value = ""
    console.log(datos)
  }
btn.addEventListener("click", añadir);
