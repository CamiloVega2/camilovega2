# un zoologo pretende determinar el porcentaje de animales qu hay en las siguientes tres actegorias de edades : 0-1 años, 1-3 años, +3años.
# el zoologico todavia no esta seguro del animal que va a estudiar.
# si se decide por elefantes solo tomara una muestra de 20 de ellos, si se decide por las jirafas tomara 15, si son chimpances seran 40
edad = 0
i = 0
cont1 = 0
cont2 = 0
cont3 = 0
animal = 0

while animal < 4 or animal > 0:
    animal = int(input(
        'ingrese el animal que va a estudiar: \n 1. elefantes \n 2. jirafas \n 3. chimpances'))
    if animal > 3 or animal < 1:
        print('este numero no es valido')
    else:
        edad = int(input(
                'ingrese el rango de edad en el que esta: \n 1. 0-1 year \n 2. 1-3 years \n 3. +3 years'))
        while edad < 4 or edad > 0:
            edad = int(float(input(
                'ingrese el rango de edad en el que esta: \n 1. 0-1 year \n 2. 1-3 years \n 3. +3 years')))
            if edad > 3 or animal < 1:
                print('este numero no es valido')
            else:
                for i in range(0, 2):
                    if edad == 1:
                        cont1 += 1
                        break
                    if edad == 2:
                        cont2 += 1
                        break
                    if edad == 3:
                        cont3 += 1
                        break
print('el total es:' + str(cont1))
