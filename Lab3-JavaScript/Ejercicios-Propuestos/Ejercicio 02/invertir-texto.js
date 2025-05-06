function invertir() {
    let texto = document.getElementById("texto").value;
    let textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido = textoInvertido + texto[i];
    }
    document.getElementById("resultado").textContent = "Texto invertido: " + textoInvertido;
}