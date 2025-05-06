const xhttp = new XMLHttpRequest();

xhttp.onload = function () {
    const datos = JSON.parse(this.responseText);

    let resultado = "<ul>";

    for (let i = 0; i < datos.length; i++) {
        let region = datos[i];
        let total = 0;

        for (let j = 0; j < region.confirmed.length; j++) {
            total += parseInt(region.confirmed[j].value);
        }

        resultado += "<li>" + region.region + ": " + total + " casos</li>";
    }

    resultado += "</ul>";
    document.getElementById("resultado").innerHTML = resultado;
};

xhttp.open("GET", "../data.json", true);
xhttp.send();
