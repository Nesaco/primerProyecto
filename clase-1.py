class Persona():

    def __init__(self,nombre="",edad=0,dni=""):
        self.nombre=nombre
        self.edad=edad
        self.dni=dni
    
    
    def nombre(self,nombre):
        return self.__nombre
        self.__nombre=nombre

    
    def edad(self,edad):
        return self.__edad
        if edad < 0:
            print("Edad incorrecta")
            self.__edad=0
        else:
            self.__edad=edad

   
    def dni(self,dni):
        return self.__dni
        self.__dni=dni
        self.validar_dni()
      
    def validar_dni(self):
        letras = "TRWAGMYFPDXBNJZSQVHLCKE"
        if len(self.__dni)!=9:
            print("DNI incorrecto")
            self.__dni = ""
        else:
            letra = self.__dni[8]
            num = int(self.__dni[:8])
            if letra.upper() != letras[num % 23]:
                print("DNI incorrecto")
                self.__dni = ""

              
    def mostrar(self):
        return "Nombre:"+self.nombre+" - Edad:"+str(self.edad)+" - DNI:"+self.dni

    def esMayorDeEdad(self):
        return self.edad>=18

estudiante1=Persona('juan',25,'1548763115')
print(estudiante1.mostrar())
print(estudiante1.esMayorDeEdad())
estudiante2=Persona('juana',13,'12548962')
print(estudiante2.esMayorDeEdad())