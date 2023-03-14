#Realizar un programa que conste de una clase llamada Alumno que tenga como atributos el nombre y la nota del alumno. Definir los métodos para inicializar sus atributos, imprimirlos y mostrar un mensaje con el resultado de la nota y si ha aprobado o no.


class alumno:
  def atributo(self,nota,alumno):
    self.nota=nota
    self.alumno=alumno
    print(f"{self.alumno} su nota es, {self.nota}")

  def resultadoFinal(self):
    if self.nota > 3:
      print('¡¡¡APROVO!!!')
    elif self.nota<3:
      print('¡¡¡REPROVO!!!')

uno=alumno()
uno.atributo(5,'juan')
uno.resultadoFinal()