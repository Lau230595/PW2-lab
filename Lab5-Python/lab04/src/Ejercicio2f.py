from interpreter import draw
from chessPictures import *

a= square.join(square.negative()).horizontalRepeat(4)
b= square.negative().join(square).horizontalRepeat(4)

tabl = a.up(b).verticalRepeat(4)

draw(tabl)
