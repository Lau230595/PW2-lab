google.charts.load('current', {'packages':['corechart']});

window.onload = function () {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => {
            const select = document.getElementById("regionesSelect");

            for (let i = 0; i < data.length; i++) {
                let opcion = document.createElement("option");
                opcion.value = data[i].region;
                opcion.text = data[i].region;
                select.appendChild(opcion);
            }
        });
};

function generarGrafico() {
    google.charts.setOnLoadCallback(() => {
        fetch('../data.json')
            .then(res => res.json())
            .then(data => {
                const select = document.getElementById("regionesSelect");
                let seleccionadas = [];

                for (let i = 0; i < select.options.length; i++) {
                    if (select.options[i].selected) {
                        seleccionadas.push(select.options[i].value);
                    }
                }

                if (seleccionadas.length === 0) {
                    alert("Selecciona al menos una región para comparar.");
                    return;
                }

                let fechas = [];
                let valores = {};

                for (let r of seleccionadas) {
                    valores[r] = [];
                }

                for (let region of data) {
                    if (seleccionadas.includes(region.region)) {
                        for (let i = 0; i < region.confirmed.length; i++) {
                            if (fechas.length < region.confirmed.length) {
                                fechas.push(region.confirmed[i].date);
                            }
                            valores[region.region][i] = parseInt(region.confirmed[i].value);
                        }
                    }
                }

                let datosGrafico = [['Fecha'].concat(seleccionadas)];
                for (let i = 0; i < fechas.length; i++) {
                    let fila = [fechas[i]];
                    for (let r of seleccionadas) {
                        fila.push(valores[r][i]);
                    }
                    datosGrafico.push(fila);
                }

                let dataTable = google.visualization.arrayToDataTable(datosGrafico);
                let options = {
                    title: 'Comparación personalizada de regiones',
                    curveType: 'function',
                    legend: { position: 'bottom' }
                };

                let chart = new google.visualization.LineChart(document.getElementById('grafico'));
                chart.draw(dataTable, options);
            });
    });
}
