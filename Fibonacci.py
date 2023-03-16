#crear un función flecha que me calcule la serie fibonacci hasta un numero que se debe preguntar al usuario.

#si el usuario ingresa un numero negativo debe informarle que solo se permiten números enteros positivos y volverle a preguntar.

#si el usuario ingresa un valor diferente a un numero debe informarle que el valor no es permitido que debe ser un valor numérico y volver a preguntar.

#una vez calculada la serie debe preguntar si desea volver a calcular la serie para otro numero.


def fib(n): 
    if n<2:
        return(n)
    else:
        return (fib(n-1)+fib(n-2))
    
continuar=('si')

while continuar=='si':
    try:
        n=int(input('Ingrese un numero limite: '))
    except:
        n=-9
        
    if n<0:
        print('SOLO SE PERMITE NUMEROS ENTEROS POSITIVOS')
        continue
        
    elif type (n) == int:
        print(fib(n))

    continuar=input('desea continuar: ')

 