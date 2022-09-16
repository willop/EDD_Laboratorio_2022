#include <iostream>

using namespace std;

class Nodo
{
private:
    string elemento;

public:
    Nodo *sig;
    Nodo(string elemento)
    {
        this->elemento = elemento;
        sig = NULL;
    }
    string getElemento()
    {
        return elemento;
    }
};

class ListaSimple
{
private:
    int tamanio;
    Nodo *primero;
    Nodo *ultimo;

public:
    ListaSimple()
    {
        primero = ultimo = NULL;
    }
    bool vacio()
    {
        return (primero == NULL);
    }

    void insertarAlFrente(string elemento)
    {
        Nodo *temp = new Nodo(elemento);
        if (vacio())
        {
            primero = ultimo = temp;
        }
        else
        {
            temp->sig = primero;
            primero = temp;
        }
    }

    void insertarAlFinal(string elemento)
    {
        Nodo *temp = new Nodo(elemento);
        if (vacio())
        {
            primero = ultimo = temp;
        }
        else
        {
            ultimo = ultimo->sig = temp;
        }
    }

    void eliminarAlFrente()
    {
        if (vacio())
        {
            cout << "No se puede eliminar. Lista Vacia " << endl;
        }
        else
        {
            if (primero == ultimo)
            {
                primero = ultimo = NULL;
                cout << "Elemento eliminado." << endl;
            }
            else
            {
                Nodo *temp = primero;

                primero = primero->sig;
                delete temp;
                cout << "Elemento eliminado. " << endl;
            }
        }
    }

    void eliminarAlFinal()
    {
        if (vacio())
        {
            cout << "No se puede eliminar. Lista vacia" << endl;
        }
        else
        {
            if (primero == ultimo)
            {
                primero = ultimo = NULL;
                cout << "Elemento eliminado." << endl;
            }
            else
            {
                Nodo *aux = primero;

                while (aux != NULL)
                {
                    if (aux->sig == ultimo)
                    {
                        Nodo *temp = ultimo;
                        ultimo = aux;
                        aux->sig = NULL;

                        cout << "Elemento eliminado." << temp->getElemento() << endl;
                        delete temp;
                    }
                    aux = aux->sig;
                }
            }
        }
    }

    void mostrarLista()
    {
        if (vacio() == true)
        {
            cout << "No hay elementos en la lista." << endl;
        }
        else
        {
            Nodo *aux = primero;
            int i = 1;
            cout << "Los datos en la lista son los siguientes" << endl;

            while (aux != NULL)
            {
                cout << "El elemento " << i << " de la lista es: " << aux->getElemento() << endl;
                aux = aux->sig;
                i++;
            }
        }
    }
};