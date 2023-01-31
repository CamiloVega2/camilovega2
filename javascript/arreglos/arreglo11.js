/*Se desea llenar una lista con 20 animales, y le han pedido a usted que sabe
 programar que les ayude para solicitar esos 20 nombres,
 mostrarlos ordenados alfabéticamente, Luego solicitar al usuario un número entre el 1 y el 20 y que le
 permita ver cuales animales se encuentra entre el número dicho 
y el final de la lista. También cree una opción que permita al usuario escribir el 
nombre de un animal y verificar si ese animal se encuentra en la lista*/
let animales = [];
let animal = "";
let menu = 1;
let opciónMenu = 0;
let verificarNombre = "";
let ubicacionAnimales = 0;
for( let i = 0; i < 3 ; i++){
  opciónMenu = parseInt(
    prompt(
      "Ingrese la accion que desea realizar: \n 1. Registrar un animal" +
        "\n 2. Ver que numero tiene cada animal" +
        "\n 3. verificar por nombre si se encuentra un animal registrado"
    )
  );
  switch (opciónMenu) {
    case 1:
      animal = prompt("Ingrese el nombre del animal");
      if (animales.includes(animal)) {
        alert("Este animal ya esta registrado");
      } else {
        animales.push(animal);
        break;
      }
    case 2:
      ubicacionAnimales = parseInt(
        prompt(
          "Ingrese un numero de 1 a 20 para saber que animal esta en esa posicion"
        )
      );
      if (isNaN(ubicacionAnimales)) {
        alert("por favor ingrese un numero");
      } else {
        console.log(animales[ubicacionAnimales]);
      }
      break;
    case 3:
      verificarNombre = prompt("Ingrese el nombre que desea verificar");
      if (animales.includes(verificarNombre)) {
        alert("Este animal se encuentra en la lista");
      } else {
        alert("Este animal aun no esta registrado");
      }
    default:
      alert("Por favor ingrese un numero de la lista");
  }
}