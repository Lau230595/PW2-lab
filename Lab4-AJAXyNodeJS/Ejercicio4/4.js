google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(cargarDatos);

function cargarDatos() {
    fetch('../data.json')
        .then(respuesta => respuesta.json())
        .then(datos => {
            let arequipa = null;
            for (let i = 0; i < datos.length; i++) {
                if (datos[i].region === "Arequipa") {
                    arequipa = datos[i];
                    break;
                }
            }

            if (!arequipa) {
                document.getElementById("grafico").innerHTML = "No se encontró la región Arequipa";
                return;
            }

            let dataGrafico = [['Fecha', 'Casos confirmados']];
            for (let j = 0; j < arequipa.confirmed.length; j++) {
                let dia = arequipa.confirmed[j];
                dataGrafico.push([dia.date, parseInt(dia.value)]);
            }

            let datosGoogle = google.visualization.arrayToDataTable(dataGrafico);
            let opciones = {
                title: 'Evolución de casos en Arequipa',
                curveType: 'function',
                legend: { position: 'bottom' }
            };
            let chart = new google.visualization.LineChart(document.getElementById('grafico'));
            chart.draw(datosGoogle, opciones);
        });
}
