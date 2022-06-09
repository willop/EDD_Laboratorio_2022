class Nodo{
    constructor(_nombrealbum){
        this.nombrealbum = _nombrealbum;
        this.siguiente = null;
        this.abajo = null;
    }
}

class Nodo2{
    constructor(_nombrecancion){
        this.nombrecancion = _nombrecancion;
        this.siguiente = null;
    }
}


class Listadelistas{
    constructor(){
        this.cabecera = null
    }
    //metodos de insertar
    InsertartAlbum(_nombrealbum){
        var temporal = new Nodo(_nombrealbum);
        temporal.siguiente = this.cabecera
        this.cabecera = temporal;
    }

    InsertarCancion(_album, _nombrecancion){
        var temporalalbum = this.cabecera
        //recorrer toda la lista de albums 
        while(temporalalbum != null){
            if(temporalalbum.nombrealbum == _album){
                //console.log("Si se encontro el album "+_album)
                var nuevacancion = new Nodo2(_nombrecancion)
                var iniciocanciones = temporalalbum.abajo
                temporalalbum.abajo = nuevacancion
                nuevacancion.siguiente = iniciocanciones
                break
            }
            temporalalbum= temporalalbum.siguiente
        }
        if(temporalalbum == null){
            console.log("No se encontro el album en la lista "+_album)
        }

    }

    MostrarAlbums(){
        var temporal = this.cabecera
        console.log("*********** Albums *********")
        while (temporal != null){
            console.log(temporal.nombrealbum)
            temporal = temporal.siguiente
        }
    }

    Mostrarcanciones(_nombrealbum){
        var temporal = this.cabecera
        while (temporal != null){
            if(temporal.nombrealbum == _nombrealbum){
                console.log("*********** Album "+_nombrealbum+" *********")        
                var temporalcanciones = temporal.abajo
                while(temporalcanciones != null){
                    console.log(temporalcanciones.nombrecancion)
                    temporalcanciones = temporalcanciones.siguiente
                }
                return
            }
            temporal = temporal.siguiente
        }
        if(temporal == null){
            console.log("No se pudo encontrar el album solicitado "+_nombrealbum)
        }
    }
}

var listadelistas = new Listadelistas();
listadelistas.InsertartAlbum("Un verano sin ti");
listadelistas.InsertartAlbum("Demon days");
listadelistas.InsertartAlbum("The wall");
listadelistas.InsertartAlbum("The new abnormal");
listadelistas.InsertartAlbum("Cambios de luna");
listadelistas.MostrarAlbums();
console.log("\n\n\n\n")
//album
listadelistas.InsertarCancion("Un verano sin ti","Moscow Mule")
listadelistas.InsertarCancion("Un verano sin ti","Party")
listadelistas.InsertarCancion("Un verano sin ti","Titi me pregunto")
listadelistas.InsertarCancion("Un verano sin ti","Me porto bonito")
//album Demon days
listadelistas.InsertarCancion("Demon days","Dare")
listadelistas.InsertarCancion("Demon days","Dirty Harry")
listadelistas.InsertarCancion("Demon days","El mañana")
//albums The Wall
listadelistas.InsertarCancion("The wall","Hey you")
listadelistas.InsertarCancion("The wall","Comfortably Numb")
listadelistas.InsertarCancion("The wall","Feel good inc")
//album The new abnormal
listadelistas.InsertarCancion("The new abnormal","Not the same anymore")
listadelistas.InsertarCancion("The new abnormal","elfless")
listadelistas.InsertarCancion("The new abnormal","Bad Decisions")
//album Cambios de Luna
listadelistas.InsertarCancion("Cambios de luna","Morir de amor")
listadelistas.InsertarCancion("Cambios de luna","Shillin")
listadelistas.InsertarCancion("Cambios de luna","La noche")


listadelistas.Mostrarcanciones("Demon days")
listadelistas.Mostrarcanciones("Un verano sin ti")
listadelistas.Mostrarcanciones("The wall")
listadelistas.Mostrarcanciones("The new abnormal")
listadelistas.Mostrarcanciones("Cambios de luna")