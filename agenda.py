#Realizar una clase que administre una agenda. Se debe almacenar para cada contacto el nombre, el teléfono y el email. Además deberá mostrar un menú con las siguientes opciones
#Añadir contacto
#Lista de contactos
#Buscar contacto
#Editar contacto
#Cerrar agenda

class agenda:
  lista=[]
def contacto(self,nombre='',telefono=0,email=''):
      lista=contacto(nombre,telefono,email)
      self.lista.append(lista)
      print(f"El contacto es: {lista} !!GUARDADO¡¡")

class contacto:
  def __init__(self, nombre,telefono,email):
      self.nombre=nombre
      self.telefono=telefono
      self.email=email
  def __str__(self):
      return f": {self.nombre},{self.telefono},{self.email} "

menu=0

contactos=agenda()


while menu!=5:
    menu=int(input('''Que desea realizar:
1.Añadir contacto
2.Ver lista de contactos
3.Buscar contacto
4.Editar contacto
5.Cerrar agenda
'''))

    if menu==1:
        contactos.contacto(input('ingrese nombre: '),input('ingrese telefono: '),input('ingrese email: '))
    
    elif menu==2:
        print(contactos.lista)