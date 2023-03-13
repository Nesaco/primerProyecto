import statistics as stats

notas=[4.5, 3.0, 2.9,10.0,9.5]
print(sorted(notas))
print(f"El valor medio de sus notas es: {stats.mean(notas)}") 

def mayor(notas):
    max = notas[0];
    for x in notas:
        if x > max:
            max = x
    
    return max  
    
def menor(notas):
    min = notas[0];
    for x in notas:
        if x < min:
            min = x
    return min

print(f"La nota mayor optenida es: {mayor(notas)}")
print(f"La nota menor optenida es: {menor(notas)}")