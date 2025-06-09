from interpreter import draw
from chessPictures import *

a = square.join(square.negative()).horizontalRepeat(4)
b = square.negative().join(square).horizontalRepeat(4)

tabl = b.up(a).verticalRepeat(2)

draw(tabl)
