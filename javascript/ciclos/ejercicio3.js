let inicio = 1;
let fin = 100;
for (let i = 0; i < 5; i++) {
  random = inicio + Math.floor(Math.random() * fin);
  console.log("El numero aleatorio es de:" + random)
}
