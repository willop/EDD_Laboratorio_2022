package ejemplolista;

public class ListaSimple {
    private Nodo cabecera;
    
    public class Nodo{
        public Personajes personaje;
        public Nodo next = null;
        public Nodo(Personajes _personaje){
            this.personaje = _personaje;
        }
    }
    
    //insertar al inicio de la lista
    public void InsertarInicio(Personajes _personaje){
        Nodo nuevonodo = new Nodo(_personaje);
        nuevonodo.next = cabecera;
        cabecera = nuevonodo;
    }
    
    //recorrido de mi lista
    public void Recorrido(){
        if(cabecera == null){
            System.err.print("La lista se encuentra vacia");
        }
        else{
            Nodo aux = cabecera;
            do{
                System.out.println("----------------");
                System.out.println(aux.personaje.Nombre);
                System.out.println(aux.personaje.Ataque1);
                System.out.println(aux.personaje.Ataque2);
                System.out.println("----------------");
                aux = aux.next;
            }while(aux != null);
        }
    }
    
    //insercion de personajes al final
    public void InsertarFinal(Personajes _personaje){
        Nodo nodonuevo = new Nodo(_personaje);
        if(cabecera == null){
            cabecera = nodonuevo;
        }
        else{
            Nodo aux = cabecera;
            while(aux.next != null){
                aux=aux.next;
            }
            aux.next = nodonuevo;
        }
        
    }
    
    //metodo de graficacion con graphviz
    public String generarDot(String _nombre){
        String resultado="digraph G{\nlabel=\""+_nombre+"\";\nnode [shape=box];\n";
        Nodo aux = cabecera;
        String conexiones="";
        String nodos="";
        while(aux != null){
            nodos+="N"+aux.hashCode()+"[label=\"nodo"+aux.personaje.Nombre+"\"];\n";
            if(aux.next != null){
                conexiones+="N"+aux.hashCode()+ " -> "+"N"+aux.next.hashCode()+";\n";
            }
            aux = aux.next;
        }
        resultado+= "//Agregando nodods\n";
        resultado+=nodos+"\n";
        resultado+= "//Agregando conexiones\n";
        resultado+="{rank= same;\n"+conexiones+"\n";
        
        resultado+="}\n}";
        
        return resultado;
    }
    
    
    
}
