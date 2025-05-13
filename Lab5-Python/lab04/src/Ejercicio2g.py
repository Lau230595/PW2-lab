from interpreter import draw
from chessPictures import *

# Blancas y negras
def negro(p): return p.negative()

# Fila de piezas
fila_negra = negro(rock).join(negro(knight)).join(negro(bishop)).join(negro(queen)).join(negro(king)).join(negro(bishop)).join(negro(knight)).join(negro(rock))
fila_peones_negros = negro(square).under(negro(square)).horizontalRepeat(8)

fila_peones_blancos = square.under(square).horizontalRepeat(8)
fila_blanca = rock.join(knight).join(bishop).join(queen).join(king).join(bishop).join(knight).join(rock)

# Tablero vacío (6 filas)
cuadro1 = square.join(square.negative()).horizontalRepeat(4)
cuadro2 = square.negative().join(square).horizontalRepeat(4)
centro = cuadro1.up(cuadro2).verticalRepeat(2)

# Unión de todo
tablero_completo = fila_negra.up(fila_peones_negros).up(centro).up(fila_peones_blancos).up(fila_blanca)

draw(tablero_completo)
