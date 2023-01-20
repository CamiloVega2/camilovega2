/*1)Un profesor tiene un grupo de 5 estudiantes y le pide a cada uno de ellos que ingrese el nombre y 
la nota que ellos consideran se les debería aplicar al final del semestre. Validar cuantas notas están entre:
3.0 y 4.0
4.1 y 5.0*/
let estudiante;
let nota = 0;
let cont = 0;
let cont1 = 0;

for (let i = 0; i < 5; i++) {
  estudiante = prompt("Ingrese el nombre del estudiante");
  do {
    nota = parseFloat(prompt("Ingrese la nota la nota que considere"));
    if (nota > 5 || nota < 0) {
      alert("nota invalida");
    }
  } while (nota > 5 || nota < 0);
  if (nota >= 3 && nota <= 4) {
    cont += 1;
  }

  if (nota >= 4.1 && nota <= 5) {
    cont1++;
  }
}
console.log("tiene " + cont + " en el rango de 3.0 y 4.0");
console.log("tiene " + cont1 + " en el rango de 4.1 y 5");
