#Escribir una clase en python llamada circulo que contenga un radio, con un método que devuelva el área y otro que devuelva el perímetro del circulo.

class circulo:
    def area(self,radio):
        self.pi=3.14
        self.radio=radio
        return(f"El area del curculo es: {self.pi*radio**2} cm²")
    
circulo=circulo()
print(circulo.area(19))