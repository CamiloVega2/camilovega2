/*escriba un numero entero positivo,
el programa debe imprimir los numeros impares que hay desde 0 hasta ese numero*/

let numero = parseFloat(prompt("Ingrese el numero"));
let n2 = 1;
while (n2 <= numero) {
  if (numero % 2 != 0) {
    console.log(n2);
  }n2++
} 
