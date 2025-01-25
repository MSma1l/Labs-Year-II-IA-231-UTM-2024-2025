import math
# II varianta 7
w = 1.23
e = 5.11

q = 0.5
while q <= 3.1:
    
    a = 3 * (math.pow(math.tan(e - math.pow(w, 2)), 5)) - math.sqrt(q / w)
    
    b = math.pow(a, 3) / q - math.pow(math.sin(a - q * q), 3)
   
    print(f'q = {q} atunci a = {a} si b = {b}')
    
    q += 0.1