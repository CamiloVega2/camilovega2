let decision;
let decision2;
let numero1 = parseFloat(prompt("Ingrese el numero 1"));
let numero2 = parseFloat(prompt("Ingrese el numero 2"));
let numero3 = parseFloat(prompt("Ingrese el numero 3"));
let operacion = parseFloat(
  prompt(
    "Ingrese la operacion que desea realizar: 1 sumar , 2 multiplicar y 3 dividir"
  )
);
switch (operacion) {
  case 1:
    decision = parseFloat(
      prompt(
        "Escoja el numero al que desea realizarle la operacion: 1. " +
          numero1 +
          " 2. " +
          numero2 +
          " 3. " +
          numero3
      )
    );
    switch (decision) {
      case 1:
        decision2 = parseFloat(
          prompt(
            "Escoja el segundo numero con el que va a realizar la operacion: 1. " +
              numero2 +
              " 2. " +
              numero3
          )
        );
        switch (decision2) {
          case 1:
            console.log("La suma de los numeros es: " + (numero1 + numero2));
            break;
          case 2:
            console.log("La suma de los numeros es: " + (numero1 + numero3));
            break;
        }break;
      case 2:
        decision2 = parseFloat(
          prompt(
            "Escoja el segundo numero con el que va a realizar la operacion: 1. " +
              numero1 +
              " 2. " +
              numero3
          )
        );
        switch (decision2) {
          case 1:
            console.log("La suma de los numeros es: " + (numero2 + numero1));
            break;
          case 2:
            console.log("La suma de los numeros es: " + (numero2 + numero3));
            break;
        }break;
      case 3:
        decision2 = parseFloat(
          prompt(
            "Escoja el segundo numero con el que va a realizar la operacion: 1. " +
              numero1 +
              " 2. " +
              numero2
          )
        );
        switch (decision2) {
          case 1:
            console.log("La suma de los numeros es: " + (numero3 + numero1));
            break;
          case 2:
            console.log("La suma de los numeros es: " + (numero3 + numero2));
            break;
        }break;
    }break;
  case 2:
    decision = parseFloat(
      prompt(
        "Escoja el numero al que desea realizarle la operacion: 1. " +
          numero1 +
          " 2. " +
          numero2 +
          " 3. " +
          numero3
      )
    );
    switch (decision) {
      case 1:
        decision2 = parseFloat(
          prompt(
            "Escoja el segundo numero con el que va a realizar la operacion: 1. " +
              numero2 +
              " 2. " +
              numero3
          )
        );
        switch (decision2) {
          case 1:
            console.log("La multiplicacion de los numeros es: " + (numero1 * numero2));
            break;
          case 2:
            console.log("La multiplicacion de los numeros es: " + (numero1 * numero3));
            break;
        }break;
      case 2:
        decision2 = parseFloat(
          prompt(
            "Escoja el segundo numero con el que va a realizar la operacion: 1. " +
              numero1 +
              " 2. " +
              numero3
          )
        );
        switch (decision2) {
          case 1:
            console.log("La multiplicacion de los numeros es: " + (numero2 * numero1));
            break;
          case 2:
            console.log("La multiplicacion de los numeros es: " + (numero2 * numero3));
            break;
        }break;
      case 3:
        decision2 = parseFloat(
          prompt(
            "Escoja el segundo numero con el que va a realizar la operacion: 1. " +
              numero1 +
              " 2. " +
              numero2
          )
        );
        switch (decision2) {
          case 1:
            console.log("La multiplicacion de los numeros es: " + (numero3 * numero1));
            break;
          case 2:
            console.log("La multiplicacion de los numeros es: " + (numero3 * numero2));
            break;
        }break;
    }break;
    case 3:
        decision = parseFloat(
            prompt(
              "Escoja el numero al que desea realizarle la operacion: 1. " +
                numero1 +
                " 2. " +
                numero2 +
                " 3. " +
                numero3
            )
          );
          switch (decision) {
            case 1:
              decision2 = parseFloat(
                prompt(
                  "Escoja el segundo numero con el que va a realizar la operacion: 1. " +
                    numero2 +
                    " 2. " +
                    numero3
                )
              );
              switch (decision2) {
                case 1:
                  console.log("La division de los numeros es: " + (numero1 / numero2));
                  break;
                case 2:
                  console.log("La division de los numeros es: " + (numero1 / numero3));
                  break;
              }break;
            case 2:
              decision2 = parseFloat(
                prompt(
                  "Escoja el segundo numero con el que va a realizar la operacion: 1. " +
                    numero1 +
                    " 2. " +
                    numero3
                )
              );
              switch (decision2) {
                case 1:
                  console.log("La division de los numeros es: " + (numero2 / numero1));
                  break;
                case 2:
                  console.log("La division de los numeros es: " + (numero2 / numero3));
                  break;
              }break;
            case 3:
              decision2 = parseFloat(
                prompt(
                  "Escoja el segundo numero con el que va a realizar la operacion: 1. " +
                    numero1 +
                    " 2. " +
                    numero2
                )
              );
              switch (decision2) {
                case 1:
                  console.log("La division de los numeros es: " + (numero3 / numero1));
                  break;
                case 2:
                  console.log("La division de los numeros es: " + (numero3 / numero2));
                  break;
              }break;
          }break;
}