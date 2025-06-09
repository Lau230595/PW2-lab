def esEscalar(m):
    d = m[0][0]
    for i in range(len(m)):
        for j in range(len(m)):
            if i != j:
                if m[i][j] != 0:
                    print("Elemento fuera de diagonal no es 0:", m[i][j])
                    return False
            elif m[i][j] != d:
                print("Elemento diagonal no es igual a", d, ":", m[i][j])
                return False
    return True


def esUnitaria(m):
    return m[0][0] == 1 and esEscalar(m)


# Ejemplo de uso
matriz1 = [[5, 0, 0], [0, 5, 0], [0, 0, 5]]

matriz2 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

print("¿matriz1 es escalar?", esEscalar(matriz1))
print("¿matriz2 es unitaria?", esUnitaria(matriz2))
