from nodo_matriz import Nodo_matriz


class Matriz:
    def __init__(self) -> None:
        self.raiz = Nodo_matriz(-1, -1, "raiz")

    def insertarEnFila(self, nuevo, cabecera):
        actual = cabecera
        encontrado = False
        while True:
            if actual.y > nuevo.y:
                encontrado = True
                break
            elif actual.siguiente is not None:
                actual = actual.siguiente
            else:
                break
        if encontrado:
            nuevo.siguiente = actual
            nuevo.anterior = actual.anterior
            actual.anterior.siguiente = nuevo
            actual.anterior = nuevo
        else:
            actual.siguiente = nuevo
            nuevo.anterior = actual

        return nuevo

    def insertarEnColumna(self, nuevo, cabecera):
        actual = cabecera
        encontrado = False
        while True:
            if actual.x > nuevo.x:
                encontrado = True
                break
            elif actual.abajo is not None:
                actual = actual.abajo
            else:
                break
        if encontrado:
            nuevo.abajo = actual
            nuevo.arriba = actual.arriba
            actual.arriba.abajo = nuevo
            actual.arriba = nuevo
        else:
            actual.abajo = nuevo
            nuevo.arriba = actual
        return nuevo

    def buscarColumna(self, y):
        actual = self.raiz
        while actual is not None:
            if actual.y == y:
                return actual
            actual = actual.siguiente
        return None

    def buscarFila(self, x):
        actual = self.raiz
        while actual is not None:
            if actual.x == x:
                return actual
            actual = actual.abajo
        return None

    def crearColumna(self, y):
        return self.insertarEnFila(Nodo_matriz(-1, y, "Column"), self.raiz)

    def crearFila(self, x):
        return self.insertarEnColumna(Nodo_matriz(x, -1, "Fila"), self.raiz)

    def insertarNodo(self, x, y, info):
        nuevo = Nodo_matriz(x, y, info)

        fila = self.buscarFila(x)
        columna = self.buscarColumna(y)
        

        # caso 1: columna y fila no existe
        if columna is None and fila is None:
            fila = self.crearFila(x)
            columna = self.crearColumna(y)
           

            nuevo = self.insertarEnFila(nuevo, fila)
            nuevo = self.insertarEnColumna(nuevo, columna)
        # Caso 2: la fila existe y la columna no existe
        elif fila is not None and columna is None:
            columna = self.crearColumna(y)
            nuevo = self.insertarEnFila(nuevo, fila)
            nuevo = self.insertarEnColumna(nuevo, columna)

        # Caso 3: la columna existe y la fila no existe
        elif fila is None and columna is not None:
            fila = self.crearFila(x)
            nuevo = self.insertarEnFila(nuevo, fila)
            nuevo = self.insertarEnColumna(nuevo, columna)
        # Caso 4: la columna y la fila existen
        else:
            nuevo = self.insertarEnFila(nuevo, fila)
            nuevo = self.insertarEnColumna(nuevo, columna)

    def visualizarColumna(self):
        actual = self.raiz
        while actual is not None:
            print(str(actual), end=" ")
            actual = actual.abajo
        print()

    def visualizarFila(self):
        actual = self.raiz
        while actual is not None:
            print(str(actual), end=" ")
            actual = actual.siguiente
        print()