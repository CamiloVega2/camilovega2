// const triki =  [linea1,linea2,linea3]
// const linea1 = []
// const linea2 = []
// const linea3 = []
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
let a = "";
let cont = 1;

function ponericono1() {
  if (cont % 2 == 0) {
    a = "x";
  } else {
    a = "o";
  }
  if (caja1.value == undefined) {
    caja1.innerHTML = `<p class = "letra">${a}</p>`;
    caja1.removeEventListener("click", ponericono1);
  }
  cont += 1;
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
  }
  cont += 1;
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
  }
  cont += 1;
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
  }
  cont += 1;
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
  }
  cont += 1;
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
  }
  cont += 1;
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
  }
  cont += 1;
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
  }
  cont += 1;
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
  }
  cont += 1;
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

console.log(caja1);
