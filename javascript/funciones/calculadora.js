const suma = function (a, b) {
  return a + b;
};
const resta = function (a, b) {
  return a - b;
};
const multiplicacion = function (a, b) {
  return a * b;
};
const division = function (a, b) {
  return a / b;
};
let n1 = 0;
let n2 = 0;
let decision = 0;
let calculadora = true;
while (calculadora) {
  do {
    decision = parseInt(
      prompt(
        "Ingrese la acción que desea realizar: \n 1. sumar 2 numeros \n 2. restar 2 numeros \n 3. dividir 2 numero \n 4. multiplicar 2 numeros \n 5. potenciar 2 numeros \n 6. raiz cuadrada de 1 numero \n 0. salir de los calculos"
      )
    );
    if (isNaN(decision) || decision < 0 || decision > 6) {
      alert("por favor ingrese un numero o un numero valido");
    }
  } while (decision > 6 || decision < 0);
  {
    switch (decision) {
      case 1:
        do {
          n1 = parseFloat(prompt("Ingrese el primer numero que va a utilizar"));
          if (isNaN(n1)) {
            alert("por favor ingrese un numero");
          }
        } while (isNaN(n1));
        do {
          n2 = parseFloat(
            prompt("Ingrese el segundo numero que va a utilizar")
          );
          if (isNaN(n2)) {
            alert("por favor ingrese un numero");
          }
        } while (isNaN(n2));
        console.log(suma(n1, n2));
        break;
      case 2:
        do {
          n1 = parseFloat(prompt("Ingrese el primer numero que va a utilizar"));
          if (isNaN(n1)) {
            alert("por favor ingrese un numero");
          }
        } while (isNaN(n1));
        do {
          n2 = parseFloat(
            prompt("Ingrese el segundo numero que va a utilizar")
          );
          if (isNaN(n2)) {
            alert("por favor ingrese un numero");
          }
        } while (isNaN(n2));
        console.log(resta(n1, n2));
        break;
      case 3:
        do {
          n1 = parseFloat(prompt("Ingrese el primer numero que va a utilizar"));
          if (isNaN(n1)) {
            alert("por favor ingrese un numero");
          }
        } while (isNaN(n1));
        do {
          n2 = parseFloat(
            prompt("Ingrese el segundo numero que va a utilizar")
          );
          if (isNaN(n2)) {
            alert("por favor ingrese un numero");
          }
        } while (isNaN(n2));
        console.log(dividir(n1, n2));
        break;
      case 4:
        do {
          n1 = parseFloat(prompt("Ingrese el primer numero que va a utilizar"));
          if (isNaN(n1)) {
            alert("por favor ingrese un numero");
          }
        } while (isNaN(n1));
        do {
          n2 = parseFloat(
            prompt("Ingrese el segundo numero que va a utilizar")
          );
          if (isNaN(n2)) {
            alert("por favor ingrese un numero");
          }
        } while (isNaN(n2));
        console.log(multiplicacion(n1, n2));
        break;
      case 5:
        do {
          n1 = parseFloat(prompt("Ingrese el primer numero que va a utilizar"));
          if (isNaN(n1)) {
            alert("por favor ingrese un numero");
          }
        } while (isNaN(n1));
        do {
          n2 = parseFloat(
            prompt("Ingrese el segundo numero que va a utilizar")
          );
          if (isNaN(n2)) {
            alert("por favor ingrese un numero");
          }
        } while (isNaN(n2));
        console.log(Math.pow(n1, n2));
        break;
      case 6:
        do {
          n1 = parseFloat(prompt("Ingrese el primer numero que va a utilizar"));
          if (isNaN(n1)) {
            alert("por favor ingrese un numero");
          }
        } while (isNaN(n1));
        console.log(Math.sqrt(n1));
        break;
      case 0:
        alert("Gracias por utilizarnos");
        console.log("Gracias por utilizarnos");
        calculadora = false;
        break;
    }
  }
}
