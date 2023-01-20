# 2.Diseñe un algoritmo en el cual el usuario deba ingresar 2 numeros enteros n y m.
#  Estos numeros serviran para definir un intervalo. La funcion del algoritmo 
# sera sumar todos los numeros pares que se encuentren dentro del intervalo [n.m].
n = 0
m = 0
suma = 0
n = int(input('ingrese el primer numero entero'))
m = int(input('ingrese el segundo numero entero'))
maximo = max(n,m)
minimo = min(n,m)
for i in range(minimo,maximo):
    if minimo % 2 == 0:
        suma = suma+minimo
        minimo += 1
        print(minimo)
print(suma)