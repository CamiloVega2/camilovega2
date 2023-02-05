// 3.	Sumar los valores del siguiente arreglo numeros=[33,55,77,81,48]
// mostrar al final del programa los número en forma de lista y el resultado de la suma.
let numeros = [33, 55, 77, 81, 48];
let suma = 0

for (let i = 0; i < numeros.length; i++) {
  suma = numeros[i] + suma;
}
console.log(suma);
