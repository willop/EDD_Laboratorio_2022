#creamos el nodo con los escencial en cada nodo
class nodo :
    def __init__(self, valor,x = None, y = None):
       self.valor=valor
       self.x=x
       self.y=y
       self.derecho = self.izquierdo = self.arriba = self.abajo = None
       self.siguiente = self.anterior = None 

#Creamos la clase lista
class lista:
    #inicializo la class -  constructor con un nodo raiz y ultimo nulos
    def __init__(self):
        self.raiz = self.ultimo = None

    #creo el metod para insertar en la lista
    def insertar(self,valor):
        #creo un nuevo nodo
        nuevo = nodo(valor)
        #valido si la raiz esta vacia, de lo contrario ingreso el valor ordenado
        if self.raiz == None:
            self.raiz = self.ultimo = nuevo
        else:
            self.ordenar(nuevo)
    #crear metodo para insertar 
    #crear metodo para ordenar
    def ordenar(self, nodo):
        aux = self.raiz #creo un auxiliar que sera la raiz
        #mientras aux sea difernte de nulo
        while(aux!= None):
            if aux.valor < nodo.valor:
                aux = aux.siguiente
            #si no es menor vamos a buscar para insertarlo al final o en medio
            else:
                #validamos si es igual al dato
                if aux == self.raiz:
                    nodo.siguiente = aux
                    aux.anterior = nodo
                    self.raiz = nodo
                    return
                else:
                    nodo.anterior = aux.anterior
                    aux.anterior.siguiente = nodo
                    nodo.siguiente = aux
                    aux.anterior = nodo
                    return 
            self.ultimo.siguiente = nodo
            nodo.anterior = self.ultimo
            self.ultimo = nodo

    #crear metodo para search
    def search(self,valor):
        temp = self.raiz
        while(temp != None):
            if temp.valor == valor:
                return temp
            temp = temp.siguiente
        return None

    #crear metodo imprimir
    def print(self):
        temp = self.raiz
        while(temp != None):
            print("Cabecera:", temp.valor)
            temp = temp.siguiente



#creamos la clase matriz
class matriz:
    #inicializamos la matriz
    def __init__(self):
        self.lista_horizontal = lista()
        self.lista_vertical = lista()

    #definimos el metodo para insertar en la matriz
    def insertar(self, valor, x,y):
        horizontal = self.lista_horizontal.search(x)
        vertical = self.lista_vertical.search(y)

        #para insertar en la matriz existen 4 casos 
        #primer caso - matriz vacia
        #segundo caso - que no exista esa posicion en x pero si en y
        #tercer caso - que no exista esa posicion en y pero si en x
        #cuarto caso - que si existan ambas posiciones

        if horizontal == None and vertical == None:
            self.caso1(valor,x,y)
        elif horizontal == None and vertical != None:
            self.caso2(valor,x,y)
        elif horizontal != None and vertical == None:
            self.caso3(valor,x,y)
        else:
            self.caso4(valor,x,y)

    #caso 1
    def caso1(self,valor,x,y):
        self.lista_horizontal.insertar(x)
        self.lista_vertical.insertar(y)

        horizontal = self.lista_horizontal.search(x)
        vertical = self.lista_vertical.search(y)

        nuevo = nodo(valor, x,y) #crear un nodo con la info
        horizontal.abajo = nuevo #enlazamos las cabeceras
        nuevo.arriba = horizontal

        vertical.derecho = nuevo
        nuevo.izquierdo = vertical

    #no x, si y
    def caso2(self,valor,x,y):
        self.lista_horizontal.insertar(x)

        horizontal = self.lista_horizontal.search(x)
        vertical = self.lista_vertical.search(y)

        agregado = False

        nuevo = nodo(valor,x,y) #crear un nodo
        aux = vertical.derecho #aux 
        cabecera = 0
        
        while(aux != None):
            cabecera = aux.x # aux si existe y tiene una posicion
            if cabecera < x:
                aux = aux.derecho
            else:
                nuevo.derecho = aux
                nuevo.izquierdo = aux.izquierdo
                aux.izquierdo.derecho = nuevo
                aux.izquierdo = nuevo
                agregado = True
                break
        if agregado == False:
            aux = vertical.derecho
            while(aux.derecho != None):
                aux = aux.derecho
            nuevo.izquierdo = aux
            aux.derecho = nuevo
        horizontal.abajo = nuevo
        nuevo.arriba = horizontal

    def caso3(self,valor,x,y):
        self.lista_vertical.insertar(y)

        horizontal = self.lista_horizontal.search(x)
        vertical = self.lista_vertical.search(y)

        agregado = False

        nuevo = nodo(valor,x,y) #crear un nodo
        aux = horizontal.abajo  
        cabecera = 0
        
        while(aux != None):
            cabecera = aux.y # aux si existe y tiene una posicion
            if cabecera < y:
                aux = aux.abajo
            else:
                nuevo.abajo = aux
                nuevo.arriba = aux.arriba
                aux.arriba.abajo = nuevo
                aux.arriba = nuevo
                agregado = True
                break
        if agregado == False:
            aux = horizontal.abajo
            while(aux.abajo != None):
                aux = aux.abajo
            nuevo.arriba = aux
            aux.abajo = nuevo
        vertical.derecho = nuevo
        nuevo.izquierdo = vertical

    def caso4(self,valor,x,y):
        vertical = self.lista_vertical.search(y)
        horizontal = self.lista_horizontal.search(x)

        nuevo = nodo(valor,x,y) #crear un nodo
        agregado = False 
        #vamos a empezar con el eje x primero
        aux = horizontal.abajo

        while(aux != None):
            cabecera = aux.y # aux si existe y tiene una posicion
            if cabecera < y:
                aux = aux.abajo
            else:
                nuevo.abajo = aux
                nuevo.arriba = aux.arriba
                aux.arriba.abajo = nuevo
                aux.arriba = nuevo
                agregado = True
                break
        if agregado == False:
            aux = horizontal.abajo
            while(aux.abajo != None):
                aux = aux.abajo
            nuevo.arriba = aux
            aux.abajo = nuevo
        agregado = False
        aux = vertical.derecho
        cabecera = 0

        while(aux != None):
            cabecera = aux.x # aux si existe y tiene una posicion
            if cabecera < x:
                aux = aux.derecho
            else:
                nuevo.derecho = aux
                nuevo.izquierdo = aux.izquierdo
                aux.izquierdo.derecho = nuevo
                aux.izquierdo = nuevo
                agregado = True
                break
        if agregado == False:
            aux = vertical.derecho
            while(aux.derecho != None):
                aux = aux.derecho
            nuevo.izquierdo = aux
            aux.derecho = nuevo

    def imprimir_horizontal(self):
        cabecera = self.lista_horizontal.raiz
        while(cabecera != None):
            aux = cabecera.abajo
            while(aux != None):
                print(aux.valor, aux.x,aux.y)
                aux = aux.abajo
            cabecera = cabecera.siguiente


matriz = matriz()


matriz.insertar("Ayeser", 2,1)
matriz.insertar("Kelly", 3,1)
matriz.insertar("Alan", 2,2)
matriz.insertar("Rony", 1,1)
print("Cabeceras")
matriz.lista_horizontal.print()
matriz.lista_vertical.print()

print("Se imprime de forma horizontal")
matriz.imprimir_horizontal()