//importaciones
#include <iostream>
#include "ListaSimple.cpp"

using namespace std;

int main(int argc, char** argv){
    ListaSimple lista;
    lista.agregarlista(5);
    lista.agregarlista(10);
    lista.agregarlista(15);
    lista.agregarlista(20);
    lista.agregarlista(25);
    lista.mostrarlista();
    return 0;
}