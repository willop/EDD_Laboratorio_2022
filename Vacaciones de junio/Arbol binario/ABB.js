class Nodo{
    constructor(_valor){
        this.valor=_valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

class ABB{
    constructor(){
        this.raiz = null;
    }
    //metodo insertar
    insertar(_valor){
        this.raiz = this.add(_valor, this.raiz);
    }
    //metodo insertar recursivo
    add(_valor, nodo){
        if(nodo == null){
            return new Nodo(_valor);
        }else{
            if(_valor > nodo.valor){
                nodo.derecha = this.add(_valor, nodo.derecha);
            }else{
                nodo.izquierda = this.add(_valor, nodo.izquierda);
            }
        }
        return nodo;
    }
    
    //preorden
    preorden(){
        this.pre_orden(this.raiz);
    }

    pre_orden(nodo){
        if(nodo!=null){
            console.log("Valor:",nodo.valor);
            this.pre_orden(nodo.izquierda);
            this.pre_orden(nodo.derecha);
        }
    }
    //inorden
    inorden(){
        this.in_orden(this.raiz);
    }
    
    in_orden(nodo){
        if(nodo!=null){
            this.in_orden(nodo.izquierda);
            console.log("Valor:",nodo.valor);
            this.in_orden(nodo.derecha);
        }
    }

    //postorden
    posorden(){
        this.pos_orden(this.raiz);
    }
    
    pos_orden(nodo){
        if(nodo!=null){
            this.pos_orden(nodo.izquierda);
            this.pos_orden(nodo.derecha);
            console.log("Valor:",nodo.valor);           
        }
    }
}

var abb = new ABB();
abb.insertar(10);
abb.insertar(32);
abb.insertar(20);
abb.insertar(77);
abb.insertar(8);
abb.insertar(13);
abb.insertar(1);
abb.insertar(6);
abb.insertar(25);
abb.insertar(4);
console.log("Recorrido in orden")
abb.inorden();
console.log("Recorrido pre orden")
abb.preorden();
console.log("Recorrido post orden")
abb.posorden();


