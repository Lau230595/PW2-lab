function mostrarDia() {
    let numero = parseInt(document.getElementById("numeroDia").value);
    if (isNaN(numero) || numero < 0 || numero > 6) {
        document.getElementById("resultado").textContent = "Por favor, ingresa un número entre 0 y 6.";
        return;
    }
    let fecha = new Date();
    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    document.getElementById("resultado").textContent = "El día es: " + dias[numero];
}
