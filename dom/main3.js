let triki = ["", "", "", "", "", "", "", "", ""];
const caja1 = document.getElementById("cajita1");
const caja2 = document.getElementById("cajita2");
const caja3 = document.getElementById("cajita3");
const caja4 = document.getElementById("cajita4");
const caja5 = document.getElementById("cajita5");
const caja6 = document.getElementById("cajita6");
const caja7 = document.getElementById("cajita7");
const caja8 = document.getElementById("cajita8");
const caja9 = document.getElementById("cajita9");
const caja = document.getElementById("contenedor");
const ganador = document.getElementById("ganador");
let a = "";
let cont = 1;

function validacion159() {
  if (triki[0] == triki[4] && triki[0] == triki[8]) {
    ganador.innerHTML = `<p id="textoganador">El ganador es: ${a}</p><button id="submit">Reset</button>`;
    remover();const btn = document.getElementById("submit");btn.addEventListener("click", resetear);
  }
}
function validacion123() {
  if (triki[0] == triki[1] && triki[0] == triki[2]) {
    ganador.innerHTML = `<p id="textoganador">El ganador es: ${a}</p><button id="submit">Reset</button>`;
    remover();const btn = document.getElementById("submit");btn.addEventListener("click", resetear);
  }
}
function validacion147() {
  if (triki[0] == triki[3] && triki[0] == triki[6]) {
    ganador.innerHTML = `<p id="textoganador">El ganador es: ${a}</p><button id="submit">Reset</button>`;
    remover();const btn = document.getElementById("submit");btn.addEventListener("click", resetear);
  }
}
function validacion258() {
  if (triki[1] == triki[4] && triki[1] == triki[7]) {
    ganador.innerHTML = `<p id="textoganador">El ganador es: ${a}</p><button id="submit">Reset</button>`;
    remover();const btn = document.getElementById("submit");btn.addEventListener("click", resetear);
  }
}
function validacion357() {
  if (triki[2] == triki[4] && triki[2] == triki[6]) {
    ganador.innerHTML = `<p id="textoganador">El ganador es: ${a}</p><button id="submit">Reset</button>`;
    remover();const btn = document.getElementById("submit");btn.addEventListener("click", resetear);
  }
}
function validacion456() {
  if (triki[3] == triki[4] && triki[3] == triki[5]) {
    ganador.innerHTML = `<p id="textoganador">El ganador es: ${a}</p><button id="submit">Reset</button>`;
    remover();const btn = document.getElementById("submit");btn.addEventListener("click", resetear);
  }
}
function validacion369() {
  if (triki[2] == triki[5] && triki[2] == triki[8]) {
    ganador.innerHTML = `<p id="textoganador">El ganador es: ${a}</p><button id="submit">Reset</button>`;
    remover();const btn = document.getElementById("submit");btn.addEventListener("click", resetear);
  }
}
function validacion789() {
  if (triki[6] == triki[7] && triki[6] == triki[8]) {
    ganador.innerHTML = `<p id="textoganador">El ganador es: ${a}</p><button id="submit">Reset</button>`;
    remover();const btn = document.getElementById("submit");btn.addEventListener("click", resetear);
  }
}
function ponericono1() {
  if (cont % 2 == 0) {
    a = "x";
  } else {
    a = "o";
  }
  if (caja1.value == undefined) {
    caja1.innerHTML = `<p class = "letra">${a}</p>`;
    caja1.removeEventListener("click", ponericono1);
    triki.splice(0, 1, a);
    cont += 1;
  }
  validacion159();
  validacion123();
  validacion147();
}
function ponericono2() {
  if (cont % 2 == 0) {
    a = "x";
  } else {
    a = "o";
  }
  if (caja2.value == undefined) {
    caja2.innerHTML = `<p class = "letra">${a}</p>`;
    caja2.removeEventListener("click", ponericono2);
    triki.splice(1, 1, a);
    cont += 1;
  }
  validacion123();
  validacion258();
}
function ponericono3() {
  if (cont % 2 == 0) {
    a = "x";
  } else {
    a = "o";
  }
  if (caja3.value == undefined) {
    caja3.innerHTML = `<p class = "letra">${a}</p>`;
    caja3.removeEventListener("click", ponericono3);
    triki.splice(2, 1, a);
    cont += 1;
  }
  validacion123();
  validacion357();
  validacion369();
}
function ponericono4() {
  if (cont % 2 == 0) {
    a = "x";
  } else {
    a = "o";
  }
  if (caja4.value == undefined) {
    caja4.innerHTML = `<p class = "letra">${a}</p>`;
    caja4.removeEventListener("click", ponericono4);
    triki.splice(3, 1, a);
    cont += 1;
  }
  validacion147();
  validacion456();
}
function ponericono5() {
  if (cont % 2 == 0) {
    a = "x";
  } else {
    a = "o";
  }
  if (caja5.value == undefined) {
    caja5.innerHTML = `<p class = "letra">${a}</p>`;
    caja5.removeEventListener("click", ponericono5);
    triki.splice(4, 1, a);
    cont += 1;
  }
  validacion159();
  validacion258();
  validacion357();
}
function ponericono6() {
  if (cont % 2 == 0) {
    a = "x";
  } else {
    a = "o";
  }
  if (caja6.value == undefined) {
    caja6.innerHTML = `<p class = "letra">${a}</p>`;
    caja6.removeEventListener("click", ponericono6);
    triki.splice(5, 1, a);
    cont += 1;
  }
  validacion369();
  validacion456();
}
function ponericono7() {
  if (cont % 2 == 0) {
    a = "x";
  } else {
    a = "o";
  }
  if (caja7.value == undefined) {
    caja7.innerHTML = `<p class = "letra">${a}</p>`;
    caja7.removeEventListener("click", ponericono7);
    triki.splice(6, 1, a);
    cont += 1;
  }
  validacion147();
  validacion357();
  validacion789();
}
function ponericono8() {
  if (cont % 2 == 0) {
    a = "x";
  } else {
    a = "o";
  }
  if (caja8.value == undefined) {
    caja8.innerHTML = `<p class = "letra">${a}</p>`;
    caja8.removeEventListener("click", ponericono8);
    triki.splice(7, 1, a);
    cont += 1;
  }
  validacion258();
  validacion789();
}
function ponericono9() {
  if (cont % 2 == 0) {
    a = "x";
  } else {
    a = "o";
  }
  if (caja9.value == undefined) {
    caja9.innerHTML = `<p class = "letra">${a}</p>`;
    caja9.removeEventListener("click", ponericono9);
    triki.splice(8, 1, a);
    cont += 1;
  }
  validacion159();
  validacion369();
}
function resetear() {
document.getElementById("cajita1").innerHTML = ""
document.getElementById("cajita2").innerHTML = ""
document.getElementById("cajita3").innerHTML = ""
document.getElementById("cajita4").innerHTML = ""
document.getElementById("cajita5").innerHTML = ""
document.getElementById("cajita6").innerHTML = ""
document.getElementById("cajita7").innerHTML = ""
document.getElementById("cajita8").innerHTML = ""
document.getElementById("cajita9").innerHTML = ""
document.getElementById("ganador").innerHTML = ""
triki = ["", "", "", "", "", "", "", "", ""]
caja1.addEventListener("click", ponericono1);
caja2.addEventListener("click", ponericono2);
caja3.addEventListener("click", ponericono3);
caja4.addEventListener("click", ponericono4);
caja5.addEventListener("click", ponericono5);
caja6.addEventListener("click", ponericono6);
caja7.addEventListener("click", ponericono7);
caja8.addEventListener("click", ponericono8);
caja9.addEventListener("click", ponericono9);
console.log(triki);
}


caja1.addEventListener("click", ponericono1);
caja2.addEventListener("click", ponericono2);
caja3.addEventListener("click", ponericono3);
caja4.addEventListener("click", ponericono4);
caja5.addEventListener("click", ponericono5);
caja6.addEventListener("click", ponericono6);
caja7.addEventListener("click", ponericono7);
caja8.addEventListener("click", ponericono8);
caja9.addEventListener("click", ponericono9);

function remover() {
  caja1.removeEventListener("click", ponericono1);
  caja2.removeEventListener("click", ponericono2);
  caja3.removeEventListener("click", ponericono3);
  caja4.removeEventListener("click", ponericono4);
  caja5.removeEventListener("click", ponericono5);
  caja6.removeEventListener("click", ponericono6);
  caja7.removeEventListener("click", ponericono7);
  caja8.removeEventListener("click", ponericono8);
  caja9.removeEventListener("click", ponericono9);
}
