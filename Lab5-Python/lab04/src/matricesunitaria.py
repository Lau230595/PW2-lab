def esUnitaria(m):
    for i in range(len(m)):
        for j in range(len(m)):
            if i == j:
                if m[i][j] != 1:
                    print(f"Elemento diagonal m[{i}][{j}] = {m[i][j]} no es 1")
                    return False
            else:
                if m[i][j] != 0:
                    print(
                        f"Elemento fuera de la diagonal m[{i}][{j}] = {m[i][j]} no es 0"
                    )
                    return False
    return True


matriz5 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

matriz6 = [[1, 0, 0], [0, 2, 0], [0, 0, 1]]

print("¿matriz5 es unitaria?", esUnitaria(matriz5))
print("¿matriz6 es unitaria?", esUnitaria(matriz6))
