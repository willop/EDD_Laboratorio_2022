class Nodo_matriz:
    def __init__(self, x, y, info):
        self.anterior = self.siguiente = self.abajo = self.arriba = None
        self.x = x
        self.y = y
        self.info = info

    def __repr__(self) -> str:
        return f'[({self.x},{self.y}) {self.info}]'