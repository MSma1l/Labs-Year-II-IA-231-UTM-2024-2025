#ex 7
'''
x = 3
y = 4

# varianta a
print(f'x + y = ?')

# varianta b
print(f'({x})({y}) ')

# varianta c
print(f'x = {str(x)}; y = {str(y)}')

# varianta d
print(f'Raspuns: ({x}; {y})')
'''
#ex 8
''' 
import math


print("Întroduceți valori pentru X și Y")
x=int(input("valoare pentru X: "))
y=int(input("Valoare pentru Y: "))

Z=(pow(x,2)+pow(y,2))*pow(x-y,2)
print(Z)
'''
#ex 9
'''
x=int(input("Întroduceti pe x: "))

if x<0:
    print(x)
elif 0<=x< 10:
    print(2*x)
elif 10<=x<100:
    print(3*x)
else:
    print(4*x)
'''

# ex10
'''
a=int(input('numarul 1: '))
b=int(input('numarul 2: '))
c=int(input('numarul 3: '))
d=int(input('numarul 4: '))

numere= {a,b,c,d}

if len(numere)==4:
    print('Numerele sunt distince')
else:
    print('Exista cel putin 2 numere egale între ele ') 
'''
#ex11
'''
a=int(input('numarul 1: '))
b=int(input('numarul 2: '))
c=int(input('numarul 3: '))

if a==b+c:
    print(f"{b} este egal cu suma celor două: {b} și {c} ")
elif b==a+c:
    print(f"{b} este egal cu suma celor două: {a} și {c} ")
elif c==a+b:
    print(f"{c} este egal cu suma celor două: {a} și {b} ")
else:
    print("Nici unu din numere nu este egal cu suma celor două")
    '''