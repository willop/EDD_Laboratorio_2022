
#ifndef _PAGINA_HH_
#define _PAGINA_HH_
#include <stdio.h>
#include <iostream>
#include "NodoB.cpp"

class Pagina
{
public:
    bool hoja;    // identificar si es una hoja
    int contador; // identificar la cantidad de elementos que tiene la pagina
    NodoB *primero;
    Pagina()
    {
        this->primero = nullptr;
        this->hoja = true;
        this->contador = 0;
    }

    void insertar(NodoB *nuevo)
    {
        if (primero == nullptr)
        {
            // primero en la lista
            primero = nuevo;
            contador++;
        }
        else
        {
            // recorrer e insertar
            NodoB *aux = primero;
            while (aux)
            {
                if (aux->id == nuevo->id)
                { //------------->ya existe en el arbol
                    // printf("El ID " + nuevo->id + " ya existe",);
                    break;
                }
                else
                {
                    if (aux->id > nuevo->id)
                    {
                        if (aux == primero)
                        { //------------->insertar al inicio
                            aux->anterior = nuevo;
                            nuevo->siguiente = aux;
                            // ramas del nodo
                            aux->izquierda = nuevo->derecha;
                            nuevo->derecha = nullptr;

                            primero = nuevo;
                            contador++;
                            break;
                        }
                        else
                        { //------------->insertar en medio;
                            nuevo->siguiente = aux;
                            // ramas del nodo
                            aux->izquierda = nuevo->derecha;
                            nuevo->derecha = nullptr;

                            nuevo->anterior = aux->anterior;
                            aux->anterior->siguiente = nuevo;
                            aux->anterior = nuevo;
                            contador++;
                            break;
                        }
                    }
                    else if (aux->siguiente == nullptr)
                    { //------------->insertar al final
                        aux->siguiente = nuevo;
                        nuevo->anterior = aux;
                        contador++;
                        break;
                    }
                }
                aux = aux->siguiente;
            }
        }
    }

    void imprimir()
    {
        NodoB *aux = primero;
        while (aux->siguiente != nullptr)
        {

            printf("%i, ", aux->id);
            aux = aux->siguiente;
        }
    }
};

#endif