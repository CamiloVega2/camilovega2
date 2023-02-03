let ciclo = 1;
let opcionMenu = 0;
const familiares = [];
let familiar = {};
let IMC = 0;
while (ciclo > 0) {
  do {
    opcionMenu = parseInt(
      prompt(
        "Ingrese la accion que desea realizar:" +
          "\n 1. Ingresar familiares" +
          "\n 2. Mostrar resultados" +
          "\n 0. Salir"
      )
    );
    if (opcionMenu > 3 || opcionMenu < 0) {
      alert("Por favor ingrese un numero del menu");
    }
  } while (opcionMenu > 3 || opcionMenu < 0);
  {
    switch (opcionMenu) {
      case 1:
        do {
          familiar.edad = parseInt(prompt("Ingrese la edad de la persona"));
          if (familiar.edad < 20) {
            alert("El usuario a registrar debe ser mayor a 20 years");
          }
        } while (familiar.edad < 20);
        {
          do {
            familiar.nombrefamiliar = prompt("Ingrese el nombre del familiar");
            if (!isNaN(familiar.nombrefamiliar)) {
              alert("Por favor ingrese un nombre valido");
            }
          } while (!isNaN(familiar.nombrefamiliar));
          {
            do {
              familiar.alturafamiliar = parseFloat(
                prompt(
                  "Ingrese la altura de la persona en metros separandolo con un punto ejemplo: 1.68"
                )
              );
              if (isNaN(familiar.alturafamiliar)) {
                alert("Por favor ingrese una altura valida");
              }
            } while (isNaN(familiar.alturafamiliar));
            {
              do {
                familiar.pesofamiliar = parseFloat(
                  prompt(
                    "Ingrese el peso del familiar en kilogramos separandolo con un punto ejemplo: 54.2"
                  )
                );
                if (isNaN(familiar.pesofamiliar)) {
                  alert("Por favor ingrese un numero valido");
                }
              } while (isNaN(familiar.pesofamiliar));
              {
                familiares.push(familiar);
                familiar = {};
                break;
              }
            }
          }
        }
      case 2:
        familiares.forEach((el) => {
          IMC = el.pesofamiliar / el.alturafamiliar ** 2;
          if (IMC < 18.5) {
            console.log(
              `El familiar ${el.nombrefamiliar} tiene un IMC de ${IMC.toFixed(
                2
              )} y esta bajo de peso`
            );
          } else if (IMC >= 18.5 && IMC <= 24.9) {
            console.log(
              `El familiar ${el.nombrefamiliar} tiene un IMC de ${IMC.toFixed(
                2
              )} y esta en peso normal`
            );
          } else if (IMC >= 25 && IMC <= 28.9) {
            console.log(
              `El familiar ${el.nombrefamiliar} tiene un IMC de ${IMC.toFixed(
                2
              )} y esta en sobrepeso`
            );
          } else if (IMC >= 29 && IMC <= 34.9) {
            console.log(
              `El familiar ${el.nombrefamiliar} tiene un IMC de ${IMC.toFixed(
                2
              )} y esta en obeso 1`
            );
          } else {
            console.log(
              `El familiar ${el.nombrefamiliar} tiene un IMC de ${IMC.toFixed(
                2
              )} y esta en sobrepeso 2`
            );
          }
        });
        break;
      case 0:
        ciclo = -1;
        break;
    }
  }
}
