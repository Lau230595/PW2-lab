from interpreter import draw
from chessPictures import *
 
blanco = knight
negro = knight.negative()
invertirb = blanco.verticalMirror()
invertirn = negro.verticalMirror()
a = blanco.join(negro)
b = invertirn.join(invertirb)
resul = b.up(a)
draw(resul)