const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido")
const edad = document.getElementById("edad")
const save = document.getElementById("save")
const edad1 = document.getElementById("edad1")
const apellido1 = document.getElementById("apellido1")
const nombre1 = document.getElementById("nombre1")


save.addEventListener("click", () => {
  nombre1.innerText = `${nombre.value}`
  apellido1.innerText = `${apellido.value}`
  edad1.innerText = `${edad.value}`
});
