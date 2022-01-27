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
    
    
    
}
