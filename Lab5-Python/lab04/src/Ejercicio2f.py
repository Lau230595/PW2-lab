from interpreter import draw
from chessPictures import *

fila1 = square.join(square.negative()).horizontalRepeat(4)
fila2 = square.negative().join(square).horizontalRepeat(4)

tablero = fila1.up(fila2).verticalRepeat(4)

draw(tablero)
