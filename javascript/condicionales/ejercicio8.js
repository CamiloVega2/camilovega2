/*8.Pedir tres números enteros con un valor del 1 al 10, 
sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5 
caso contrario mostrar false,
 utilizar el operador ternario.*/

const numero1 = parseFloat(prompt("Ingese un numero entre 1 y 10"));
if (!Number.isInteger(numero1) || numero1 > 10 || numero1 < 1) {
  alert("El numero debe ser entero y estar entre 1 y 10");
} else {
  const numero2 = parseFloat(prompt("Ingese el numero 2"));
  if (!Number.isInteger(numero2) || numero2 > 10 || numero2 < 1) {
    alert("El numero debe ser entero y estar entre 1 y 10");
  } else {
    const numero3 = parseFloat(prompt("Ingrese el numero 3"));
    if (!Number.isInteger(numero3) || numero3 > 10 || numero3 < 1) {
      alert("El numero debe ser entero y estar entre 1 y 10");
    } else {
      let promedio =(numero1 + numero2 + numero3) / 3;

          (promedio > 5)
          ? console.log("El promedio es " + promedio + " true")
          : console.log("el promedio es " + promedio + " false");
    }
  }
}
