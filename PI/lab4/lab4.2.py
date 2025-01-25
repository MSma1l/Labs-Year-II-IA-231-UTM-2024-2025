class Player:
    def __init__(self):
        self._status = "Oprit"  # Statusul părintelui (privat)

    def porni(self):
        self._status = "Redare"
        print(f"{self.__class__.__name__}: Redarea a început.")

    def opri(self):
        self._status = "Oprit"
        print(f"{self.__class__.__name__}: Redarea a fost oprită.")

    # Metoda publică
    def get_status(self):
        return self._status

class AudioPlayer(Player):
    def __init__(self):
        super().__init__()

    def opri(self):
        super().opri()
        print("AudioPlayer: Redarea audio a fost oprită.")

class VideoPlayer(Player):
    def __init__(self):
        super().__init__()

    def opri(self):
        super().opri()
        print("VideoPlayer: Redarea video a fost oprită.")

# Clasa DvdPlayer care extinde VideoPlayer
class DvdPlayer(VideoPlayer):
    def __init__(self):
        super().__init__()
        self._pozitie_curenta = 0  # Păstrează poziția de redare pentru DVD

    # Implementare a metodei porni() pentru DvdPlayer
    def porni(self, dvd_disk):
        self._status = "Redare"
        self._pozitie_curenta = 0  # Începe redarea de la început
        print(f"DvdPlayer: Redarea DVD-ului '{dvd_disk}' a început.")

    # Implementare a metodei opri() pentru DvdPlayer
    def opri(self):
        self._status = "Oprit"
        print(f"DvdPlayer: Redarea s-a oprit la poziția {self._pozitie_curenta}.")

    # Metodă pentru a simula avansarea la o poziție specifică
    def set_pozitie(self, pozitie):
        self._pozitie_curenta = pozitie
        print(f"DvdPlayer: Poziția a fost setată la {self._pozitie_curenta}.")

# Funcția principală care conține meniul interactiv
def meniu():
    # Creăm obiectele player-elor
    audio_player = AudioPlayer()
    video_player = VideoPlayer()
    dvd_player = DvdPlayer()

    while True:
        # Afișăm meniul
        print("\nMeniu:")
        print("1. Pornește AudioPlayer")
        print("2. Oprește AudioPlayer")
        print("3. Pornește VideoPlayer")
        print("4. Oprește VideoPlayer")
        print("5. Pornește DvdPlayer")
        print("6. Oprește DvdPlayer")
        print("7. Setează poziția pe DvdPlayer")
        print("8. Vezi statusul player-elor")
        print("9. Ieși")

        optiune = input("Alege o opțiune: ")

        if optiune == '1':
            audio_player.porni()
        elif optiune == '2':
            audio_player.opri()
        elif optiune == '3':
            video_player.porni()
        elif optiune == '4':
            video_player.opri()
        elif optiune == '5':
            dvd_disk = input("Introdu numele DVD-ului: ")
            dvd_player.porni(dvd_disk)
        elif optiune == '6':
            dvd_player.opri()
        elif optiune == '7':
            pozitie = int(input("Introdu poziția pe care dorești să o setezi: "))
            dvd_player.set_pozitie(pozitie)
        elif optiune == '8':
            print(f"Status AudioPlayer: {audio_player.get_status()}")
            print(f"Status VideoPlayer: {video_player.get_status()}")
            print(f"Status DvdPlayer: {dvd_player.get_status()}")
        elif optiune == '9':
            print("Ieșire din meniu.")
            break
        else:
            print("Opțiune invalidă, te rog alege din nou.")

if __name__ == "__main__":
    meniu()
