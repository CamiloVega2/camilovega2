const texto = document.getElementById("cajadetexto");
const btn = document.getElementById("btn");
const palabra = document.getElementById("palabra");
const palabras = [
  "analisis",
  "investigacion",
  "matematica",
  "ciencia",
  "metodologia",
  "trabajo",
  "ensayo",
  "escrito",
  "llorelo",
  "computador",
];
const numero = Math.floor(Math.random() * palabras.length);
const palabraahorcado = palabras[numero];
const lineas = palabras[numero].length;
let letra = "";
let hola = 0;
let añadirletra = document.getElementById("input");
let letras = [];
let contletras = 1;
let listadeletras = document.getElementById("texto");
let contwin = 0;

for (let i = 0; i < lineas; i++) {
  palabra.innerHTML += `<div id="letra${i}" class = "text-4xl flex justify-center items-center border-solid border-2 border-black border-t-transparent border-r-transparent border-l-transparent h-[5rem] w-full"></div>`;
}
function verificarletra() {
  for (let j = 0; j < palabraahorcado.length; j++) {
    if (texto.value == "" || !isNaN(texto.value)) {
      alert("ingrese una letra");
      break;
    } else {
      if (
        palabraahorcado.includes(texto.value) &&
        !letras.includes(texto.value)
      ) {
        hola = palabraahorcado.indexOf(texto.value, j);
        if (hola >= 0) {
          añadirletra = document.getElementById(`letra${hola}`);
          añadirletra.innerHTML = `${texto.value}`;
          hola = "";
          listadeletras = document.getElementById(`usada${contletras}`);
          listadeletras.innerHTML = `${texto.value}`;
        }
      } else {
        if (letras.includes(texto.value)) {
          alert("esta letra ya la uso");
          break;
        } else {
          alert("esta letra no esta en la palabra");
          hola = "";
          listadeletras = document.getElementById(`usada${contletras}`);
          listadeletras.innerHTML = `${texto.value}`;
          break;
        }
      }
    }
  }
  letras.push(texto.value);
  texto.value = "";
  contletras += 1;
}
function ganador() {
  for (let k = 0; k < palabraahorcado.length; k++) {
    if (isNaN(document.getElementById(`letra${k}`).value)) {
      contwin += 1;
    } else {
      break;
    }
  }
  if (contwin == palabraahorcado.length) {
    alert("ha ganado wey");
  }
}

btn.addEventListener("click", () =>{
  verificarletra();
  ganador();
});
