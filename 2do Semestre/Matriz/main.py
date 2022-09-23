from matriz import Matriz
from graficador import Graficador

if __name__ == "__main__":
    matriz = Matriz()
    matriz.insertarNodo(0, 0, "a")
    matriz.insertarNodo(0, 5, "b")
    matriz.insertarNodo(6, 5, "c")
    matriz.insertarNodo(6, 0, "d")
    graficador = Graficador()

    graficador.graficarMD(matriz.raiz)