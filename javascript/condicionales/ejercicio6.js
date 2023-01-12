/*6.Pedir dos números y decir si non múltiplos o no.*/

const numero1 = parseFloat(prompt("Ingrese el numero 1"));
const numero2 = parseFloat(prompt("Ingrese el numero 2"));

const resultadodedivision1 = numero2 % numero1;
if (Number.isInteger(resultadodedivision1) && resultadodedivision1 > 1) {
  console.log("El numero", numero1, "es multiplo de:", numero2);
} else {
  const resultadodedivision2 = numero1 % numero2;
  if (Number.isInteger(resultadodedivision2) && resultadodedivision2 > 1) {
    console.log("El numero", numero2, "es multiplo de:", numero1);
  } else {
    console.log("los numeros no son multiplos");
  }
}
