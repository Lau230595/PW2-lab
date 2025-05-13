from interpreter import draw
from chessPictures import *

blanco = knight
negro = knight.negative()

a= blanco.join(negro)
b= negro.join(blanco)

draw(b.up(a))