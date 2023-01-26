# 5. Diseñe un algoritmo que reciba un numero entero positivo mayor a 100 y
#  luego imprima todos los numeros primos que hay antes de ese numero ingresado.

numero1 = 0
ciclo = True
numero1 = int(
    input('Ingrese el numero mayor a 100 al que le desea hallar los numeros primos'))
while ciclo:
    if numero1 < 100:
        print('Este numero no es valido favor ingresar uno mayor a 100')
        numero1 = int(
            input('Ingrese el numero mayor a 100 al que le desea hallar los numeros primos'))      
    while numero1 > 100:
        if numero1 > 100:
            for x in range(0, (numero1+1)):
                primo1 = (x/2)
                primo2 = (x/3)
                primo3 = (x/5)
                primo4 = (x/7)
                if primo1.is_integer() == 1 and x == 2:
                    print(x)
                    continue
                if primo2.is_integer() == 1 and x == 3:
                    print(x)
                    continue
                if primo3.is_integer() == 1 and x == 5:
                    print(x)
                    continue
                if primo4.is_integer() == 1 and x == 7:
                    print(x)
                    continue
                else:
                    if primo1.is_integer():
                        continue
                    if primo2.is_integer():
                        continue
                    if primo3.is_integer():
                        continue
                    if primo4.is_integer():
                        continue
                    else:
                        print(x) 
        numero1 = 0
    break
                