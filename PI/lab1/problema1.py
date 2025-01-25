def adunaElementeLista(a, b):

    if len(a) != len(b):
        raise ValueError("Listele trebuie să aibă aceeași lungime")
    
    rezultat = [a[i] + b[i] for i in range(len(a))]
    
    return rezultat

lista1 = int(input())
lista2 = int(input())

lista1 = [1, 2, 3,5]
lista2 = [4, 5, 6,6]

print("lista 1 cu numerele ei: ",lista1)
print("lista 2 cu numerele ei: ",lista2)
rezultat = adunaElementeLista(lista1, lista2)
print("Dupa adunare: ",rezultat)