const arreglodepalabras = [
  "caballero",
  "vega",
  "reales",
  "siria",
  "india",
  "tulia",
  "velez",
];
const letra1 = "a";
function vamosaver(palabras, letra) {
  if (palabras.includes(letra)) {
    return palabras.map((el) => {
      el.replaceAll(letra);
    });
  }
}
console.log(vamosaver(arreglodepalabras, letra1));
