class Nodo {
    constructor(_valor,_x,_y) {
        this.x = _x;
        this.y = _y;
        this.valor = _valor
        this.arriba = null
        this.abajo = null
        this.izquierda = null
        this.derecha = null
        this.siguiente = null
        this.anterior = null;
    }
}

class Lista {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    //busqueda
    bussqueda(valor) {
        var temp = this.primero
        while (temp != null) {
            if (temp.valor == valor) {
                return temp
            }
            temp = temp.siguiente
        }
    }






    //ordenar la lista de cabeceras
    ordenar(nodo){
        var aux = this.primero
        while(aux != null){
            if(aux.valor < nodo.valor){
                aux = aux.siguiente
            }else{
                if(aux == this.primero){
                    nodo.siguiente = aux;
                    aux.anterior = nodo;
                    this.primero = nodo;
                }else{
                    nodo.anterior = aux.anterior;
                    aux.anterior.siguiente = nodo;
                    nodo.siguiente = aux;
                    aux.anterior = nodo;
                    return;
                }
            }
        }
        //va a insertar entonces hasta de ultimo
        this.ultimo.siguiente = nodo;
        nodo.anterior = this.ultimo;
        this.ultimo = nodo;
    }

    //insertar en lista
    insertar(valor){
        var nodo = new Nodo(valor,null,null);
        //quiere decir que no hay nada en esa lista
        if (this.primero == null){
            this.primero = this.ultimo = nodo;
            return;
        }
        //no es el primero en la lista entonces lo ingreso ordenadamente
        this.ordenar(nodo);
    }
}

class Matriz {
    constructor() {
        this.lista_horizontal = new Lista();
        this.lista_vertical = new Lista();
    }

    insertar(valor, x, y) {
        var nodo_x = this.lista_horizontal.busqueda(x);
        var nodo_y = this.lista_vertical.busqueda(y);

        if(nodo_x == null && nodo_y == null){
            this.caso1(valor, x, y);
        }else if (nodo_x == null && nodo_y !=null){
            this.caso2(valor, x, y);
        }else if(nodo_x !=null && nodo_y ==null){
            this.caso3(valor, x, y);
        }else{
            this.caso4(valor, x, y);
        }
    }
    caso1(valor,x,y){
        this.lista_horizontal.insertar(x);
        this.lista_vertical.insertar(y);

        var nodo_x = this.lista_horizontal.bussqueda(x)
        var nodo_y = this.lista_vertical.bussqueda(y)

        var nuevo = new Nodo(valor,x,y);
        //enlazar con cabeceras en x
        nodo_x.abajo = nuevo;
        nuevo.arriba = nodo_x;
        //enlazar con cabeceras en y
        nodo_y.derecha = nuevo;
        nuevo.izquierda = nodo_y;

    }
    caso2(valor,x,y){
        this.lista_horizontal.insertar(x)

        var nodo_x = this.lista_horizontal.bussqueda(x)
        var nodo_y = this.lista_vertical.bussqueda(y)
        var agregado = false;

        var nuevo = new Nodo(valor,x,y);
        var aux = nodo_y.derecha;
        var cabecera = 0;
        while(aux != null){
            cabecera = aux.x;
            if(cabecera < x){
                aux = aux.derecha;
            }else{
                nuevo.derecha = aux;
                nuevo.izquierda = aux.izquierda;
                aux.izquierda.derecha = nuevo;
                aux.izquierda = nuevo;
                agregado = true;
                break;
            }
        }
        if(agregado == false){
            aux = nodo_y.derecha;
            while(aux.derecha != null){
                aux = aux.derecha;
            }
            nuevo.izquierda = aux;
            aux.derecha = nuevo;
        }
        nodo_x.abajo = nuevo;
        nuevo.arriba = nodo_x;

    }
    caso3(valor,x,y){
        this.lista_vertical.insertar(y)

        var nodo_x = this.lista_horizontal.bussqueda(x)
        var nodo_y = this.lista_vertical.bussqueda(y)
        var agregado = false;

        var nuevo = new Nodo(valor,x,y);
        var aux = nodo_x.abajo;
        let cabecera = 0;

        while(aux != null ){
            cabecera = aux.y;
            if(cabecera < y){
                aux = aux.abajo;
            }else{
                nuevo.abajo = aux;
                nuevo.arriba = aux.arriba;
                aux.arriba.abajo = nuevo;
                aux.arriba = nuevo;
                agregado = true;
                break;
            }
        }
        if(!agregado){
            aux = nodo_x.abajo;
            while(aux.abajo != null){
                aux = aux.abajo;
            }
            aux.abajo = nuevo;
            nuevo.arriba = aux;
        }
        nodo_y.derecha = nuevo;
        nuevo.izquierda = nodo_y;

    }
    caso4(valor,x,y){
        let nodo_x = this.lista_horizontal.busqueda(x);
        let nodo_y = this.lista_vertical.busqueda(y);

        var agregado = false;
        let nuevo = new Nodo(valor, x, y);
        let aux = nodo_y.derecha;
        let cabecera = 0;
        while(aux != null){
            cabecera = aux.x;
            if (cabecera < x) {
                aux = aux.derecha;
            } else {
                nuevo.derecha = aux;
                nuevo.izquierda = aux.izquierda;
                aux.izquierda.derecha = nuevo;
                aux.izquierda = nuevo;
                agregado = true;
                break;
            }
        }
    }
}