
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