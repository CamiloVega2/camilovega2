function reemplazar(p1, l1, l2) {
  if (p1.includes(l1)) {
    return p1.replaceAll(l1, l2.toUpperCase());
  } else {
    alert(`la palabra ${p1} no contiene la letra ${l1}`);
  }
}

console.log(reemplazar("zunono", "o", "x"));
