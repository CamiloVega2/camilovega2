# #6. Un comerciante desea aplicar un descuento a sus productos en funcion a sus precios 
# de la siguiente manera:

# 	1. Si el precio es menor a $100 el 10%
# 	2. Si el precio es mayor a $100 y menor a $200 el 20%
# 	3. Si el precio es mayor a $200 el 25%

# Es su deber como desarrollador escribir un algoritmo que le permita al comerciante
#  ingresar la cantidad de productos y el precio de cada uno. El algoritmo
# tambien debe imprimir en pantalla el calculo de los descuentos.
producto = 0
precio = 0
cantidaddeproductos = 0
descuento = 0
ciclo = True
while ciclo:
    cantidaddeproductos = int(input("Ingrese la cantidad de productos"))
    if cantidaddeproductos <= 0:
        print("Este numero no es valido por favor ingresar un numero mayor a 0")
        cantidaddeproductos = int(input("Ingrese la cantidad de productos"))
    while cantidaddeproductos > 0:
        for i in range(0,cantidaddeproductos):
            producto = input("Ingrese el nombre del producto")
            if not producto.isalpha():
                print("Este nombre no es valido")
            while producto.isalpha():
                precio = input("Ingrese el precio del producto")
                if not precio.isnumeric():
                    print("Asegurese de que el precio sea un numero")
                while precio.isnumeric():       
                    precio = int(precio)
                    if precio < 100:     
                        descuento = (precio * 0.1)    
                        print("El articulo " , producto , "tiene un precio de ", precio , " con un descuento del ", descuento , " y el total a pagar es ", precio-descuento)
                        precio = str(precio)
                        break
                    if precio > 100 and precio < 200:     
                        descuento = (precio * 0.2)    
                        print("El articulo " , producto , "tiene un precio de ", precio , " con un descuento del ", descuento , " y el total a pagar es ", precio-descuento)
                        precio = str(precio)
                        break         
                    if precio > 200:
                        descuento = (precio * 0.25)    
                        print("El articulo " , producto , "tiene un precio de " , precio , "con un descuento del ", descuento , " y el total a pagar es ", precio-descuento)
                        precio = str(precio)
                        break
                    break          
                break  
        break 
    ciclo = False
