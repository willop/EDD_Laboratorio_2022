#include "Pagina.cpp"
#include "NodoB.cpp"
class B
{
public:
    int orden_arbol = 5;
    Pagina *raiz;

    B()
    {
        raiz = new Pagina();
    }

    void insertar(int id)
    {
        NodoB *nodo = new NodoB(id);
        NodoB *obj = insertar_en_pagina(nodo, raiz);
        if (obj != nullptr)
        {
            // si devuelve algo el metodo de insertar en rama quiere decir que creo una nueva rama, y se debe insertar en el arbol
            raiz = new Pagina();
            raiz->insertar(obj);
            raiz->hoja = false;
        }
    }

private:
    NodoB *insertar_en_pagina(NodoB *nodo, Pagina *rama)
    {
        if (rama->hoja)
        {
            rama->insertar(nodo);
            return (rama->contador == orden_arbol) ? dividir(rama) : nullptr;
        }
        else
        {
            NodoB *temp = rama->primero;
            do
            {
                if (nodo->id == temp->id)
                {
                    return nullptr;
                }
                else if (nodo->id < temp->id)
                {
                    NodoB *obj = insertar_en_pagina(nodo, temp->izquierda);
                    return validar_division(obj, rama);
                }
                else if (temp->siguiente == nullptr)
                {
                    NodoB *obj = insertar_en_pagina(nodo, temp->derecha);
                    return validar_division(obj, rama);
                }
                temp = temp->siguiente;
            } while (temp != nullptr);
        }
        return nullptr;
    }

    NodoB *validar_division(NodoB *obj, Pagina *rama)
    {
        if (obj != nullptr)
        {
            rama->insertar(obj);
            if (rama->contador == orden_arbol)
            {
                return dividir(rama);
            }
        }
        return nullptr;
    }

    NodoB *dividir(Pagina *rama)
    {
        int val = -999;
        NodoB *temp = nullptr;
        NodoB *Nuevito = nullptr;
        NodoB *aux = rama->primero;
        Pagina *rderecha = new Pagina();
        Pagina *rizquierda = new Pagina();

        int cont = 0;
        while (aux != nullptr)
        {
            cont++;
            // implementacion para dividir unicamente ramas de 4 nodos
            if (cont < 3)
            {
                auto temp = new NodoB(aux->id, aux->izquierda, aux->siguiente->izquierda);
                // si la rama posee ramas deja de ser hoja
                rizquierda->hoja = !(temp->derecha != nullptr && temp->izquierda != nullptr);
                rizquierda->insertar(temp);
            }
            else if (cont == 3)
            {
                val = aux->id;
            }
            else
            {
                temp = new NodoB(aux->id, aux->izquierda, aux->derecha);
                // si la rama posee ramas deja de ser hoja
                rderecha->hoja = !(temp->derecha != nullptr && temp->izquierda != nullptr);
                rderecha->insertar(temp);
            }
            aux = aux->siguiente;
        }
        Nuevito = new NodoB(val, rizquierda, rderecha);
        return Nuevito;
    }
};