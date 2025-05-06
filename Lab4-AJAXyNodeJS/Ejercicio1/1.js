const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    const data = JSON.parse(this.responseText);
    let output = "<ul>";
    for (let region of data) {
        output += `<li>${region.region}</li>`;
    }
    output += "</ul>";
    document.getElementById("output").innerHTML = output;
}
xhttp.open("GET", "data.json");
xhttp.send();
