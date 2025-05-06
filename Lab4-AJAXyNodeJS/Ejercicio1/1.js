const xhttp = new XMLHttpRequest();

xhttp.onload = function () {

    const datos = JSON.parse(this.responseText);

    let lista = "<ul>";

    for (let i = 0; i < datos.length; i++) {
        lista += "<li>" + datos[i].region + "</li>";
    }

    lista += "</ul>";

    document.getElementById("resultado").innerHTML = lista;
};

xhttp.open("GET", "../data.json", true);

xhttp.send();
