let notatrabajo1;
let notatrabajo2;
let notaexamenfinal;
let notaexamen1;
let notaexamen2;
let notaexamen3;
let notaautoevaluacion;
let notacoevaluacion;
let notadefinitivaexamenfinal;
let notadefinitivaautoevaluacion;
let notadefinitivatrabajos;
let notadefinitivaexamenes;
let notadefinitivaperiodo;
do {
  notatrabajo1 = parseFloat(prompt("Ingrese la nota del trabajo 1:"));
  if (notatrabajo1 > 5 || notatrabajo1 < 0) {
    alert("Nota invalida escriba una nota entre 0 y 5");
  }
} while (notatrabajo1 > 5 || notatrabajo1 < 0);
do {
  notatrabajo2 = parseFloat(prompt("Ingrese la nota del trabajo 2:"));
  if (notatrabajo2 > 5 || notatrabajo2 < 0) {
    alert("Nota invalida escriba una nota entre 0 y 5");
  }
} while (notaexamen1 > 5 || notaexamen1 < 0);
do {
  notaexamen1 = parseFloat(prompt("Ingrese la nota del examen 1:"));
  if (notaexamen1 > 5 || notaexamen1 < 0) {
    alert("Nota invalida escriba una nota entre 0 y 5");
  }
} while (notaexamen1 > 5 || notaexamen1 < 0);
do {
  notaexamen2 = parseFloat(prompt("Ingrese la nota del examen 2:"));
  if (notaexamen2 > 5 || notaexamen2 < 0) {
    alert("Nota invalida escriba una nota entre 0 y 5");
  }
} while (notaexamen2 > 5 || notaexamen2 < 0);
do {
  notaexamen3 = parseFloat(prompt("Ingrese la nota del examen 3:"));
  if (notaexamen3 > 5 || notaexamen3 < 0) {
    alert("Nota invalida escriba una nota entre 0 y 5");
  }
} while (notaexamen3 > 5 || notaexamen3 < 0);
do {
  notaexamenfinal = parseFloat(prompt("Ingrese la nota del examen final:"));
  if (notaexamenfinal > 5 || notaexamenfinal < 0) {
    alert("Nota invalida escriba una nota entre 0 y 5");
  }
} while (notaexamenfinal > 5 || notaexamenfinal < 0);
do {
  notaautoevaluacion = parseFloat(
    prompt("Ingrese la nota de la autoevaluacion:")
  );
  if (notaautoevaluacion > 5 || notaautoevaluacion < 0) {
    alert("Nota invalida escriba una nota entre 0 y 5");
  }
} while (notaautoevaluacion > 5 || notaautoevaluacion < 0);
do {
  notacoevaluacion = parseFloat(prompt("Ingrese la nota de la coevaluacion:"));
  if (notacoevaluacion > 5 || notacoevaluacion < 0) {
    alert("Nota invalida escriba una nota entre 0 y 5");
  }
} while (notacoevaluacion > 5 || notacoevaluacion < 0);
notadefinitivaexamenfinal = (notaexamenfinal * 20) / 100;
notadefinitivaautoevaluacion =
  (((notaautoevaluacion + notacoevaluacion) / 2) * 10) / 100;
notadefinitivatrabajos = (((notatrabajo1 + notatrabajo2) / 2) * 15) / 100;
notadefinitivaexamenes =
  (((notaexamen1 + notaexamen2 + notaexamen3) / 3) * 55) / 100;
notadefinitivaperiodo =
  notadefinitivatrabajos +
  notadefinitivaexamenes +
  notadefinitivaexamenfinal +
  notadefinitivaautoevaluacion;
if (notadefinitivaperiodo >= 4.7) {
  console.log(
    "El estudiante aprobo y saco: " +
      notadefinitivaperiodo.toFixed(2) +
      " y esta en el nivel superior."
  );
} else {
  if (notadefinitivaperiodo >= 4.0) {
    console.log(
      "El estudiante aprobo y saco: " +
        notadefinitivaperiodo.toFixed(2) +
        " y esta en el nivel alto."
    );
  } else {
    if (notadefinitivaperiodo >= 3.0) {
      console.log(
        "El estudiante aprobo y saco: " +
          notadefinitivaperiodo.toFixed(2) +
          " y esta en el nivel basico"
      );
    } else {
      if (notadefinitivaperiodo >= 2.0) {
        console.log(
          "El estudiante reprobo y saco: " +
            notadefinitivaperiodo.toFixed(2) +
            " y esta en el nivel bajo"
        );
      } else {
        console.log(
          "El estudiante reprobo y saco: " +
            notadefinitivaperiodo.toFixed(2) +
            " y esta en el nivel muy bajo"
        );
      }
    }
  }
}
