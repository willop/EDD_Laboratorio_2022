#include "ListaSimple.h"
#include <iostream>

void ListaSimple::agregarlista(int parametro){
    Nodo* temporal = new Nodo();
    temporal->valor = parametro;
    temporal->siguiente = cabeza;
    cabeza = temporal;
}

void ListaSimple::mostrarlista(){
    Nodo* temporalrecorrido = cabeza;
    cout<<"Imprimiendo la lista simple"<<endl;
    while(temporalrecorrido != NULL){
        cout<<temporalrecorrido->valor<<endl;
        temporalrecorrido = temporalrecorrido->siguiente;
    }
}