#nodo arbol
class Nodo:
    def __init__(self,valor):
        self.valor = valor
        self.izquierdo = self.derecho = None

#clase arbolBinario
class Abb:
    def __init__(self):
        self.raiz = None
    
    #insertar
    def agregar(self, valor):
        self.raiz = self.agregar_recursive(valor, self.raiz)
        
    def agregar_recursive(self,valor,raiz):
        #validar que el arbol este vacio
        if raiz == None:
            return Nodo(valor)
        else:
            #verificar si es mayor o si es menor
            if valor < raiz.valor:
                raiz.izquierdo = self.agregar_recursive(valor,raiz.izquierdo)
            else:
                raiz.derecho = self.agregar_recursive(valor,raiz.derecho)
        return raiz

    def pre_orden(self):
        self.pre_order_recursivo(self.raiz)

    def pre_order_recursivo(self, raiz):
        #visitar raiz, izquierda y derecha
        if raiz:
            print("valor: ",raiz.valor)
            self.pre_order_recursivo(raiz.izquierdo)
            self.pre_order_recursivo(raiz.derecho)

    def inorden(self):
        self.inorden_recursivo(self.raiz)
    
    def inorden_recursivo(self,raiz):
        #izquierda -> raiz -> derecha
        if raiz:
            self.inorden_recursivo(raiz.izquierdo)
            print("valor ",raiz.valor)
            self.inorden_recursivo(raiz.derecho)

    def post_orden(self):
        self.post_orden_recursivo(self.raiz)

    def post_orden_recursivo(self,raiz):
        #izquierdo ->derecho ->raiz
        if raiz:
            self.post_orden_recursivo(raiz.izquierdo)
            self.post_orden_recursivo(raiz.derecho)
            print("valor: ",raiz.valor)

        

    

    #borrar
    #buscar
    #recorre

arbol_binario = Abb()
arbol_binario.agregar(7)
arbol_binario.agregar(8)
arbol_binario.agregar(5)
arbol_binario.agregar(4)
arbol_binario.agregar(6)

print("Metodo preorden:\n")
arbol_binario.pre_orden()

print("****************\nMetodo inorden:\n")
arbol_binario.inorden()

print("****************\nMetodo postorden:\n")
arbol_binario.post_orden()