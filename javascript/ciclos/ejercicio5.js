/*hacer un algortimo que imprima el nombre de 4 articulos precio original
y su precio con descuento.el descuento lo hace en base a la forma de pago
si es a contado sera (1) y su descuento es del 10%
y si la forma de pago es a credito sera (2)
y su descuento es del 20%(solo existen dos claves)*/
let nombredearticulo;
preciooriginal = 0;
preciocondescuentocontado = 0;
formadepago = 0;
preciocondescuentocredito = 0;
for (let i = 0; i < 5; i++) {
  nombredearticulo = prompt("Ingrese el nombre de un articulo");
  preciooriginal = prompt("Ingrese el precio original del articulo");
  formadepago = parseFloat(
    prompt("escriba 1 si va a pagar de contado o 2 si va ser a credito")
  );
  if (formadepago > 2 || formadepago < 1) {
    alert("la forma de pago debe ser contado 1 o credito 2");
  } else {
    if (formadepago == 1) {
      preciocondescuentocontado = preciooriginal - ((preciooriginal * 10) / 100);
      console.log(
        "El precio con descuento de" +
          nombredearticulo +
          "es de " +
          preciocondescuentocontado
      );
    } else {
      if (formadepago == 2) {
        preciocondescuentocredito = preciooriginal - ((preciooriginal * 20) / 100);
        console.log(
          "El precio con descuento de " +
            nombredearticulo +
            "es de " +
            preciocondescuentocredito
        );
      }
    }
  }
}
