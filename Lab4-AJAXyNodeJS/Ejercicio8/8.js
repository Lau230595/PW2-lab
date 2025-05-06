// Cargamos Google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(cargarDatos);

function cargarDatos() {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => {
            let fechas = [];
            let regiones = [];
            let valoresPorRegion = {};

            // Usamos fechas del primer registro válido
            for (let i = 0; i < data.length; i++) {
                if (data[i].region !== "Lima" && data[i].region !== "Callao") {
                    for (let j = 0; j < data[i].confirmed.length; j++) {
                        fechas.push(data[i].confirmed[j].date);
                    }
                    break;
                }
            }

            // Recorremos regiones que NO sean Lima ni Callao
            for (let i = 0; i < data.length; i++) {
                let region = data[i].region;
                if (region !== "Lima" && region !== "Callao") {
                    regiones.push(region);
                    valoresPorRegion[region] = [];

                    for (let j = 0; j < data[i].confirmed.length; j++) {
                        valoresPorRegion[region][j] = parseInt(data[i].confirmed[j].value);
                    }
                }
            }

            // Preparamos los datos para Google Charts
            let datosGrafico = [['Fecha'].concat(regiones)];
            for (let i = 0; i < fechas.length; i++) {
                let fila = [fechas[i]];
                for (let r of regiones) {
                    fila.push(valoresPorRegion[r][i]);
                }
                datosGrafico.push(fila);
            }

            // Mostramos gráfico
            let dataTable = google.visualization.arrayToDataTable(datosGrafico);
            let options = {
                title: 'Crecimiento diario por región (sin Lima y Callao)',
                curveType: 'function',
                legend: { position: 'bottom' }
            };

            let chart = new google.visualization.LineChart(document.getElementById('grafico'));
            chart.draw(dataTable, options);
        });
}
