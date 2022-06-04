alert("funciona");

class Nodo{
    constructor(Psmash){
        this.personaje = Psmash
        this.siguiente = null
    }
}

class ListaPersonajesSmash{
    constructor(){
        this.cabeza = null;
        this.ultimo = null;
        this.tamanio = 0;
    }
    //metodos de una lista circular
    //insertar
    agregarpersonaje(nombrepersonaje){
        var temporal = new Nodo(nombrepersonaje);
        //si la lista esta vacia
        if (this.cabeza == null){
            this.cabeza = temporal;
            this.ultimo = this.cabeza;
            this.tamanio++;
        }else{
            this.ultimo.siguiente = temporal
            //temporal.siguiente = ultimo
            this.ultimo = temporal;
            this.ultimo.siguiente = this.cabeza.siguiente
            this.tamanio++;
        }
    }
    //mostrar la lista circular
    mostrarpersonajes(){
        var temporal = this.cabeza
        var cont =0;
        while(cont<this.tamanio){
            console.log(temporal.personaje)
            temporal = temporal.siguiente
            cont++;
        }
    }
}

var lista = new ListaPersonajesSmash();
lista.agregarpersonaje("Ike");
lista.agregarpersonaje("Math");
lista.agregarpersonaje("Incineroar");
lista.agregarpersonaje("Link");
lista.agregarpersonaje("Bowser");

lista.mostrarpersonajes();