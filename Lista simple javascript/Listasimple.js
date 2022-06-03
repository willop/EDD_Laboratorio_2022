
class Nodo {
    constructor(pokemon) {
        this.pokemon = pokemon
        this.siguiente = null
    }
}

class ListaPokemon {
    constructor() {
        this.cabeza = null
    }

    //metodos de la lista
    //insertar
    agregarpokemon(nombrepokemon) {
        var tempo = new Nodo(nombrepokemon)
        tempo.siguiente = this.cabeza
        this.cabeza = tempo
    }
    //mostrar 
    mostrarlistapokemon() {
        var temporal = this.cabeza
        while (temporal != null) {
            console.log(temporal.pokemon)
            temporal = temporal.siguiente
        }
    }

    graficarpokedex() {
        var codigodot = "digraph G{\nlabel=\" *Pokedex* \";\nnode [shape=box];\n"
        var temporal = this.cabeza
        var conexiones = "";
        var nodos = "";
        var numnodo= 0 
        while (temporal != null) {
            nodos += "N" + numnodo + "[label=\"" + temporal.pokemon + "\" color = Red];\n"
            if (temporal.siguiente != null) {
                var numaux= numnodo+1
                conexiones += "N" + numnodo + " -> N" + numaux + ";\n"
            }
            temporal = temporal.siguiente;
            numnodo++
        }
        codigodot +="//agregando nodos\n";
        codigodot += nodos+"\n";
        codigodot += "//agregando conexiones\n";
        codigodot += "{rank=same;\n"+conexiones+"\n}\n}"
        document.write(codigodot)
        d3.select("#lienzo").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot);
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
lista.graficarpokedex()

