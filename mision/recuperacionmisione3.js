let ciclo = 1;
let ciclo2 = 1;
let nota1 = 0;
let nombre1 = 0;
let mayorMision1 = [];
let menu = 0;
let cantidadTalentos = 0;
let talentos = [];
let datosTalentos = {
  nombre: "",
  codigo: 0,
  mision1: 0,
  mision2: 0,
  mision3: 0,
  mision4: 0,
  promedio: 0,
};
let mision1 = 0;
let mision2 = 0;
let mision3 = 0;
let mision4 = 0;
while (ciclo > 0) {
  menu = parseInt(
    prompt(
      "Ingrese la accion que desea realizar:" +
        "\n 1. Registrar cantidad de talentos" +
        "\n 2. Registrar datos de los talentos" +
        "\n 3. Registrar nota de Mision 1" +
        "\n 4. Registrar nota de Mision 2" +
        "\n 5. Registrar nota de Mision 3" +
        "\n 6. Registrar prueba final" +
        "\n 7. Mostrar nombre y nota del talento con la mejor nota en la Mision 1" +
        "\n 8. Mostrar nombre y nota del talento con la mejor nota en la Mision 2" +
        "\n 9. Mostrar nombre y nota del talento con la mejor nota en la Mision 3" +
        "\n 10. Mostrar el nombre y nota de cada talento" +
        "\n 11. Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3 y prueba final" +
        "\n 12. Nombre de los talentos que desarrollaron el ejercicio" +
        "\n 13. Salir"
    )
  );
  if (isNaN(menu) || menu < 0 || menu > 13) {
    alert("Por favor Ingrese un numero valido");
  }
  while (menu > 0 && menu < 14) {
    switch (menu) {
      case 1:
        do {
          cantidadTalentos = parseInt(
            prompt("Ingrese la cantidad de talentos que va a registrar")
          );
          if (cantidadTalentos < 0 || isNaN(cantidadTalentos)) {
            alert("Por favor Ingrese un numero valido");
          }
        } while (
          cantidadTalentos < 0 ||
          cantidadTalentos > cantidadTalentos ||
          isNaN(cantidadTalentos)
        );
        {
          menu = 0;
          break;
        }
      case 2:
        if (cantidadTalentos === 0) {
          alert("Debe primero registrar la cantidad de talentos");
          menu = 0;
          break;
        }
        for (let i = 0; i < cantidadTalentos; i++) {
          while (cantidadTalentos > 0) {
            datosTalentos.nombre = prompt("Ingrese el nombre del talento");
            if (!isNaN(datosTalentos.nombre)) {
              alert("Por favor ingrese un nombre valido");
            }
            while (isNaN(datosTalentos.nombre)) {
              datosTalentos.codigo = parseInt(
                prompt("Ingrese el codigo del talento")
              );
              if (isNaN(datosTalentos.codigo) || datosTalentos.codigo < 0) {
                alert("Por favor ingrese un codigo que sea valido");
              } else {
                talentos.push(datosTalentos);
                datosTalentos = {};
                break;
              }
            }
            break;
          }
        }
        menu = 0;
        break;
      case 3:
        if (cantidadTalentos === 0) {
          alert("Debe primero registrar la cantidad de talentos");
          menu = 0;
          break;
        }
        for (let j = 0; j < cantidadTalentos; j++) {
          while (cantidadTalentos > 0) {
            do {
              talentos[j].mision1 = parseFloat(
                prompt(
                  `Ingrese la nota de la mision 1 entre 0 y 100 de ${talentos[j].nombre}`
                )
              );
              if (
                isNaN(talentos[j].mision1) ||
                talentos[j].mision1 < 0 ||
                talentos[j].mision1 > 100
              ) {
                alert("Ingrese una nota valida entre 0 y 100");
              }
            } while (
              talentos[j].mision1 < 0 ||
              talentos[j].mision1 > 100 ||
              isNaN(talentos[j].mision1)
            );
            {
              break;
            }
          }
        }
        menu = 0;
        break;
      case 4:
        if (cantidadTalentos === 0) {
          alert("Debe primero registrar la cantidad de talentos");
          menu = 0;
          break;
        }
        for (let j = 0; j < cantidadTalentos; j++) {
          while (cantidadTalentos > 0) {
            do {
              talentos[j].mision2 = parseFloat(
                prompt(
                  `Ingrese la nota de la mision 2 entre 0 y 100 de ${talentos[j].nombre}`
                )
              );
              if (
                isNaN(talentos[j].mision2) ||
                talentos[j].mision2 < 0 ||
                talentos[j].mision2 > 100
              ) {
                alert("Ingrese una nota valida entre 0 y 100");
              }
            } while (
              talentos[j].mision2 < 0 ||
              talentos[j].mision2 > 100 ||
              isNaN(talentos[j].mision2)
            );
            {
              break;
            }
          }
        }
        menu = 0;
        break;
      case 5:
        if (cantidadTalentos === 0) {
          alert("Debe primero registrar la cantidad de talentos");
          menu = 0;
          break;
        }
        for (let j = 0; j < cantidadTalentos; j++) {
          while (cantidadTalentos > 0) {
            do {
              talentos[j].mision3 = parseFloat(
                prompt(
                  `Ingrese la nota de la mision 3 entre 0 y 100 de ${talentos[j].nombre}`
                )
              );
              if (
                isNaN(talentos[j].mision3) ||
                talentos[j].mision3 < 0 ||
                talentos[j].mision3 > 100
              ) {
                alert("Ingrese una nota valida entre 0 y 100");
              }
            } while (
              talentos[j].mision3 < 0 ||
              talentos[j].mision3 > 100 ||
              isNaN(talentos[j].mision3)
            );
            {
              break;
            }
          }
        }
        menu = 0;
        break;
      case 6:
        if (cantidadTalentos === 0) {
          alert("Debe primero registrar la cantidad de talentos");
          menu = 0;
          break;
        }
        for (let j = 0; j < cantidadTalentos; j++) {
          while (cantidadTalentos > 0) {
            do {
              talentos[j].mision4 = parseFloat(
                prompt(
                  `Ingrese la nota de la prueba final entre 0 y 100 de ${talentos[j].nombre}`
                )
              );
              if (
                isNaN(talentos[j].mision4) ||
                talentos[j].mision4 < 0 ||
                talentos[j].mision4 > 100
              ) {
                alert("Ingrese una nota valida entre 0 y 100");
              }
            } while (
              talentos[j].mision4 < 0 ||
              talentos[j].mision4 > 100 ||
              isNaN(talentos[j].mision4)
            );
            {
              break;
            }
          }
        }
        menu = 0;
        break;
      case 7:
        if (cantidadTalentos === 0) {
          alert("Debe primero registrar la cantidad de talentos");
          menu = 0;
          break;
        }
        for (let i = 0; i < talentos.length; i++) {
          if (nota1 < talentos[i].mision1) {
            nota1 = talentos[i].mision1;
            nombre1 = talentos[i].nombre;
          } else {
            nota1 = nota1;
            nombre1 = talentos[i].nombre;
          }
        }
        console.log(`${nombre1} tiene la nota mas alta y es: ${nota1}`);
        menu = 0;
        break;
      case 8:
        if (cantidadTalentos === 0) {
          alert("Debe primero registrar la cantidad de talentos");
          menu = 0;
          break;
        }
        for (let i = 0; i < talentos.length; i++) {
          if (nota1 < talentos[i].mision2) {
            nota1 = talentos[i].mision2;
            nombre1 = talentos[i].nombre;
          } else {
            nota1 = nota1;
            nombre1 = talentos[i].nombre;
          }
        }
        console.log(`${nombre1} tiene la nota mas alta y es: ${nota1}`);
        menu = 0;
        break;
      case 9:
        if (cantidadTalentos === 0) {
          alert("Debe primero registrar la cantidad de talentos");
          menu = 0;
          break;
        }
        for (let i = 0; i < talentos.length; i++) {
          if (nota1 < talentos[i].mision3) {
            nota1 = talentos[i].mision3;
            nombre1 = talentos[i].nombre;
          } else {
            nota1 = nota1;
            nombre1 = talentos[i].nombre;
          }
        }
        console.log(`${nombre1} tiene la nota mas alta y es: ${nota1}`);
        menu = 0;
        break;
      case 10:
        if (cantidadTalentos === 0) {
          alert("Debe primero registrar la cantidad de talentos");
          menu = 0;
          break;
        }
      for (let i = 0; i < talentos.length; i++) {
        talentos[i].promedio =
          (talentos[i].mision1 +
            talentos[i].mision2 +
            talentos[i].mision3 +
            talentos[i].mision4) /
          4;
        console.log(
          `Nombre: ${talentos[i].nombre} Nota: ${talentos[i].promedio.toFixed(2)}`
        );
      }
      menu = 0
      break;
      case 11:
        if (cantidadTalentos === 0) {
          alert("Debe primero registrar la cantidad de talentos");
          menu = 0;
          break;
        }
        for (let i = 0; i < talentos.length; i++) {
          console.log(
            `Codigo: ${talentos[i].codigo} Nombre: ${talentos[i].nombre} Nota mision 1: ${talentos[i].mision1} Nota mision 2: ${talentos[i].mision2} Nota mision 3: ${talentos[i].mision3} Nota prueba final: ${talentos[i].mision4}`
          );
        }
        menu = 0
        break;
      case 12:
        if (cantidadTalentos === 0) {
          alert("Debe primero registrar la cantidad de talentos");
          menu = 0;
          break;
        }
        console.log("Juan Camilo Vega Vega");
        menu = 0
        break;
      case 13:
        ciclo = -1;
        break;
    }
  }
}
