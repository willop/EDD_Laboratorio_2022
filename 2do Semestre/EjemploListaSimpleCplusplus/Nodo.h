#include <stddef.h>

class Nodo{
    //atributos y metodos
    public:
        int valor;
        Nodo* siguiente;
        //constructor
        Nodo(){
            siguiente = NULL;
            valor = 0;
        }

    private:
};