# //3.Diseñe un algoritmo en el cual solicite al usuario un numero entero positivo mayor a
# //10 y menor a 15 despues debe calcular el factorial de este numero
# //e imprimirlo en pantalla.
numero1 = 0
factorial = 0
resultado = 1
numero1 = int(
       input(
            "Ingrese un numero positivo mayor a 10 y menor a 15 para calcular el factorial"
        )
       )
while True:
    if numero1 > 9 and numero1 < 16:
      for i in range(0, numero1):
        factorial += 1
        resultado *= factorial
      print(resultado)
      break
    else:
      if numero1 > 15 or numero1 < 10:
          print('este numero no es valido')
      numero1 = int(
       input(
            "Ingrese un numero positivo mayor a 10 y menor a 15 para calcular el factorial"
        )
       )
