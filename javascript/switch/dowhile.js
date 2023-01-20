let n = 0
do {n = parseFloat(prompt("Ingrese"))
} while (n < 1 || n > 3)
if (n >= 1 && n <= 3) {
    console.log("numero validado" + n)
}else{alert("este numero no es valido")}