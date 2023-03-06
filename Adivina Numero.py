import random

pc=random.randint(1, 100)

usuario=int(input('introduce numero: '))
perdida=0
limt=10
while usuario != pc:
  if usuario > pc and perdida!=limt:
    perdida=perdida+1
    print(perdida)
    print(f"El numero adivinar es menor que {usuario} ")
    usuario=int(input('introduce numero: '))
    
  elif usuario < pc and perdida!=limt:
    perdida=perdida+1
    print(perdida)
    print(f"El numero adivinar es mayor que {usuario} ")
    usuario=int(input('introduce numero: '))
    
  elif perdida >= limt:
    print(f"Has superado el maximo de intentos, el numero correcto es {pc}")
    break
if usuario==pc:
  print(f"Correcto lo has logrado en {perdida} intentos!!!!*** =)")
