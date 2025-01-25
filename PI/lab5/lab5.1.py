import pandas as pd
import matplotlib.pyplot as plt

# Extragere Date Temperatura
df = pd.read_excel('Temperatura.xlsx', header=None)

ani = df.iloc[2, 2:24].values
temperaturi = df.iloc[3, 2:24].values

df = pd.DataFrame({'An': ani, 'Temperatura': temperaturi})

# Funcție pentru calcularea mediei temperaturilor
def media_temperaturilor():
    return df['Temperatura'].mean()

# Extragere Date Deseuri
df_deseuri = pd.read_excel('Deseuri.xlsx', header=None)

ani_deseuri = df_deseuri.iloc[2:9, 0].values  # A3:A9
vehicule = pd.to_numeric(df_deseuri.iloc[2:9, 2], errors='coerce')
deseuri_pop = pd.to_numeric(df_deseuri.iloc[2:9, 3], errors='coerce')
deseuri_pop_mii = pd.to_numeric(df_deseuri.iloc[2:9, 4], errors='coerce')
deseuri_pop_locuitor = pd.to_numeric(df_deseuri.iloc[2:9, 5], errors='coerce')

# DataFrame Deseuri
data_deseuri = pd.DataFrame({
    'An': ani_deseuri,
    'Vehicule': vehicule,
    'Deșeuri Populație institutii si agenti economici (mii mc)': deseuri_pop,
    'Deșeuri Populație (mii mc)': deseuri_pop_mii,
    'Deșeuri Populație pe Locuitor (mc)': deseuri_pop_locuitor
})

# Funcție pentru calcularea mediei vehiculelor
def media_vehiculelor():
    return data_deseuri['Vehicule'].mean()

# Funcție pentru calcularea mediei deșeurilor pe populație
def media_deseurilor_populatie():
    return data_deseuri['Deșeuri Populație (mii mc)'].mean()

# Funcție pentru calcularea mediei deșeurilor pe locuitor
def media_deseurilor_pe_locuitor():
    return data_deseuri['Deșeuri Populație pe Locuitor (mc)'].mean()

# Crearea subgraficelor
fig, axs = plt.subplots(2, 2, figsize=(14, 10))

# Grafic Histogramă pentru Temperatura
axs[0, 0].hist(df['Temperatura'], bins=10, color='skyblue', edgecolor='black')
axs[0, 0].set_title('Distribuția temperaturilor medii')
axs[0, 0].set_xlabel('Temperatura medie')
axs[0, 0].set_ylabel('Frecvența')

# Grafic Bară pentru Deseuri
data_deseuri.plot(x='An', y=['Vehicule', 'Deșeuri Populație institutii si agenti economici (mii mc)', 
                             'Deșeuri Populație (mii mc)', 'Deșeuri Populație pe Locuitor (mc)'], 
                  kind='bar', stacked=False, color=['orange', 'skyblue', 'lightgreen', 'salmon'], ax=axs[0, 1])
axs[0, 1].set_title('Deseuri municipale colectate de la populatie, institutii si agenti economici pe Ani')
axs[0, 1].set_xlabel('An')
axs[0, 1].set_ylabel('Valori')
axs[0, 1].tick_params(axis='x', rotation=45)
axs[0, 1].legend(title='Categorii', bbox_to_anchor=(1.05, 1), loc='upper left')

# Grafic Linia punctată pentru Temperatura
axs[1, 0].plot(df['An'], df['Temperatura'], linestyle='dotted', color='green', marker='o')
axs[1, 0].set_title('Evoluția temperaturilor medii')
axs[1, 0].set_xlabel('Ani')
axs[1, 0].set_ylabel('Temperatura medie')
axs[1, 0].tick_params(axis='x', rotation=45)
axs[1, 0].grid(True)

# Grafic Plăcintă pentru Temperatura
axs[1, 1].pie(
    df['Temperatura'],
    labels=df['An'],
    autopct='%1.1f%%',
    startangle=90,
    colors=plt.cm.tab20.colors
)
axs[1, 1].set_title('Procentajul temperaturilor medii pe ani')

# Ajustare spațiu între grafice
plt.tight_layout()
plt.show()

