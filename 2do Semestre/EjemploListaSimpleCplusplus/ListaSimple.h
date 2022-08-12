#include "Nodo.h"

using namespace std;

class ListaSimple{
    //metodos y atributos
    public:
        //atributos
        Nodo* cabeza = NULL;
        //inicializamos o su constructor
        ListaSimple(){
            cabeza = NULL;
        }
        //metodos
        //metodo de insertar
        void agregarlista(int valor);
        //metodo de mostrar
        void mostrarlista();
        
    private:
};