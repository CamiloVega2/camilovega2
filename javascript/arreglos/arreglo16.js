// 2.	Rellena un array con números aleatorios (por ejemplo del 1 al 10).
//  Muestra el resultado por consola.
let numero = parseInt(prompt("Ingrese la cantidad de numeros aleatorios que quiere"))
let numeros = []
let numeroAleatorio = 0
for (let i = 0; i < numero;i++){
    numeroAleatorio = Math.floor(Math.random()*10)
    numeros.push(numeroAleatorio)
}console.log(numeros);