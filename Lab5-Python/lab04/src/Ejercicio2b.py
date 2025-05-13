from interpreter import draw
from chessPictures import *
 
blanco = knight
negro = knight.negative()
blanco_invertido = knight.verticalMirror()

fila1 = blanco.join(negro)
fila2 = negro.join(blanco_invertido)

draw(fila1.up(fila2))