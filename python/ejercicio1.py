# 1.Desarrolle un algoritmo que permita leer 3 números enteros. 
# El algoritmo debe imprimir cual es el numero mayor 
# y cual es el numero menor entre los 3.
# Ademas ninguno de los 3 numeros ingresados pueden ser iguales. 
# En caso de que el usuario ingrese 2 numeros iguales debe mostrar una alerta.
# -*- coding: utf-8 -*-
#
#  operadores.py
#enconding: utf-8
numero1 = input('Ingrese el numero 1:')
if not str.isdigit(numero1) == int:
    print('el numero debe ser entero')
else:
    print('el numero es entero')