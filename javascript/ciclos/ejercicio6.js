/* una persona debe realizar un muestreo con 20 personas para determinar el promedio de peso de los niños, jovenes,adultos y viejos
que existen en su zona habitacional, se determinan las categorias con base en la sigiuiente tabla

catergoria edad
niños       0-12
jovenes     13-29
adultos     30-59
viejos     60 en adelante */

let edad = 0;
peso = 0;
sumapesoniños = 0;
sumapesojovenes = 0;
sumapesoadulto = 0;
sumapesoviejos = 0;
contnino = 0;
contjoven = 0;
contadulto = 0;
contviejo = 0;
for (var i = 0; i < 20; i++) {
  edad = parseInt(prompt("Ingrese su edad"));
  if (!Number.isInteger(edad) || edad < 0) {
    alert("por favor ingrese un numero entero y mayor que cero");
  } else {
    peso = parseFloat(prompt("Ingrese el peso"));
    if (edad >= 0 && edad <= 12) {
      sumapesoniños += peso;
      contnino++;
    } else {
      if (edad >= 13 && edad <= 29) {
        sumapesojovenes += peso;
        contjoven;
      } else {
        if (edad >= 30 && edad <= 59) {
          sumapesoadulto += peso;
          contadulto++;
        } else {
          if (edad >= 60) {
            sumapesoviejos += peso;
            contviejo++;
          }
        }
      }
    }
  }
}
console.log("El promedio de peso de los niños es de: " + sumapesoniños/contnino +
            "El promedio de peso de los jovenes es de: " + sumapesojovenes/contjoven +
            "El promedio de peso de los adultos es de: " + sumapesoadulto/contadulto + 
            "El promedio de peso de los viejos es de: " + sumapesoviejos/contviejo )