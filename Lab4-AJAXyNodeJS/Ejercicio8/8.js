// Cargamos Google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(cargarDatos);

function cargarDatos() {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => {
            let fechas = [];
            let sumaPorDia = [];

            // Usamos las fechas de la primera región como referencia
            for (let i = 0; i < data[0].confirmed.length; i++) {
                fechas.push(data[0].confirmed[i].date);
                sumaPorDia[i] = 0;
            }

            // Sumamos los valores diarios, excluyendo Lima y Callao
            for (let region of data) {
                if (region.region !== "Lima" && region.region !== "Callao") {
                    for (let i = 0; i < region.confirmed.length; i++) {
                        sumaPorDia[i] += parseInt(region.confirmed[i].value);
                    }
                }
            }

            // Preparamos los datos para Google Charts
            let datosGrafico = [['Fecha', 'Total Confirmados']];
            for (let i = 0; i < fechas.length; i++) {
                datosGrafico.push([fechas[i], sumaPorDia[i]]);
            }

            let dataTable = google.visualization.arrayToDataTable(datosGrafico);

            let options = {
                title: 'Crecimiento diario (sin Lima y Callao)',
                curveType: 'function',
                legend: { position: 'bottom' }
            };

            let chart = new google.visualization.LineChart(document.getElementById('grafico'));
            chart.draw(dataTable, options);
        });
}
