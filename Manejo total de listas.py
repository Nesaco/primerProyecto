opciones='no'
def añadir():
  añadir=int(input('que numero desea añadir a la lista?: '))
  return añadir
def posicion():
  posicion=int(input('Que posicion?: '))
  return posicion
def numero():
  numero=int(input('Que numero desea buscar: '))
  return numero
def continuar():
  continuar=input('Desea continuar?: ')
  return continuar

while opciones=='no':
  lista=[1,2,3,4,5]
  menu=int(input('''
    Que desea realizar:
    1.Añadir numero a la lista
    2.Añadir número de la lista en una posición
    3.Saber la longitud de la lista
    4.Eliminar el último número
    5.Eliminar un número
    6.Saber cuanta veces aparece un numero
    7.Saber en que posicion esta un numero
    8.Ver toda la lista
    9.Salir
    '''))
  if menu==1:
    lista.append(añadir())
    print(lista)       
        
  elif menu ==2:
    lista.insert(posicion(),añadir())
    print(lista)  
    
  elif menu==3:
    print(len(lista))

  elif menu==4:
    del lista[-1]
    print(lista) 

  elif menu==5:
    lista.pop(posicion())
    print(lista)

  elif menu==6:
    print(lista.count(numero()))

  elif menu==7:
    print(lista.index(numero()))
      
  elif menu==8:
    print(lista)
  elif menu==9:
    print("Adios")
    break

    
  if continuar()=='no':
     break