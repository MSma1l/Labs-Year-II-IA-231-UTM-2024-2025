import pandas as pd
import json
import matplotlib.pyplot as plt

# Calea fișierelor din folderul curent
csv_file_path = "arab_league_countries.csv"
json_file_path = "options.json"

# Citirea datelor din CSV
df = pd.read_csv(csv_file_path)

# Citirea opțiunilor din JSON
with open(json_file_path, 'r') as file:
    options = json.load(file)

# Extragem opțiunile
bar_countries = options['plot']['countries']
period = options['plot']['period']
hist_bins = options['hist']['bins']
pie_countries = options['pie']['countries']
pie_name = options['pie']['name']

# Creăm figura cu 3 subgrafice
fig, axs = plt.subplots(1, 3, figsize=(18, 6))


filtered_df = df[df['Country'].isin(bar_countries)]
filtered_df['GDP (US Dollars)'] = filtered_df['GDP (US Dollars)'].fillna(0)
filtered_df = filtered_df.sort_values(by='GDP (US Dollars)', ascending=False)

# 1. Grafic cu linii
axs[0].plot(filtered_df['Country'], filtered_df['GDP (US Dollars)'], color='skyblue', marker='o', linestyle='-', linewidth=2)
axs[0].set_xlabel('Țări')
axs[0].set_ylabel('GDP (US Dollars)')
axs[0].set_title(f'GDP al țărilor din Liga Arabă în {period[0]}')
axs[0].tick_params(axis='x', rotation=45)

# 2. Histogramă
gdp_values = filtered_df['GDP (US Dollars)'].values
axs[1].hist(gdp_values, bins=hist_bins, color='green', edgecolor='black')
axs[1].set_xlabel('GDP (US Dollars)')
axs[1].set_ylabel('Frecvența')
axs[1].set_title('Distribuția GDP al țărilor selectate')

# 3. Diagramă Circulară
pie_df = df[df['Country'].isin(pie_countries)]
pie_df['GDP (US Dollars)'] = pie_df['GDP (US Dollars)'].fillna(0)
axs[2].pie(
    pie_df['GDP (US Dollars)'], 
    labels=pie_df['Country'], 
    autopct='%1.1f%%', 
    startangle=140,
    colors=plt.cm.Paired.colors
)
axs[2].set_title(f'{pie_name} - Proporția GDP')

# Ajustăm layout-ul pentru a evita suprapunerea
plt.tight_layout()

# Salvăm și afișăm graficul
plt.savefig("all_plots.png")
plt.show()

print("Toate graficele au fost afișate într-o singură fereastră și salvate ca: all_plots.png")
