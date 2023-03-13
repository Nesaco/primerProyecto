import time
import os

tiempo=int(input('Indique asta donde quiere que llegue el cronometro: '))
for i in range(tiempo):
    time.sleep(1)
    os.system("clear")  
    print(i)