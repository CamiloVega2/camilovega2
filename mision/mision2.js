// diseñar un algoritmo con diagrama de flujo de datos y pseudocodigo
// que permita registrar un inventario de celulares de las siguientes
// marcas:samsung,iphone,xiaomi,motorola,huawei,oppo.
// el algoritmo debe permitir descontar del inventario los equipos vendidos segun su marca
// y actualizar la cantidad de telefonos disponibles,
/*ademas debe calcular el total de dinero recaudado por las ventas*/
let ciclo = 1;
let samsung = 0;
let motorola = 0;
let xiaomi = 0;
let iphone = 0;
let huawei = 0;
let oppo = 0;
let inventario = 0;
let cantidaddecelulares = 0;
let marca = 0;
let inviphone = 0;
let invsamsung = 0;
let invxiaomi = 0;
let invmotorola = 0;
let invhuawei = 0;
let invoppo = 0;
let preciosamsung = 90;
let precioiphone = 100;
let precioxiaomi = 50;
let preciomotorola = 30;
let preciohuawei = 70;
let preciooppo = 95;
let ventasamsung = 0;
let ventaiphone = 0;
let ventaxiaomi = 0;
let ventamotorola = 0;
let ventahuawei = 0;
let ventaoppo = 0;
let ventastotales = 0;
let inventariototal = 0;
let variable = false
while (ciclo > 0) {
  do {
    inventario = parseInt(
      prompt(
        "¿Que desea hacer?: \n 1. Ingresar inventario" +
          "\n 2. Actualizar inventario con las ventas" +
          "\n 3. Ver el total de las ventas" +
          "\n 4. Inventario" +
          "\n 0. Salir."
      )
    );
    if (isNaN(inventario) || inventario > 4 || inventario < 0) {
      alert("Por favor ingrese un numero del listado");
    }
   }while (inventario > 4 || inventario < 0);
  {
    switch (inventario) {
      case 1:
        do {
          marca = parseInt(
            prompt(
              "¿Que marca desea registrar?: \n 1. Samsung" +
                "\n 2. Iphone" +
                "\n 3. Xiaomi" +
                "\n 4. Motorola" +
                "\n 5. Huawei" +
                "\n 6. Oppo" +
                "\n 0. salir"
            )
          );
          if (isNaN(marca) || marca < 1 || marca > 6) {
            alert("por favor ingrese un numero de la lista");
          }
        } while (marca < 1 || marca > 6);
        {
          switch (marca) {
            case 1:
              do {
                cantidaddecelulares = parseInt(
                  prompt(
                    "Ingrese la cantidad de celulares que desea añadir al inventario:"
                  )
                );
                if (isNaN(cantidaddecelulares) || cantidaddecelulares <= 0) {
                  alert("Ingrese un numero mayor a 0");
                }
              } while (cantidaddecelulares < 0);
              {
                invsamsung = invsamsung + cantidaddecelulares;
                break;
              }
            case 2:
              do {
                cantidaddecelulares = parseInt(
                  prompt(
                    "Ingrese la cantidad de celulares que desea añadir al inventario:"
                  )
                );
                if (isNaN(cantidaddecelulares) || cantidaddecelulares <= 0) {
                  alert("Ingrese un numero mayor a 0");
                }
              } while (cantidaddecelulares < 0);
              {
                inviphone = inviphone + cantidaddecelulares;
                break;
              }
            case 3:
              do {
                cantidaddecelulares = parseInt(
                  prompt(
                    "Ingrese la cantidad de celulares que desea añadir al inventario:"
                  )
                );
                if (isNaN(cantidaddecelulares) || cantidaddecelulares <= 0) {
                  alert("Ingrese un numero mayor a 0");
                }
              } while (cantidaddecelulares < 0);
              {
                invxiaomi = invxiaomi + cantidaddecelulares;
                break;
              }
            case 4:
              do {
                cantidaddecelulares = parseInt(
                  prompt(
                    "Ingrese la cantidad de celulares que desea añadir al inventario:"
                  )
                );
                if (isNaN(cantidaddecelulares) || cantidaddecelulares <= 0) {
                  alert("Ingrese un numero mayor a 0");
                }
              } while (cantidaddecelulares < 0);
              {
                invmotorola = invmotorola + cantidaddecelulares;
                break;
              }
            case 5:
              do {
                cantidaddecelulares = parseInt(
                  prompt(
                    "Ingrese la cantidad de celulares que desea añadir al inventario:"
                  )
                );
                if (isNaN(cantidaddecelulares) || cantidaddecelulares <= 0) {
                  alert("Ingrese un numero mayor a 0");
                }
              } while (cantidaddecelulares < 0);
              {
                invhuawei = invhuawei + cantidaddecelulares;
                break;
              }
            case 6:
              do {
                cantidaddecelulares = parseInt(
                  prompt(
                    "Ingrese la cantidad de celulares que desea añadir al inventario:"
                  )
                );
                if (isNaN(cantidaddecelulares) || cantidaddecelulares <= 0) {
                  alert("Ingrese un numero mayor a 0");
                }
              } while (cantidaddecelulares < 0);
              {
                invoppo = invoppo + cantidaddecelulares;
                break;
              }
            case 0:
              break;
          }
        }
        break;
      case 2:
        do {
          marca = parseInt(
            prompt(
              "¿Que marca desea actualizar?: \n 1. Samsung" +
                "\n 2. Iphone" +
                "\n 3. Xiaomi" +
                "\n 4. Motorola" +
                "\n 5. Huawei" +
                "\n 6. Oppo" +
                "\n 0. salir"
            )
          );
          if (isNaN(marca) || marca < 0 || marca > 6) {
            alert("por favor ingrese un numero de la lista");
          }
        } while (marca < 0 || marca > 6);
        {
          switch (marca) {
            case 1:
              do {
                cantidaddecelulares = parseInt(
                  prompt("Ingrese la cantidad de celulares que vendio:")
                );
                if (
                  isNaN(cantidaddecelulares) ||
                  cantidaddecelulares <= 0 ||
                  cantidaddecelulares > invsamsung
                ) {
                  alert(
                    `Ingrese un numero mayor a 0,pero que no exceda el inventario que es ${invsamsung}`
                  );
                }
              } while (cantidaddecelulares > invsamsung);
              {
                invsamsung = invsamsung - cantidaddecelulares;
                ventasamsung = cantidaddecelulares * preciosamsung;
                console.log(
                  `vendio un total de ${cantidaddecelulares} samsung y su costo fue de ${ventasamsung} y quedan disponibles ${invsamsung}`
                );
                break;
              }
            case 2:
              do {
                cantidaddecelulares = parseInt(
                  prompt("Ingrese la cantidad de celulares que vendio:")
                );
                if (
                  isNaN(cantidaddecelulares) ||
                  cantidaddecelulares <= 0 ||
                  cantidaddecelulares > inviphone
                ) {
                  alert(
                    `Ingrese un numero mayor a 0,pero que no exceda el inventario que es ${inviphone}`
                  );
                }
              } while (cantidaddecelulares > inviphone);
              {
                inviphone = inviphone - cantidaddecelulares;
                ventaiphone = cantidaddecelulares * precioiphone;
                console.log(
                  `vendio un total de ${cantidaddecelulares} Iphone y su costo fue de ${ventaiphone} y quedan disponibles ${inviphone}`
                );
                break;
              }
            case 3:
              do {
                cantidaddecelulares = parseInt(
                  prompt("Ingrese la cantidad de celulares que vendio:")
                );
                if (
                  isNaN(cantidaddecelulares) ||
                  cantidaddecelulares <= 0 ||
                  cantidaddecelulares > invxiaomi
                ) {
                  alert(
                    `Ingrese un numero mayor a 0,pero que no exceda el inventario que es ${invxiaomi}`
                  );
                }
              } while (cantidaddecelulares > invxiaomi);
              {
                invxiaomi = invxiaomi - cantidaddecelulares;
                ventaxiaomi = cantidaddecelulares * precioxiaomi;
                console.log(
                  `vendio un total de ${cantidaddecelulares} Xiaomi y su costo fue de ${ventaxiaomi} y quedan disponibles ${invxiaomi}`
                );
                break;
              }
            case 4:
              do {
                cantidaddecelulares = parseInt(
                  prompt("Ingrese la cantidad de celulares que vendio:")
                );
                if (
                  isNaN(cantidaddecelulares) ||
                  cantidaddecelulares <= 0 ||
                  cantidaddecelulares > invmotorola
                ) {
                  alert(
                    `Ingrese un numero mayor a 0,pero que no exceda el inventario que es ${invmotorola}`
                  );
                }
              } while (cantidaddecelulares > invmotorola);
              {
                invmotorola = invmotorola - cantidaddecelulares;
                ventamotorola = cantidaddecelulares * preciomotorola;
                console.log(
                  `vendio un total de ${cantidaddecelulares} Motorola y su costo fue de ${ventamotorola} y quedan disponibles ${invmotorola}`
                );
                break;
              }
            case 5:
              do {
                cantidaddecelulares = parseInt(
                  prompt("Ingrese la cantidad de celulares que vendio:")
                );
                if (
                  isNaN(cantidaddecelulares) ||
                  cantidaddecelulares <= 0 ||
                  cantidaddecelulares > invhuawei
                ) {
                  alert(
                    `Ingrese un numero mayor a 0,pero que no exceda el inventario que es ${invhuawei}`
                  );
                }
              } while (cantidaddecelulares > invhuawei);
              {
                invhuawei = invhuawei - cantidaddecelulares;
                ventahuawei = cantidaddecelulares * preciohuawei;
                console.log(
                  `vendio un total de ${cantidaddecelulares} Huawei y su costo fue de ${ventahuawei} y quedan disponibles ${invhuawei}`
                );
                break;
              }
            case 6:
              do {
                cantidaddecelulares = parseInt(
                  prompt("Ingrese la cantidad de celulares que vendio:")
                );
                if (
                  isNaN(cantidaddecelulares) ||
                  cantidaddecelulares <= 0 ||
                  cantidaddecelulares > invoppo
                ) {
                  alert(
                    `Ingrese un numero mayor a 0,pero que no exceda el inventario que es ${invoppo}`
                  );
                }
              } while (cantidaddecelulares > invoppo);
              {
                ventaoppo = cantidaddecelulares * preciooppo;
                invoppo = invoppo - cantidaddecelulares;
                console.log(
                  `vendio un total de ${cantidaddecelulares} Oppo y su costo fue de ${ventaoppo} y quedan disponibles ${invoppo}`
                );
                break;
              }
            case 0:
              break;
          }
          break;
        }
      case 3:
        ventastotales =
          ventasamsung +
          ventaiphone +
          ventamotorola +
          ventaxiaomi +
          ventahuawei +
          ventaoppo +
          ventastotales;
        console.log(`El total de dinero recaudado por las ventas fue de ${ventastotales}`);
        break;
      case 4:
        inventariototal =
          invsamsung +
          invxiaomi +
          inviphone +
          invmotorola +
          invhuawei +
          invoppo;
        console.log(
          `En inventario hay ${invsamsung} telefonos de Samsung` +
            `\n En inventario hay ${inviphone} telefonos de Iphone` +
            `\n En inventario hay ${invmotorola} telefonos de Motorola` +
            `\n En inventario hay ${invxiaomi} telefonos de Xiaomi` +
            `\n En inventario hay ${invoppo} telefonos de Oppo` +
            `\n En inventario hay ${invhuawei} telefonos de Huawei`
        );
        break;
      case 0:
        ciclo = -1;
        break;
    }
  }
}
