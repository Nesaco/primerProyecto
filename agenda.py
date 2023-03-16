# Realizar una clase que administre una agenda. Se debe almacenar para cada contacto el nombre, el teléfono y el email. Además deberá mostrar un menú con las siguientes opciones
# Añadir contacto
# Lista de contactos
# Buscar contacto
# Editar contacto
# Cerrar agenda
class contacto:
    def __init__(self, nombre, telefono, email):
        self.nombre = nombre
        self.telefono = telefono
        self.email = email

    def __str__(self):
        return f"{self.nombre}, {self.telefono}, {self.email}"

class agenda:
    
    _lista={}
    def __init__(self):
        archivo=open('agenda.txt','r')
        for linea in archivo.readlines():
            info=linea.split(',')
            if(len(info)>2):
                nombre=info[0]
                telefono=info[1]
                email=info[2]
                self._lista[nombre]=contacto(nombre, telefono, email)
        archivo.close()

    def crear_contacto(self, nombre='', telefono=0, email=''):
        archivo=open('agenda.txt','w')
        self._lista[nombre]=contacto(nombre, telefono, email)
        for contact in self._lista:
            archivo.write(f"{self._lista[contact]}\n")
        archivo.close()
    
    def mostrar_contactos(self):
        for contacto in self._lista:
            print(self._lista.get(contacto))

    def buscar_contacto(self,nombre):
            print(self._lista.get(nombre))

   
    

menu = 0

contactos = agenda()

while menu != 5:
    menu = int(input('''Que desea realizar:
1.Añadir contacto
2.Ver lista de contactos
3.Buscar contacto
4.Editar contacto
5.Cerrar agenda
'''))

    if menu == 1 or menu == 4:
        contactos.crear_contacto(input('ingrese nombre: '), input(
            'ingrese telefono: '), input('ingrese email: '))

    elif menu == 2:
        contactos.mostrar_contactos()


    elif menu==3:
        contactos.buscar_contacto(input('Que nombre desea buscar: '))
    
    
    
   