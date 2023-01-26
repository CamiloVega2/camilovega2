function revisarletra(palabra, letra) {
  if (palabra.includes(letra)) {
    console.log(`la palabra ${palabra} contiene: ${letra}`);
  } else {
    console.log(`la palabra ${palabra} no contiene: ${letra}`);
  }
}
revisarletra("zunona","o")
