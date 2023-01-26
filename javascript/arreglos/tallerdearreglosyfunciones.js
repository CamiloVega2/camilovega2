let decisiondelmenu = 0;
let decisiondelmenu2 = 0;
let nombre;
do {
  decisiondelmenu = parseInt(
    prompt(
      "Ingrese la acción que desea realizar: \n 1. Ingresar familiares \n 2. mostrar resultados \n 3. salir"
    )
  );
  if (decisiondelmenu == 2) {
    alert("no hay datos que mostrar");
  }
  if (decisiondelmenu < 1 || decisiondelmenu > 3) {
    alert("Este número no es valido");
  }
} while (decisiondelmenu < 1 || decisiondelmenu > 3 || decisiondelmenu == 2);
{
  switch (decisiondelmenu) {
    case 1:
      do{nombre = prompt("Escriba el nombre del familiar:");
      if (!isNaN(nombre)) {
        alert("este nombre no es valido");
        while()
      
      }
  }}
}
