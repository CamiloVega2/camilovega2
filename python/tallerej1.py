numero1 = 0
numero2 = 1
numero3 = 0
sucesion = int(
    input('Ingrese cuantos numeros de la sucesion quiere ver:'))
for i in range(0, sucesion):
    numero3 = numero1
    numero1 = numero2+numero3
    numero2 = numero3
    print(numero3)
