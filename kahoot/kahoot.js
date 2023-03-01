const preguntas = {
  preguntas: [
    {
      pregunta: "¿Qué videojuego fue primero?",
      opciones: {
        a: "Pac-man",
        b: "Tetris",
        c: "Pong",
        d: "Donkey Kong",
      },
      respuesta_correcta: "c",
    },
    {
      pregunta: "¿Cómo se llama el hermano de Mario Bros?",
      opciones: {
        a: "Luigi",
        b: "Mario Jr.",
        c: "Honguito",
        d: "Luis",
      },
      respuesta_correcta: "a",
    },
    {
      pregunta: "¿Cuántos luchadores hay en Street Figther II?",
      opciones: {
        a: "12",
        b: "8",
        c: "4",
        d: "16",
      },
      respuesta_correcta: "a",
    },
    {
      pregunta: "¿Cuántas entradas para mandos tiene Nintendo 64?",
      opciones: {
        a: "2",
        b: "1",
        c: "4",
        d: "6",
      },
      respuesta_correcta: "c",
    },
    {
      pregunta:
        "¿Cuál es el material de la primera espada que recibes en The Legend of Zelda?",
      opciones: {
        a: "Hueso",
        b: "Madera",
        c: "Hierro",
        d: "Acero",
      },
      respuesta_correcta: "b",
    },
  ],
};
const contenedor = document.getElementById("contenedor")
const pregunta = document.getElementById("pregunta");
const A = document.getElementById("opcion1");
const B = document.getElementById("opcion2");
const C = document.getElementById("opcion3");
const D = document.getElementById("opcion4");
let cont = 0;
const pregunta1 = preguntas.preguntas[0].pregunta;
const opciona1 = preguntas.preguntas[0].opciones.a;
const opcionb1 = preguntas.preguntas[0].opciones.b;
const opcionc1 = preguntas.preguntas[0].opciones.c;
const opciond1 = preguntas.preguntas[0].opciones.d;
const respuesta_correcta1 = preguntas.preguntas[0].opciones.c;

const pregunta2 = preguntas.preguntas[1].pregunta;
const opciona2 = preguntas.preguntas[1].opciones.a;
const opcionb2 = preguntas.preguntas[1].opciones.b;
const opcionc2 = preguntas.preguntas[1].opciones.c;
const opciond2 = preguntas.preguntas[1].opciones.d;
const respuesta_correcta2 = preguntas.preguntas[1].opciones.a;

const pregunta3 = preguntas.preguntas[2].pregunta;
const opciona3 = preguntas.preguntas[2].opciones.a;
const opcionb3 = preguntas.preguntas[2].opciones.b;
const opcionc3 = preguntas.preguntas[2].opciones.c;
const opciond3 = preguntas.preguntas[2].opciones.d;
const respuesta_correcta3 = preguntas.preguntas[2].opciones.a;

const pregunta4 = preguntas.preguntas[3].pregunta;
const opciona4 = preguntas.preguntas[3].opciones.a;
const opcionb4 = preguntas.preguntas[3].opciones.b;
const opcionc4 = preguntas.preguntas[3].opciones.c;
const opciond4 = preguntas.preguntas[3].opciones.d;
const respuesta_correcta4 = preguntas.preguntas[3].opciones.c;

const pregunta5 = preguntas.preguntas[4].pregunta;
const opciona5 = preguntas.preguntas[4].opciones.a;
const opcionb5 = preguntas.preguntas[4].opciones.b;
const opcionc5 = preguntas.preguntas[4].opciones.c;
const opciond5 = preguntas.preguntas[4].opciones.d;
const respuesta_correcta5 = preguntas.preguntas[4].opciones.b;
let buenas = 0;
let malas = 0;

function respuestas1() {
  if (cont == 0) {
    alert("respuesta incorrecta");
    pregunta.innerText = `${pregunta2}`;
    A.innerText = `A.${opciona2}`;
    B.innerText = `B.${opcionb2}`;
    C.innerText = `C.${opcionc2}`;
    D.innerText = `D.${opciond2}`;
    malas += 1;
    cont += 1;
  } else {
    if (cont == 1) {
      alert("respuesta correcta");
      pregunta.innerText = `${pregunta3}`;
      A.innerText = `A.${opciona3}`;
      B.innerText = `B.${opcionb3}`;
      C.innerText = `C.${opcionc3}`;
      D.innerText = `D.${opciond3}`;
      buenas += 1;
      cont += 1;
    } else {
      if (cont == 2) {
        alert("respuesta correcta");
        pregunta.innerText = `${pregunta4}`;
        A.innerText = `A.${opciona4}`;
        B.innerText = `B.${opcionb4}`;
        C.innerText = `C.${opcionc4}`;
        D.innerText = `D.${opciond4}`;
        cont += 1;
        buenas += 1;
      } else {
        if (cont == 3) {
          alert("respuesta incorrecta");
          pregunta.innerText = `${pregunta5}`;
          A.innerText = `A.${opciona5}`;
          B.innerText = `B.${opcionb5}`;
          C.innerText = `C.${opcionc5}`;
          D.innerText = `D.${opciond5}`;
          malas += 1;
          cont += 1;
        } else {
          if (cont == 4) {
            malas += 1;
            alert("respuesta incorrecta");
            contenedor.innerHTML =`<div class ="h-screen flex-col flex justify-center items-center bg-neutral-200"><p class = "mr-[30px] ml-[30px] rounded-[30px] pb-[100px] pt-[100px] text-center w-full bg-green-300">Respuestas correctas: ${buenas}</p><p class = "mr-[30px] ml-[30px] rounded-[30px] pb-[100px] pt-[100px] text-center w-full bg-red-300">Respuestas incorrectas: ${malas}</p></div>`
            cont += 1;
          }
        }
      }
    }
  }
}
function respuestas2() {
  if (cont == 0) {
    alert("respuesta incorrecta");
    pregunta.innerText = `${pregunta2}`;
    A.innerText = `A.${opciona2}`;
    B.innerText = `B.${opcionb2}`;
    C.innerText = `C.${opcionc2}`;
    D.innerText = `D.${opciond2}`;
    malas += 1;
    cont += 1;
  } else {
    if (cont == 1) {
      alert("respuesta incorrecta");
      pregunta.innerText = `${pregunta3}`;
      A.innerText = `A.${opciona3}`;
      B.innerText = `B.${opcionb3}`;
      C.innerText = `C.${opcionc3}`;
      D.innerText = `D.${opciond3}`;
      malas += 1;
      cont += 1;
    } else {
      if (cont == 2) {
        alert("respuesta incorrecta");
        pregunta.innerText = `${pregunta4}`;
        A.innerText = `A.${opciona4}`;
        B.innerText = `B.${opcionb4}`;
        C.innerText = `C.${opcionc4}`;
        D.innerText = `D.${opciond4}`;
        malas += 1;
        cont += 1;
      } else {
        if (cont == 3) {
          alert("respuesta incorrecta");
          pregunta.innerText = `${pregunta5}`;
          A.innerText = `A.${opciona5}`;
          B.innerText = `B.${opcionb5}`;
          C.innerText = `C.${opcionc5}`;
          D.innerText = `D.${opciond5}`;
          malas += 1;
          cont += 1;
        } else {
          if (cont == 4) {
            buenas += 1;
            alert("respuesta correcta");
            contenedor.innerHTML =`<div class ="h-screen flex-col flex justify-center items-center bg-neutral-200"><p class = "mr-[30px] ml-[30px] rounded-[30px] pb-[100px] pt-[100px] text-center w-full bg-green-300">Respuestas correctas: ${buenas}</p><p class = "mr-[30px] ml-[30px] rounded-[30px] pb-[100px] pt-[100px] text-center w-full bg-red-300">Respuestas incorrectas: ${malas}</p></div>`
            cont += 1;
          }
        }
      }
    }
  }
}
function respuestas3() {
  if (cont == 0) {
    alert("respuesta correcta");
    pregunta.innerText = `${pregunta2}`;
    A.innerText = `A.${opciona2}`;
    B.innerText = `B.${opcionb2}`;
    C.innerText = `C.${opcionc2}`;
    D.innerText = `D.${opciond2}`;
    buenas += 1;
    cont += 1;
  } else {
    if (cont == 1) {
      alert("respuesta incorrecta");
      pregunta.innerText = `${pregunta3}`;
      A.innerText = `A.${opciona3}`;
      B.innerText = `B.${opcionb3}`;
      C.innerText = `C.${opcionc3}`;
      D.innerText = `D.${opciond3}`;
      malas += 1;
      cont += 1;
    } else {
      if (cont == 2) {
        alert("respuesta incorrecta");
        pregunta.innerText = `${pregunta4}`;
        A.innerText = `A.${opciona4}`;
        B.innerText = `B.${opcionb4}`;
        C.innerText = `C.${opcionc4}`;
        D.innerText = `D.${opciond4}`;
        malas += 1;
        cont += 1;
      } else {
        if (cont == 3) {
          alert("respuesta correcta");
          pregunta.innerText = `${pregunta5}`;
          A.innerText = `A.${opciona5}`;
          B.innerText = `B.${opcionb5}`;
          C.innerText = `C.${opcionc5}`;
          D.innerText = `D.${opciond5}`;
          buenas += 1;
          cont += 1;
        } else {
          if (cont == 4) {
            malas += 1;
            alert("respuesta incorrecta");
            contenedor.innerHTML =`<div class ="h-screen flex-col flex justify-center items-center bg-neutral-200"><p class = "mr-[30px] ml-[30px] rounded-[30px] pb-[100px] pt-[100px] text-center w-full bg-green-300">Respuestas correctas: ${buenas}</p><p class = "mr-[30px] ml-[30px] rounded-[30px] pb-[100px] pt-[100px] text-center w-full bg-red-300">Respuestas incorrectas: ${malas}</p></div>`
            cont += 1;
          }
        }
      }
    }
  }
}
function respuestas4() {
  if (cont == 0) {
    alert("respuesta incorrecta");
    pregunta.innerText = `${pregunta2}`;
    A.innerText = `A.${opciona2}`;
    B.innerText = `B.${opcionb2}`;
    C.innerText = `C.${opcionc2}`;
    D.innerText = `D.${opciond2}`;
    malas += 1;
    cont += 1;
  } else {
    if (cont == 1) {
      alert("respuesta incorrecta");
      pregunta.innerText = `${pregunta3}`;
      A.innerText = `A.${opciona3}`;
      B.innerText = `B.${opcionb3}`;
      C.innerText = `C.${opcionc3}`;
      D.innerText = `D.${opciond3}`;
      malas += 1;
      cont += 1;
    } else {
      if (cont == 2) {
        alert("respuesta incorrecta");
        pregunta.innerText = `${pregunta4}`;
        A.innerText = `A.${opciona4}`;
        B.innerText = `B.${opcionb4}`;
        C.innerText = `C.${opcionc4}`;
        D.innerText = `D.${opciond4}`;
        malas += 1;
        cont += 1;
      } else {
        if (cont == 3) {
          alert("respuesta incorrecta");
          pregunta.innerText = `${pregunta5}`;
          A.innerText = `A.${opciona5}`;
          B.innerText = `B.${opcionb5}`;
          C.innerText = `C.${opcionc5}`;
          D.innerText = `D.${opciond5}`;
          malas += 1;
          cont += 1;
        } else {
          if (cont == 4) {
            malas += 1;
            alert("respuesta incorrecta");
            contenedor.innerHTML =`<div class ="h-screen flex-col flex justify-center items-center bg-neutral-200"><p class = "mr-[30px] ml-[30px] rounded-[30px] pb-[100px] pt-[100px] text-center w-full bg-green-300">Respuestas correctas: ${buenas}</p><p class = "mr-[30px] ml-[30px] rounded-[30px] pb-[100px] pt-[100px] text-center w-full bg-red-300">Respuestas incorrectas: ${malas}</p></div>`
            cont += 1;
          }
        }
      }
    }
  }
}
A.addEventListener("click", respuestas1);
B.addEventListener("click", respuestas2);
C.addEventListener("click", respuestas3);
D.addEventListener("click", respuestas4);
