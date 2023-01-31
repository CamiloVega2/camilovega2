const arreglo = ["hola", 2, 5, 7, 2, 8, "JuanJo", 14, "tablero", "cable"];
let cont1 = 0;

for (let i = 0; i < arreglo.length; i++)
  if (!isNaN(arreglo[i])) {
    cont1 = cont1 + arreglo[i];
  }
console.log(cont1);
cont1 = 0

arreglo.forEach((element) => {
  if (!isNaN(element)) {
    cont1 = cont1 + element;
  }
})
console.log(cont1);
