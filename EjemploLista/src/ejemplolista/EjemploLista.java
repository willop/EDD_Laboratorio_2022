
package ejemplolista;


public class EjemploLista {

    public static void main(String[] args) {
        System.out.println("Hola mundo!!!");
        Personajes p1 = new Personajes("Link", "Golpe espada", "Escudo");
        Personajes p2 = new Personajes("Pikachu", "Golpe trueno", "Escudo elec");
        Personajes p3 = new Personajes("Math", "Golpe espada math", "Escudo math");
        //creacion de la lista
        ListaSimple listapersonajes = new ListaSimple();
        //listapersonajes.Recorrido();
        listapersonajes.InsertarFinal(p3);
        listapersonajes.InsertarFinal(p2);
        listapersonajes.InsertarFinal(p1);
        
        listapersonajes.Recorrido();
     
    } 
}
