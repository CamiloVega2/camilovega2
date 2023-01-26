/*funcion recibe 2 argumentos.
1 argumento nombre o palabra
2 argumento solo una letra
la funcion a la palbra le concatene al final y al principio la letra*/
function palabras(a1, a2) {
  return a2.concat(a1.concat(a2))
}
console.log(palabras("zunona","v"));
