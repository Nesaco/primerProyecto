class empleado:
  sueldo=1000
  def calcularPago(self):
    print(f"el sueldo del empleado es {self.sueldo*30}")

class jefe(empleado):
  def calcularPago(self):
    print(f"el sueldo del jefe es {self.sueldo*3*30}")
  
  def despedir(lacayo):
    print('despedido')

class lider(jefe):
  def darOrdenes():
    print('vaya haga')

class administrador(jefe):
  def calcularPago(self):
    print(f"el sueldo del administrado es {self.sueldo*2*30}")

class oficiosVarios(empleado):
  pass

class secretaria(empleado):
  def recibirOrdenes():
    print('si señor')

maria = jefe()
camila = administrador()
jose = oficiosVarios()
