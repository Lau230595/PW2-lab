from colors import *


class Picture:
    def __init__(self, img):
        self.img = img

    def __eq__(self, other):
        return self.img == other.img

    def _invColor(self, color):
        if color not in inverter:
            return color
        return inverter[color]

    def verticalMirror(self):
        """Devuelve el espejo vertical de la imagen"""
        vertical = []
        for value in self.img:
            fila_invertida = value[::-1]
            vertical.append(fila_invertida)
        return Picture(vertical)

    def horizontalMirror(self):
        """Devuelve el espejo horizontal de la imagen"""
        resultado = []
        for i in range(len(self.img) - 1, -1, -1):
            resultado.append(self.img[i])
        return Picture(resultado)

    def negative(self):
        """Devuelve un negativo de la imagen"""
        resultado = []
        for fila in self.img:
            nueva_fila = ""
            for caracter in fila:
                nuevo_color = self._invColor(caracter)
                nueva_fila += nuevo_color
            resultado.append(nueva_fila)
        return Picture(resultado)

    def join(self, p):
        """Devuelve una nueva figura poniendo la figura del argumento
        al lado derecho de la figura actual"""
        resultado = []
        for i in range(len(self.img)):
            nueva_fila = self.img[i] + p.img[i]
            resultado.append(nueva_fila)
        return Picture(resultado)

    def up(self, p):
        resultado = []
        for fila in p.img:
            resultado.append(fila)
        for fila in self.img:
            resultado.append(fila)
        return Picture(resultado)

    def under(self, p):
        """Devuelve una nueva figura poniendo la figura p sobre la
        figura actual"""
        resultado = []
        for i in range(len(self.img)):
            nueva_fila = ""
            for j in range(len(self.img[0])):
                if p.img[i][j] != " ":
                    nueva_fila += p.img[i][j]
                else:
                    nueva_fila += self.img[i][j]
            resultado.append(nueva_fila)
        return Picture(resultado)

    def horizontalRepeat(self, n):
        """Devuelve una nueva figura repitiendo la figura actual al costado
        la cantidad de veces que indique el valor de n"""
        resultado = []
        for fila in self.img:
            nueva_fila = ""
            for i in range(n):
                nueva_fila += fila
            resultado.append(nueva_fila)
        return Picture(resultado)

    def verticalRepeat(self, n):
        resultado = []
        for i in range(n):
            for fila in self.img:
                resultado.append(fila)
        return Picture(resultado)

    def rotate(self):
        """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
        o antihorario"""
        resultado = []
        for columna in range(len(self.img[0])):
            nueva_fila = ""
            for fila in range(len(self.img) - 1, -1, -1):
                nueva_fila += self.img[fila][columna]
            resultado.append(nueva_fila)
        return Picture(resultado)
