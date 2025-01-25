#include <iostream>
#include <cstring>
#include <string>

using namespace std;

// Structura Monitor
struct Monitor {
    char* firmaProducatoare;
    float dimensiuniInch;
    int numarCulori;
    string rezolutie; // Rezolutia este acum de tip string (nu necesita new/delete)
};

// Funcție pentru setarea datelor monitorului
void setareDate(Monitor& monitor, const char* firma, float dimensiune, int culori, const string& rez) {
    monitor.firmaProducatoare = new char[strlen(firma) + 1]; 
    strcpy(monitor.firmaProducatoare, firma);

    monitor.dimensiuniInch = dimensiune;
    monitor.numarCulori = culori;
    monitor.rezolutie = rez; // Se poate seta direct string-ul
}

// Funcție pentru modificarea datelor monitorului
void modificareDate(Monitor& monitor, const char* firma, float dimensiune, int culori, const string& rez) {
    delete[] monitor.firmaProducatoare;
    monitor.firmaProducatoare = new char[strlen(firma) + 1];
    strcpy(monitor.firmaProducatoare, firma);

    monitor.dimensiuniInch = dimensiune;
    monitor.numarCulori = culori;
    monitor.rezolutie = rez; // Se poate seta direct string-ul
}

// Funcție pentru compararea a două monitoare
bool compara(const Monitor& monitor, const Monitor& altMonitor) {
    return (monitor.dimensiuniInch == altMonitor.dimensiuniInch && 
            monitor.numarCulori == altMonitor.numarCulori && 
            monitor.rezolutie == altMonitor.rezolutie); // Comparăm string-urile direct
}

// Funcție pentru eliberarea memoriei alocate dinamic
void elibereazaMemoria(Monitor& monitor) {
    delete[] monitor.firmaProducatoare;
    // Nu e nevoie de delete pentru `rezolutie` pentru că este de tip string
}

int main() {
    // Crearea a două monitoare
    Monitor monitor1, monitor2;

    // Setarea datelor pentru monitorul 1
    setareDate(monitor1, "Dell", 24.5, 16700000, "1920x1080");

    // Setarea datelor pentru monitorul 2
    setareDate(monitor2, "HP", 27.0, 16700000, "2560x1440");

    // Compararea monitoarelor
    if (compara(monitor1, monitor2)) {
        cout << "Monitoarele sunt identice" << endl;
    } else {
        cout << "Monitoarele difera" << endl;
    }

    // Modificarea datelor pentru monitorul 2
    modificareDate(monitor2, "Samsung", 27.0, 16700000, "2560x1440");

    // Compararea din nou a monitoarelor
    if (compara(monitor1, monitor2)) {
        cout << "Monitoarele sunt identice" << endl;
    } else {
        cout << "Monitoarele difera" << endl;
    }

    // Eliberarea memoriei pentru ambele monitoare
    elibereazaMemoria(monitor1);
    elibereazaMemoria(monitor2);

    return 0;
}
