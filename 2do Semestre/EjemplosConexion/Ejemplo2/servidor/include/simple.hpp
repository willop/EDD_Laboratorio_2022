#include <iostream>
#include <map>
#include <vector>
#include "usuario.hpp"
#include "../lib/crow_all.h"
using namespace std;

class Nodo
{
private:
    Usuario elemento;

public:
    Nodo *sig;
    Nodo(Usuario elemento);
    Usuario getElemento();
};

class ListaSimple
{
private:
    int tamanio;
    Nodo *primero;
    Nodo *ultimo;

public:
    ListaSimple();
    bool vacio();
    void insertarAlFrente(Usuario elemento);
    void insertarAlFinal(Usuario elemento);
    void eliminarAlFrente();
    void eliminarAlFinal();
    void mostrarLista();
    vector<crow::json::wvalue> to_vector();
    Usuario *buscar(string);
};