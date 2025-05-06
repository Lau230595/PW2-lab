let hoy = new Date();
let fiesta = new Date(hoy.getFullYear(), 7, 15);

if (hoy > fiesta) {
    fiesta.setFullYear(hoy.getFullYear() + 1);
}

let diferencia = fiesta - hoy;
let dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

document.getElementById("resultado").textContent = "Faltan " + dias + " días para el día de Arequipa 🎉🌋";