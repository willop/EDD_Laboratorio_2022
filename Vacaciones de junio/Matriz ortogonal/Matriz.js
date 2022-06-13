class Nodo{
    constructor(_valor,_x,_y){
        this.valor = _valor;
        this.x =_x;
        this.y =_y;
        this.abajo=null
        this.siguiente=null
    }
}

class Lista{
    constructor(){
        this.raiz = null
        this.ultimo = null
    }
    insertarlista(_valor,_x){
        var temporal = new Nodo(_valor,_x,0);
        if(this.raiz == null){
            this.raiz = temporal
            this.ultimo = temporal
        }else{
            this.ultimo.siguiente = temporal
            this.ultimo = temporal
        }

        var temp = this.ultimo
        for (let cordy = 24; cordy >= 0; cordy--) {
           var nuevonodo = new Nodo(_valor,_x,cordy)
           var auxanterior = this.ultimo.abajo
           temp.abajo = nuevonodo
           nuevonodo.abajo = auxanterior
        }
    }

    buscarlista(_buscar){
        var temporal = this.raiz
        while(temporal != null){
            if(temporal.x == _buscar){
                return temporal
            }
            temporal =temporal.siguiente
        }
        return null
    }

}

class Matriz{
    constructor(){
        this.listahorizontal = new Lista();
    }

    llenarmatrizortogonal(){
        for (let index = 0; index < 25; index++) {
            this.listahorizontal.insertarlista(0,index)
        }
    }
    mostrarmatriz(){
        var numx = 0
        var cabecerax = this.listahorizontal.buscarlista(numx)
        while(cabecerax != null){
            console.log("**************** x="+numx+"******************")
            var numy = 0
            var tempy = cabecerax.abajo
            while(tempy != null){
                console.log(tempy.valor+"("+tempy.x+","+tempy.y+")")
                tempy = tempy.abajo
            }
            numx++
            cabecerax = cabecerax.siguiente
        }
    }
    insercionmatriz(_valor, _posx,_posy){
        var temporalx = this.listahorizontal.buscarlista(_posx)
        var temporaly = temporalx.abajo
        while(temporaly != null){
            if(temporaly.y == _posy){
                temporaly.valor = _valor
                return
            }
            temporaly = temporaly.abajo
        }
    }

}

var matriz = new Matriz();
matriz.llenarmatrizortogonal();
matriz.insercionmatriz(201901374,5,6)
matriz.mostrarmatriz()