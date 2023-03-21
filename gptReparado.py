continuar = 'si'

GrupoA = []
GrupoB = []

class Alumno:
    def __init__(self, sexo, nombre):
        self.sexo = sexo
        self.nombre = nombre
    
    def __str__(self):
        return f"{self.nombre} ({self.sexo})"

while continuar == 'si':
    sexo = input('Ingrese el sexo del alumno: ')
    nombre = input('Ingrese el nombre del alumno: ')
    
    dato = Alumno(sexo, nombre)

    if dato.sexo == 'mujer':
        GrupoA.append(dato)
    elif dato.sexo == 'hombre':
        GrupoB.append(dato)
    
    print("Grupo A:")
    for alumno in GrupoA:
        print(alumno)
    
    print("Grupo B:")
    for alumno in GrupoB:
        print(alumno)
    
    continuar = input('Desea ingresar otro estudiante: ')
