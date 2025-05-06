function crearTabla(evento) {
    evento.preventDefault(); 

    let cantidad = parseInt(document.getElementById("cantidad").value);
    let contenedor = document.getElementById("tabla");
    contenedor.innerHTML = "";
    let tabla = document.createElement("table");
    let fila = document.createElement("tr");

    for (let i = 0; i < cantidad; i++) {
        let valor = Math.floor(Math.random() * 100) + 1; 
        let celda = document.createElement("td");
        celda.textContent = valor; 
        celda.className = "numero"; 
        fila.appendChild(celda);
    }

    tabla.appendChild(fila);
    contenedor.appendChild(tabla);
}

function sumarValores() {
    let celdas = document.querySelectorAll(".numero"); 
    let suma = 0;

    celdas.forEach(function(celda) {
        suma += parseInt(celda.textContent);
    });

    document.getElementById("resultado").textContent = "La suma total es: " + suma;
}