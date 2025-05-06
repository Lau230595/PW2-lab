const xhttp = new XMLHttpRequest();

xhttp.onload = function () {
    const datos = JSON.parse(this.responseText);
    let totales = [];

    for (let i = 0; i < datos.length; i++) {
        let suma = 0;

        for (let j = 0; j < datos[i].confirmed.length; j++) {
            suma += parseInt(datos[i].confirmed[j].value);
        }

        totales.push({ nombre: datos[i].region, total: suma });
    }

    totales.sort(function(a, b) {
        return b.total - a.total;
    });

    let resultado = "<ol>";
    for (let k = 0; k < 10; k++) {
        resultado += "<li>" + totales[k].nombre + ": " + totales[k].total + " casos</li>";
    }
    resultado += "</ol>";

    document.getElementById("resultado").innerHTML = resultado;
};

xhttp.open("GET", "../data.json", true);
xhttp.send();
