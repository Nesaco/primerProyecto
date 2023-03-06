lista=[]
usuario=int(input('indique numero que desea introducir: '))

while usuario>0:
  lista.append(usuario)
  lista[:] = list(set(lista))
  print(lista)
  usuario=int(input('indique numero que desea introducir: '))
  
lista[:] = list(set(lista))
print(f"su lista completa es{lista}")