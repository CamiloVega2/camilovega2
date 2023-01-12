/*1.Desarrolle un algoritmo que permita leer 3 números enteros. 
El algoritmo debe imprimir cual es el numero mayor y cual es el numero menor entre los 3.
Ademas ninguno de los 3 numeros ingresados pueden ser iguales. 
En caso de que el usuario ingrese 2 numeros iguales debe mostrar una alerta.
*/

const numero1 = parseFloat(prompt("Ingrese el numero 1"));
const numero2 = parseFloat(prompt("Ingrese el numero 2"));
if (numero1 == numero2) {
  alert("Los numeros deben ser diferentes");
} else {
  const numero3 = parseFloat(prompt("Ingrese el numero 3"));
  if (numero3 == numero2) {
    alert("El numero 3 debe ser diferente del numero 2");
  } else {
    if (numero3 == numero1) {
      alert("El numero 3 debe ser diferente del numero 1");
    }else console.log(
      "Este es el numero mayor:",
      Math.max(numero1, numero2, numero3),
      "Este es el numero menor:",
      Math.min(numero1, numero2, numero3)
    );
  }
}
