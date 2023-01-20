/*sumar N numeros mayores a 0 utilizando.mientras que sean diferentes de cero*/

let numero = 0
let suma = 0

do{
    numero = parseFloat(prompt("Ingrese un numero mayor a cero"))
    if(numero < 0){alert("Este numero no es valido")}else{
        suma=suma+numero
    }}
while(numero != 0)
console.log("La suma total es:" + suma)
