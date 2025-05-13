from interpreter import draw
from chessPictures import *

blanco = knight
negro = knight.negative()

fila1 = blanco.join(negro)
fila2 = negro.join(blanco)

draw(fila1.up(fila2))