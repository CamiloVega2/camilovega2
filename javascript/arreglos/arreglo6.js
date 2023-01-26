let cantidaddeplatos = 0;
let opcionmenu = 0;
let factura = {};
let precio = 0
cantidaddeplatos = parseInt(prompt("Ingrese la cantidad de clientes"));
for (let i = 0; 0 < cantidaddeplatos; i++)
  opcionmenu = parseInt(
    prompt(
      "Ingrese el numero del plato que desea ordenar : \n 1. Arroz con pollo 15k \n 2. Pastas 20k \n 3. Mute 12k \n 4. Pescado frito 17k \n 5. Sobrebarriga 25k"
    )
  );
switch (opcionmenu) {
  case 1:
    precio = 15
    break;
  case 2:
    precio = 20
    break;
  case 3:
    precio = 12
    break;
  case 4:
    precio = 17
    break;
  case 5:
    precio = 25
    break;
  default:
    console.log("6");
}
