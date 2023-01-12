/*5.Desarrolle un algoritmo que permit convertir calificaciones numericas, segun la siguiente tabla:
	A = 19 y 20.
	B = 16, 17 y 18.
	C = 13, 14 y 15.
	D = 10, 11 y 12.
	E = 1 hasta 9.
*/
const nota = parseFloat(prompt("Ingrese el valor de la nota"));
if (nota > 20 || nota < 1) {
  alert("La nota debe estar entre 1 y 20");
} else {
  if (nota <= 20 && nota >= 19) {
    alert("La nota es A");
  } else {
    if (nota <= 18 && nota >= 16) {
      alert("La nota es B");
    } else {
      if (nota <= 15 && nota >= 13) {
        alert("La nota es C");
      } else {
        if (nota <= 12 && nota >= 10) {
          alert("La nota es D");
        } else {alert("La nota es E")
        }
      }
    }
  }
}
