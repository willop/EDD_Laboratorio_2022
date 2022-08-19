#include <iostream>
#include <string>	


using namespace std;




struct nodo2{
    int nombrecancion;
    nodo2 *abajo;
};


struct nodo{
    int album;
    nodo* siguiente;
    nodo2* abajo;
};
nodo* cabecera = NULL;

void agregaralbum(int  _nombrealbum){
    nodo* temporal = new nodo();
    temporal->album = _nombrealbum;
    temporal->siguiente = cabecera;
    cabecera = temporal;
}

void agregarcancion(int _nombrealbum, int _nombrecancion){
    nodo *temporalalbum = cabecera;
    while(temporalalbum != NULL){
        if(temporalalbum->album == _nombrealbum){;
            nodo2 *nuevacancion = new nodo2();
            nuevacancion->nombrecancion =  _nombrecancion;
            nodo2 *iniciocancion = temporalalbum->abajo;
            temporalalbum->abajo = nuevacancion;
            nuevacancion->abajo = iniciocancion;
            break;
        }
        temporalalbum = temporalalbum->siguiente;
    }
    if (temporalalbum == NULL){
        cout<<"NO SE ENCONTRO EL ALBUM"<<endl;
    }
}

void mostrarabums(){
    nodo* temporalalbum = cabecera;
    cout<<"*******************"<<endl;
    while(temporalalbum != NULL){
        cout<<temporalalbum->album<<endl;
        temporalalbum = temporalalbum->siguiente;
    }
}

void mostrargenerla(){
    nodo* temporalalbum = cabecera;
    while(temporalalbum != NULL){
        cout<<"*********Num album: "<<temporalalbum->album<<endl;
        nodo2 *temporalcancion = temporalalbum->abajo;
        while(temporalcancion!= NULL){
            cout<<"---Cancion: "<<temporalcancion->nombrecancion<<endl;
            temporalcancion = temporalcancion->abajo;
        }
        temporalalbum = temporalalbum->siguiente;
    }
}



int main(int argc, char **argv){
    agregaralbum(1);
    agregaralbum(10);

    agregarcancion(1,2);
    agregarcancion(1,3);
    agregarcancion(10,11);
    agregarcancion(10,12);
    //mostrarabums();
    mostrargenerla();
};
