function sacarCodigo() {
    let url = document.getElementById("url").value;
    let partes = url.split("/");
    let ultimaParte = partes[partes.length - 1];
    let sinGuiones = ultimaParte.replace(/-/g, "");
    document.getElementById("codigo").textContent = "El código es: " + sinGuiones;
}