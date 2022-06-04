class Nodo{
    constructor(pokemon){
        this.pokemon = pokemon
        this.siguiente = null
    }
}

class ListaPokemon{
    constructor(){
        this.cabeza = null
    }

    //metodos de la lista
    //insertar
    agregarpokemon(nombrepokemon){
        var tempo = new Nodo(nombrepokemon)
        tempo.siguiente = this.cabeza
        this.cabeza = tempo
    }
    //mostrar 
    mostrarlistapokemon(){
        var temporal = this.cabeza
        while(temporal!=null){
            console.log(temporal.pokemon)
            temporal = temporal.siguiente
        }
    }
}

var lista = new ListaPokemon();
lista.agregarpokemon("Pikachu")
lista.agregarpokemon("Lapras")
lista.agregarpokemon("Shinx")
lista.agregarpokemon("Charmander")
lista.agregarpokemon("Vulpix")
lista.agregarpokemon("Snorlax")

lista.mostrarlistapokemon()