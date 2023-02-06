/* en el instituto turbocoex, se tiene una cantida N de estudiantes, de los cuales se desea registrar el
nombre,codigo y nivel(beginner ,junior,senior), se debe verificar que no se creen codigos duplicados
para los estudiantes que se registren. ademas de los datos solicitados se requiere registrar 3 notas
para cada estudiantes. se debe calcular y mostrar el promedio de las notas por cadaestudiante junto 
con un mensaje de "aprobo" o "reporbo" y el promedio debe ser superior o igual a 3,5,(validar las notas
en un rango de 0 a 5). se ha solicitado que usted cree un algoritmo expresado en pseudocodigo que 
cumpla con los requirimientos indicados creando un menu que permita realizar las siguientes acciones:
*definir cantidad de estudiantes
*registrar datos de estudiantes
*mostrar listado de estudiantes
*registrar notas estudiantes
*imprimir notas de estudiantes
*salir*/
let actualizarNotas = 0;
let cantidadEstudiantes = 0;
let estudiantes = [];
let estudiante = {};
let promedio = 0;
let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let ciclo = 1;
let menu = 0;
let variable = -1;
let variable2 = false;
let nivel = 0;
while (ciclo > 0) {
  do {
    menu = parseInt(
      prompt(
        "Ingrese la accion que desea realizar: \n 1. Definir cantidad de estudiantes" +
          "\n 2. Registrar datos de estudiantes " +
          "\n 3. Mostrar listado de estudiantes" +
          "\n 4. Registrar notas de estudiantes" +
          "\n 5. Imprimir notas de estudiantes" +
          "\n 0. Salir"
      )
    );
    if (menu > 5 || menu < 0 || isNaN(menu)) {
      alert("Por favor ingrese un numero valido");
    }
  } while (menu > 5 || menu < 0);
  {
    switch (menu) {
      case 1:
        do {
          cantidadEstudiantes = parseInt(
            prompt("Ingrese la cantidad de estudiantes que va a registrar")
          );
          if (isNaN(cantidadEstudiantes) || cantidadEstudiantes <= 0) {
            alert("Por favor ingrese un numero valido");
          }
        } while (isNaN(cantidadEstudiantes) || cantidadEstudiantes <= 0);
        {
          variable = 1;
          break;
        }
      case 2:
        if (variable < 0) {
          alert(
            "Aun no ha definido la cantidad de estudiantes que desea registrar"
          );
        }
        while (variable > 0) {
          for (let i = 0; i < cantidadEstudiantes; i++) {
            do {
              estudiante.nombre = prompt("Ingrese el nombre del estudiante");
              if (!isNaN(estudiante.nombre)) {
                alert("Por favor ingrese un nombre valido");
              }
            } while (!isNaN(estudiante.nombre));
            {
              do {
                estudiante.codigo = parseInt(
                  prompt("Ingrese el codigo del estudiante")
                );
                if (estudiante.codigo > 0) {
                  variable2 = 0;
                }
                estudiantes.forEach((el) => {
                  if (
                    el.codigo === estudiante.codigo ||
                    estudiante.codigo < 0 ||
                    isNaN(estudiante.codigo)
                  ) {
                    alert("Este codigo ya esta registrado o no es valido");
                    variable2 = 1;
                  }
                });
              } while (variable2 == 1);
              {
                do {
                  nivel = prompt(
                    "Ingrese el nivel del estudiante: \n 1. Begginer" +
                      "\n 2. Junior" +
                      "\n 3. Senior"
                  );
                  if (nivel < 1 || nivel > 3 || isNaN(nivel)) {
                    alert("Por favor ingrese un numero valido");
                  }
                } while (nivel < 1 || nivel > 3);
                {
                  if (nivel == 1) {
                    estudiante.nivel = "Begginer";
                    break;
                  } else {
                    if (nivel == 2) {
                      estudiante.nivel = "Junior";
                      break;
                    } else {
                      estudiante.nivel = "Senior";
                      break;
                    }
                  }
                }
              }
            }
          }
          console.log(estudiante);
          estudiantes.push(estudiante);
          estudiante = {};
          break;
        }
        variable = -1;
        break;
      case 3:
        console.log(estudiantes);
        break;
      case 4:
        console.log(estudiantes);
        actualizarNotas = parseInt(
          prompt("Ingrese el numero del estudiante al que quiere ponerle notas")
        );
        if (isNaN(actualizarNotas) || actualizarNotas < 0) {
          alert("Numero invalido");
        }
        do {
          nota1 = parseFloat(prompt("Ingrese la nota 1"));
          if (nota1 < 0 || nota1 > 5) {
            alert("Nota invalida");
          }
        } while (nota1 < 0 || nota1 > 5);
        {
          do {
            nota2 = parseFloat(prompt("Ingrese la nota 2"));
            if (nota2 < 0 || nota2 > 5) {
              alert("Nota invalida");
            }
          } while (nota2 < 0 || nota2 > 5);
          {
            do {
              nota3 = parseFloat(prompt("Ingrese la nota 3"));
              if (nota3 < 0 || nota3 > 5) {
                alert("Nota invalida");
              }
            } while (nota3 < 0 || nota3 > 5);
            {
              promedio = (nota1 + nota2 + nota3) / 3;
              estudiante.nota = promedio;
              if (estudiante.nota > 3.5) {
                estudiante.estado = "Aprobo";
                estudiantes.push(estudiante);
                estudiante = {};
              } else {
                estudiante.estado = "reprobo";
                estudiantes.push(estudiante);
                estudiante = {};
              }
            }
          }
        }
        break;
      case 5:
        estudiantes.forEach((el) => {
          console.log(`La nota de ${el.nombre} es ${el.nota.toFixed(2)} y su estado es : ${el.estado}`);
        });
        break;
    }
  }
}
