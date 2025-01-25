import json

class Money:
    def __init__(self, valuta: str, suma: float):
        self.valuta = valuta
        self.suma = suma

    def __str__(self):
        return f"{self.suma:.2f} {self.valuta}"

    def __add__(self, other):
        if self.valuta == other.valuta:
            return Money(self.valuta, self.suma + other.suma)
        raise ValueError("Nu se pot aduna sume în valute diferite.")

    def __sub__(self, other):
        if self.valuta == other.valuta:
            return Money(self.valuta, self.suma - other.suma)
        raise ValueError("Nu se pot scădea sume în valute diferite.")

    @classmethod
    def from_string(cls, str_value: str):
        valuta, suma = str_value.split()
        return cls(valuta, float(suma))

    def save(self, filename: str):
        with open(filename, "w") as file:
            json.dump({"valuta": self.valuta, "suma": self.suma}, file)

    @classmethod
    def load(cls, filename: str):
        with open(filename, "r") as file:
            data = json.load(file)
            return cls(data["valuta"], data["suma"])

    def convert(self, rata: float, valuta_noua: str):
        return Money(valuta_noua, self.suma * rata)

    def split(self, numar_persoane: int):
        if numar_persoane <= 0:
            raise ValueError("Numărul de persoane trebuie să fie mai mare decât 0.")
        return Money(self.valuta, self.suma / numar_persoane)


class MoneyContainer:
    def __init__(self):
        self._data = []

    def __str__(self):
        return "\n".join(str(money) for money in self._data)

    def __getitem__(self, index):
        return self._data[index]

    def add(self, value: Money):
        self._data.append(value)

    def remove(self, index: int):
        if 0 <= index < len(self._data):
            self._data.pop(index)
        else:
            raise IndexError("Indexul este în afara limitelor.")

    def save(self, filename: str):
        with open(filename, "w") as file:
            json.dump([{"valuta": m.valuta, "suma": m.suma} for m in self._data], file)

    def load(self, filename: str):
        with open(filename, "r") as file:
            data = json.load(file)
            self._data = [Money(d["valuta"], d["suma"]) for d in data]

m1 = Money("USD", 100)
m2 = Money("USD", 50)
m3 = m1-m2
print(m3)


m4 = Money.from_string("EUR 200")
print(m4)  

m4.save("money.json")
m5 = Money.load("money.json")
print(m5) 



container = MoneyContainer()
container.add(m1)
container.add(m2)
container.add(m4)

print(container)

container.save("container.json")
new_container = MoneyContainer()
new_container.load("container.json")
print(new_container)
