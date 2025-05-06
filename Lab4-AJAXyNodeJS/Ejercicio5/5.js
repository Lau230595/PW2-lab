// Cargar Google Charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(cargarDatos);

function cargarDatos() {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => {
            let fechas = [];
            let regiones = [];
            let valoresPorRegion = {};

            // Obtener fechas desde la primera región
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].confirmed.length; j++) {
                    fechas.push(data[i].confirmed[j].date);
                }
                break; // solo una vez
            }

            // Recolectar datos de todas las regiones
            for (let i = 0; i < data.length; i++) {
                let region = data[i].region;
                regiones.push(region);
                valoresPorRegion[region] = [];

                for (let j = 0; j < data[i].confirmed.length; j++) {
                    valoresPorRegion[region][j] = parseInt(data[i].confirmed[j].value);
                }
            }

            // Crear los datos para el gráfico
            let datosGrafico = [['Fecha'].concat(regiones)];

            for (let i = 0; i < fechas.length; i++) {
                let fila = [fechas[i]];
                for (let r of regiones) {
                    fila.push(valoresPorRegion[r][i]);
                }
                datosGrafico.push(fila);
            }

            let dataTable = google.visualization.arrayToDataTable(datosGrafico);

            let options = {
                title: 'Comparación de casos confirmados por región',
                curveType: 'function',
                legend: { position: 'bottom' },
                tooltip: { trigger: 'none' } 
            };

            let chart = new google.visualization.LineChart(document.getElementById('grafico'));
            chart.draw(dataTable, options);
        });
}
