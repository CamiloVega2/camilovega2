# 4. Diseñe un menu de opciones para simular una calculadora con las siguientes operaciones:
# 	1. Sumar 2 numeros
# 	2. Restar 3 numeros
# 	3. Multiplicar 2 numeros
# 	4. Dividir 2 numeros  ( el divisor debe ser diferente de 0 )
# 	0. Salir de la calculadora
# Cuando el usuario desee salir de la calculadora debe mostrar un mensaje de despedida en la consola.
decision = 0
suma = 0
resta = 0
multiplicacion = 0
division = 0
numero1 = 0
numero2 = 0
numero3 = 0
decision = int(input(
    'Ingrese la operacion que desea realizar: \n 1. sumar 2 numeros \n 2. restar 3 numeros \n 3. multiplicar 2 numeros \n 4. dividir 2 numeros \n 0. salir de la calculadora'))
while True:
    if decision == 1:
        numero1 = int(input('Ingrese el primer numero'))
        numero2 = int(input('Ingrese el segundo numero'))
        suma = numero1 + numero2
        print('El resultado de la suma es: ' + str(suma))
        break
    if decision == 2:
        numero1 = int(input('Ingrese el primer numero'))
        numero2 = int(input('Ingrese el segundo numero'))
        numero3 = int(input('Ingrese el tercer numero'))
        resta = numero1 - numero2 - numero3
        print('El resultado de la resta es: ' + str(resta))
        break
    if decision == 3:
        numero1 = int(input('Ingrese el primer numero'))
        numero2 = int(input('Ingrese el segundo numero'))
        multiplicacion = numero1 * numero2
        print('El resultado de la multiplicacion es: ' + str(multiplicacion))
        break
    if decision == 4:
        numero1 = int(input('Ingrese el primer numero'))
        numero2 = int(
            input('Ingrese el segundo numero (debe ser diferente de 0)'))
        while numero2:
            if numero2 == 0:
                print('Este numero no es valido por favor digite uno diferente de 0')
                numero2 = int(
            input('Ingrese el segundo numero (debe ser diferente de 0)'))
                break
            else:
                division = numero1 / numero2
                print('El resultado de la division es: ' + str(division))
                numero2 = False
                break
        break
    if decision == 0:
        print('Muchas gracias por usar nuestra calculadora')
        break
    if decision > 4 or decision < 0:
        print('Este numero es invalido por favor ponga un numero valido')
        decision = int(input(
            'Ingrese la operacion que desea realizar: \n 1. sumar 2 numeros \n 2. restar 3 numeros \n 3. multiplicar 2 numeros \n 4. dividir 2 numeros \n 0. salir de la calculadora'))

