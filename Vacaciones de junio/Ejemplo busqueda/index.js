class Nodo{
    constructor(_usuario,_id){
        this.id = _id
        this.usuario = _usuario;
        this.siguiente = null
    }
}

class Listasimple{
    constructor(){
        this.cabecera = null
    }
    //metodo de insertar
    Insertarusuario(_nombreusuario, _id){
        var temporal = new Nodo(_nombreusuario, _id)
        temporal.siguiente = this.cabecera
        this.cabecera= temporal
    }

    MostrarUsuarios(){
        var temporal = this.cabecera
        while(temporal != null){
            console.log("----------------------------")
            console.log(temporal.usuario)
            console.log(temporal.id)
            temporal = temporal.siguiente 
        }
    }
    //metodos para buscar dentro de la lista
    BuscarporNombre(_nombreabuscar){
        var temporal = this.cabecera
        console.log("*************** Buscando usuario ***************")
        while(temporal != null){
            if(temporal.usuario == _nombreabuscar){
                console.log("El usuario "+_nombreabuscar +" si se encuentra en la lista")
                return
            }
            temporal=temporal.siguiente
        }
        if(temporal == null){
            console.log("El usuario "+_nombreabuscar +" esta mimido, no esta en la lista")
        }
    }

    Buscarporid(_idbuscar){
        var temporal = this.cabecera
        console.log("*************** Buscando usuario ***************")
        while(temporal != null){
            if(temporal.id == _idbuscar){
                console.log("El usuario "+_idbuscar +" si se encuentra en la lista con el nombre de "+temporal.usuario)
                return
            }
            temporal=temporal.siguiente
        }
        if(temporal == null){
            console.log("El usuario "+_idbuscar +" esta mimido, no esta en la lista")
        }
    }

}

var listasimple = new Listasimple();
listasimple.Insertarusuario("Pancho","P2as1s");
listasimple.Insertarusuario("Ronaldo","123456");
listasimple.Insertarusuario("Joel","a3sdf5");
listasimple.Insertarusuario("Christian","987654321");
listasimple.Insertarusuario("Yenifer","201952336");
listasimple.Insertarusuario("Erick","12w35e0");
listasimple.MostrarUsuarios()

listasimple.BuscarporNombre("Yenifer")
listasimple.BuscarporNombre("Paula")
console.log("\n\n\n\n")
listasimple.Buscarporid("P2as1s")
listasimple.Buscarporid("zzzzzz")