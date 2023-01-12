/*2.Desarrolle un algoritmo que reciba la base y altura de un triangulo en cm. 
Los 2 valores ingresados no pueden ser iguales, ademas el algoritmo
 debe calcular el area del triangulo si la base es mayor a 5cm y la altura es mayor a 4cm, 
 si no lo son el algoritmo debe imprimir el valor de la
 base multiplicado por 2 y sumarle 10.*/
const base = parseFloat(prompt("Ingrese el valor de la base en cm"));
if (base <= 0 || !Number.isInteger(base)) {
  alert("El numero debe ser entero y mayor que 0");
} else {
  const altura = parseFloat(prompt("Ingrese el valor de la altura"));
  if (base == altura) {
    alert("Los valores no pueden ser iguales");
  } else {
    if (altura <= 0 || !Number.isInteger(altura)) {
      alert("el valor debe ser entero y mayor que 0");
    } else {
      if (base >= 5 && altura >= 4) {
        console.log("El valor del area es de:", (base * altura) / 2, "cm");
      } else {
        console.log("El area es de:", base * 2 + 10, "cm");
      }
    }
  }
}
