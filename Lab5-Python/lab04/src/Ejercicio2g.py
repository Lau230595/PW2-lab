from interpreter import draw
from chessPictures import *


def casilla_blanca(p):
    return square.under(p)


def casilla_negra(p):
    return square.negative().under(p)


fila_piezas_negras = (
    casilla_blanca(rock.negative())
    .join(casilla_negra(knight.negative()))
    .join(casilla_blanca(bishop.negative()))
    .join(casilla_negra(queen.negative()))
    .join(casilla_blanca(king.negative()))
    .join(casilla_negra(bishop.negative()))
    .join(casilla_blanca(knight.negative()))
    .join(casilla_negra(rock.negative()))
)

fila_peones_negras = (
    casilla_negra(pawn.negative())
    .join(casilla_blanca(pawn.negative()))
    .join(casilla_negra(pawn.negative()))
    .join(casilla_blanca(pawn.negative()))
    .join(casilla_negra(pawn.negative()))
    .join(casilla_blanca(pawn.negative()))
    .join(casilla_negra(pawn.negative()))
    .join(casilla_blanca(pawn.negative()))
)

fila_peones_blancas = (
    casilla_blanca(pawn)
    .join(casilla_negra(pawn))
    .join(casilla_blanca(pawn))
    .join(casilla_negra(pawn))
    .join(casilla_blanca(pawn))
    .join(casilla_negra(pawn))
    .join(casilla_blanca(pawn))
    .join(casilla_negra(pawn))
)

fila_piezas_blancas = (
    casilla_negra(rock)
    .join(casilla_blanca(knight))
    .join(casilla_negra(bishop))
    .join(casilla_blanca(queen))
    .join(casilla_negra(king))
    .join(casilla_blanca(bishop))
    .join(casilla_negra(knight))
    .join(casilla_blanca(rock))
)

c1 = square.join(square.negative()).horizontalRepeat(4)
c2 = square.negative().join(square).horizontalRepeat(4)
centro = c2.up(c1).verticalRepeat(2)

tablero = (
    fila_piezas_blancas.up(fila_peones_blancas)
    .up(centro)
    .up(fila_peones_negras)
    .up(fila_piezas_negras)
)

draw(tablero)
