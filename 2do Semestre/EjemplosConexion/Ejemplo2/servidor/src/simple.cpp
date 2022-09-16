#include <iostream>
#include "../include/simple.hpp"

Nodo::Nodo(Usuario elemento)
{
    this->elemento = elemento;
    sig = NULL;
}
Usuario Nodo::getElemento()
{
    return elemento;
}

ListaSimple::ListaSimple()
{
    primero = ultimo = NULL;
}
bool ListaSimple::vacio()
{
    return (primero == NULL);
}

void ListaSimple::insertarAlFrente(Usuario elemento)
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

void ListaSimple::insertarAlFinal(Usuario elemento)
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

void ListaSimple::eliminarAlFrente()
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

void ListaSimple::eliminarAlFinal()
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

                    cout << "Elemento eliminado." << temp->getElemento().nick << endl;
                    delete temp;
                }
                aux = aux->sig;
            }
        }
    }
}

void ListaSimple::mostrarLista()
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
            cout << "El elemento " << i << " de la lista es: " << aux->getElemento().nick << endl;
            aux = aux->sig;
            i++;
        }
    }
}

vector<crow::json::wvalue> ListaSimple::to_vector()
{
    std::vector<crow::json::wvalue> datos;
    if (vacio() == true)
    {
        cout << "No hay elementos en la lista." << endl;
    }
    else
    {
        Nodo *aux = primero;

        while (aux != NULL)
        {
            crow::json::wvalue x;
            x["nick"] = aux->getElemento().nick;
            x["monedas"] = aux->getElemento().monedas;
            datos.push_back(x);
            aux = aux->sig;
        }
    }
    return datos;
}

Usuario *ListaSimple::buscar(string nick)
{
    if (!vacio())
    {
        Nodo *aux = primero;
        while (aux != NULL)
        {
            if (aux->getElemento().nick == nick)
            {
                Usuario *us = new Usuario(aux->getElemento().nick, aux->getElemento().password, aux->getElemento().monedas, aux->getElemento().edad);
                return us;
            }
            aux = aux->sig;
        }
    }
    return nullptr;
}