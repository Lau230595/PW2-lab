from interpreter import draw
from chessPictures import *

# Función para invertir color
def negro(p): return p.negative()

# Fila de piezas mayores
fila_negra = negro(rock).join(negro(knight)).join(negro(bishop)).join(negro(queen)).join(negro(king)).join(negro(bishop)).join(negro(knight)).join(negro(rock))
fila_blanca = rock.join(knight).join(bishop).join(queen).join(king).join(bishop).join(knight).join(rock)

# Fila de peones reales
fila_peones_negros = negro(pawn).horizontalRepeat(8)
fila_peones_blancos = pawn.horizontalRepeat(8)

# Tablero vacío (6 filas)
cuadro1 = square.join(square.negative()).horizontalRepeat(4)
cuadro2 = square.negative().join(square).horizontalRepeat(4)
centro = cuadro1.up(cuadro2).verticalRepeat(2)

# Armar tablero completo: negras arriba, blancas abajo
tablero_completo = (
    fila_negra
    .up(fila_peones_negros)
    .up(centro)
    .up(fila_peones_blancos)
    .up(fila_blanca)
)

draw(tablero_completo)
