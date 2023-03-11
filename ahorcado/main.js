const texto = document.getElementById("cajadetexto");
const cajagrande = document.getElementById("cajagrande");
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
let ganador1 = palabraahorcado.split("", palabraahorcado.length);
let ganador = Array.apply("", Array(palabraahorcado.length));
let contwin = 0;
let contloss = 0;

for (let i = 0; i < lineas; i++) {
  palabra.innerHTML += `<div id="letra${i}" class = "text-gray-200 text-4xl flex justify-center items-center border-solid border-2 border-gray-200 border-t-transparent border-r-transparent border-l-transparent h-[5rem] w-full"></div>`;
}
function verificarletra() {
  for (let j = 0; j < palabraahorcado.length; j++) {
    if (texto.value == "" || !isNaN(texto.value)) {
      alert("ingrese una letra");
      contletras -= 1
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
          listadeletras = document.getElementById(`usada${contletras}`);
          listadeletras.innerHTML = `${texto.value}`;
          ganador.splice(hola, 1, texto.value);
          hola = "";
        }
      } else {
        if (letras.includes(texto.value)) {
          alert("esta letra ya la uso");
          contletras -= 1
          break;
        } else {
          contloss += 1;
          switch (contloss) {
            case 1:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img1.png">`;
              alert("esta letra no esta en la palabra");
              hola = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value}`;
              break;
            case 2:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img2.png">`;
              alert("esta letra no esta en la palabra");
              hola = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value}`;
              break;
            case 3:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img3.png">`;
              alert("esta letra no esta en la palabra");
              hola = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value}`;
              break;
            case 4:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img4.png">`;
              alert("esta letra no esta en la palabra");
              hola = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value}`;
              break;
            case 5:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img5.png">`;
              alert("esta letra no esta en la palabra");
              hola = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value}`;
              break;
            case 6:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img6.png">`;
              alert("esta letra no esta en la palabra");
              hola = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value}`;
              break;
          }
          if (contloss == 6) {
            alert("perdio papus");
            break;
          }

          break;
        }
      }
    }
  }
  letras.push(texto.value);
  texto.value = "";
  contletras += 1;
  for (let k = 0; k < palabraahorcado.length; k++) {
    if (ganador[k] != ganador1[k]) {
      contwin = 0;
      break;
    } else {
      contwin += 1;
      if (contwin == palabraahorcado.length) {
        alert("gano papus");
      }
    }
  }
  console.log(ganador);
  console.log(ganador1);
  console.log(contwin);
}
btn.addEventListener("click", verificarletra);
