
continuar='si'

GrupoA={}
GrupoB={}

class alumno:
    def estudiante(self,sexo,nombre):
        self.sexo=sexo
        self.nombre=nombre

    
dato=alumno()

while continuar=='si':
    dato=input('Ingrese los datos del alumno: ')
    if dato.sexo=='mujer':
        GrupoA.append(alumno)
    elif dato.estudiante=='hombre':
        GrupoB.append(alumno)
    print(GrupoA)
    print(GrupoB)
    
    continuar=input('Desea ingresar otro estudiante:')


