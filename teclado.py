mensaje=input('introdusca mensaje: ')
numero=[' ','*','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
veces_numero=''
for letra in mensaje:
  iterador=0
  while iterador<len(numero):
    if(letra in numero[iterador]):
      lineas=numero[iterador].index(letra)+1
      veces_numero=veces_numero+str(iterador)*lineas
    iterador=iterador+1
  veces_numero=veces_numero+' '
print(veces_numero)