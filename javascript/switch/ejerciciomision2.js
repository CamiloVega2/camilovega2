/*2) La empresa para la que usted trabaja instala paneles solares y usted es el  ingeniero encargado de desarrollar  software. 
Su jefe le dice que deben aumentar la eficiencia en la generación de energía solar.
Usted le dice que la única manera de lograrlo es hacer un seguidor de intensidad lumínica con un motor eléctrico que se acople al panel 
y que permita recibir los rayos solares de forma directa la mayor parte del día.

Usted realiza mediciones y encuentra que de:

06:00_am a 10:00_am. La inclinación del panel debe ser de -60 grados.

10:01_am a 12:00_pm. La inclinación del panel debe ser de -45 grados.

12:01_pm a 14:00_pm. La inclinación del panel debe ser de 0 grados.

14:01_pm a 16:00_pm. La inclinación del panel debe ser de 60 grados.

16:01_pm a 18:00_pm. La inclinación del panel debe ser de 45 grados.

Usted desarrolla el algoritmo, y decide hacer 10 pruebas ingresando la hora (la hora debe ser de 6 a 18)
 y el algoritmo debe decirle el angulo que debe aplicar. 

Ejemplo: Entrada:6 horas del día.     Salida:angulo -60 grados.
         Entrada:10.3 horas del día.  Salida:-45 grados.*/
let hora = 0;
let cont = 0;
for (let i = 0; i < 3; i++) {
  cont += 1;
  do {
    hora = parseFloat(
      prompt(
        "Ingrese en que rango de hora esta: \n 1. 6:00am-10:00am \n 2. 10:01am-12:00pm \n 3. 12:01pm-14:00pm \n 4. 14:01pm-16:00pm \n 5. 16:01pm-18:00pm"
      )
    );
    switch (hora) {
      case 1:
        console.log(cont.toString()+ ". La inclinación del panel debe ser de -60 grados.");
        break;
      case 2:
        console.log(cont.toString() + ". La inclinación del panel debe ser de -45 grados.");
        break;
      case 3:
        console.log(cont.toString() + ". La inclinación del panel debe ser de 0 grados.");
        break;
      case 4:
        console.log(cont.toString() + ". La inclinación del panel debe ser de 60 grados.");
        break;
      case 5:
        console.log(cont.toString() + ". La inclinación del panel debe ser de 45 grados.");
        break;
      default:
        cont -= 1;
        i -= 1;
        continue;
    }
  } while (hora < 1 || hora > 5);

}
