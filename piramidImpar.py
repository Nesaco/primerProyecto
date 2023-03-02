numero=int(input('ingrese numero: ')) #9
impar=int(1)
numcol=1
while numcol<numero+1:
  fila=impar
  pintarFila=' '
  while fila<=int(numcol):
    pintarFila=pintarFila+str(fila)
    fila=fila+2
  print(pintarFila)
  numcol=numcol+2
