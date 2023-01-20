let numero1 = parseFloat(prompt("Ingrese el primer numero"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero"));
let operacion = parseFloat(
  prompt(
    "Ingrese el numero de la operacion que va a realizar: 1.area del cuadrado 2.perimetro del triangulo con un lado 6 3.area de un trapecio cuya altura es 6"
  )
);
switch (operacion) {
  case 1:
    console.log("el area del cuadrado es: " + (numero1 * numero2));
    break;
  case 2:
    console.log("el perimetro del triangulo es: " + (numero1 + numero2 + 6));
    break;
  case 3:
    console.log("el area del trapecio es: " + ((numero1 + numero2) * 6) / 2);
    break;
}