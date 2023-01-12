/*9.Desarrolle un algoritma que reciba un numero entero 
e imprima si el numero es par o impar.
 Ademas el numero debe ser positivo.*/

let numero = parseFloat(prompt("Ingrese un numero entero"));
if (!Number.isInteger(numero) || numero < 0) {
  alert("El numero debe ser entero y mayor a 0");
} else {
  if (numero % 2 == 0) {
    alert("El numero es par");
  } else {
    alert("El numero es impar");
  }
}
