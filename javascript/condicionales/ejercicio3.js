/*3.Desarrolle un algortimo que reciba un numero entero y escriba si dicho numero es par o impar.*/
const numero = parseFloat(prompt("Ingrese el numero a verificar"));
if (!Number.isInteger(numero) || numero < 0) {
  alert("El numero debe ser entero y mayor que 0");
} else {
  if (numero % 2 == 0) {
    console.log("El numero", numero, "es par");
  } else {
    console.log("El numero", numero, "es impar");
  }
}