let velocidad = parseFloat(
  prompt(
    "ingrese la velocidad a la que quiere que trabaje la lavadora 1 rapido 2 medio y 3 lento"
  )
);
switch (velocidad) {
  case 1:
    console.log("lavado a velocidad rapida");
    break;
  case 2:
    console.log("lavado a velocidad media");
    break;
  case 3:
    console.log("lavado a velocidad lenta");

  default:
    break;
}
let tipodelavado = parseFloat(
  prompt(
    "ingrese el tipo de lavado que desea 1 lavar 2 enjuagar y 3 centrifugar"
  )
);
switch (tipodelavado) {
  case 1:
    console.log("tipo de lavado:lavar");
    break;
  case 2:
    console.log("tipo de lavado:enjuagar");
    break;
  case 3:
    console.log("tipo de lavado:centrifugar");
  default:
    break;
}