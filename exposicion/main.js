const fruits = ["banana", "orange", "apple"];
const numbers = [20, 32, 53, 12];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);
/*to string*/
console.log(fruits.toString());
/* join */
console.log(fruits.join("+"));
/* .pop*/
console.log(fruits.pop());
console.log(fruits);
/* .push()*/
fruits.push("pineapple");
console.log(fruits);
/*.shift() .unshirft()*/
fruits.shift();
console.log(fruits);
fruits.unshift("lemon");
console.log(fruits);
/* .concat()*/
const fruits2 = ["pear", "kiwi", "strawberry"];
const fruits3 = fruits.concat(fruits2);
console.log(fruits3);
/* .splice()*/
fruits.splice(2, 0, "blacberry", "tangerine");
console.log(fruits);
/* .slice()*/
const fruits4 = fruits3.slice(2);
console.log(fruits4);
/* .sort()* .reverse()*/
console.log(fruits.sort());
console.log(fruits.reverse());
/* .forEach()*/
fruits.forEach((el) => {
  if (el.includes("b")) {
    console.log(el);
  } else {
    console.log("no");
  }
});
/* .map()*/
const fruits5 = fruits.map((el) => {
  if (el.includes("o")) {
    return el;
  } else {
    return (el = 1);
  }
});
console.log(fruits5);
/* .filter()*/
const includesg = fruits.filter((el) => {
  if (el.includes("g")) {
    return el;
  }
});
console.log(includesg);
/* .reduce()* reduceRight()*/
const suma = numbers.reduce((a, b) => {
  return a + b;
});
console.log(suma);
const resta = numbers.reduceRight((a, b) => {
  return a - b;
});
console.log(resta);
/* .every() */
const over20 = numbers.every((el) => {
  if (el > 20) {
    return el;
  }
});
console.log(over20);
const under20 = numbers.some((el) => {
  if (el > 20) {
    return el;
  }
});
console.log(under20);
/* .indexOf() */
const numeroDondeExiste = fruits.indexOf("lemon");
console.log(numeroDondeExiste);
/* .find()*/
const first = numbers.find((el) => {
  if (el > 20) {
    return el;
  }
});
console.log(first);
/* .includes()*/
console.log(fruits.includes("banana"));
 