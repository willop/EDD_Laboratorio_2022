#ifndef _NODOB_HH_
#define _NODOB_HH_

// Declaración en avanzada de la clase Pagina
class Pagina;
class NodoB
{
public:
    int id; //--> clave
    // Apuntadores
    NodoB *anterior, *siguiente;
    Pagina *izquierda, *derecha;
    NodoB(int id)
    {
        this->id = id;
        this->anterior = this->siguiente = nullptr;
        this->izquierda = this->derecha = nullptr;
    }

    NodoB(int id, Pagina *izquierda, Pagina *derecha)
    {
        this->id = id;
        this->anterior = this->siguiente = nullptr;
        this->izquierda = izquierda;
        this->derecha = derecha;
    }
};
#include "Pagina.cpp"
#endif