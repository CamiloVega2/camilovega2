let inicio = 0;
let fin = 10;
let aleatorio = 0
do {
  aleatorio = Math.floor(Math.random() * fin + inicio);
  console.log("el numero aleatorio es:" + aleatorio);
} while (aleatorio != 0);
