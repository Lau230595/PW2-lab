google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(dibujarGrafico);

function dibujarGrafico() {
    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            let fechas = data[0].confirmed.map(d => d.date);
            let graficoData = [['Fecha', 'Total sin Lima y Callao']];

            for (let i = 0; i < fechas.length; i++) {
                let total = 0;
                for (let j = 0; j < data.length; j++) {
                    let nombre = data[j].region;
                    if (nombre !== "Lima" && nombre !== "Callao") {
                        total += parseInt(data[j].confirmed[i].value);
                    }
                }
                graficoData.push([fechas[i], total]);
            }

            const dataTable = google.visualization.arrayToDataTable(graficoData);
            const opciones = {
                title: 'Crecimiento diario sin Lima y Callao',
                curveType: 'function',
                legend: { position: 'bottom' }
            };

            const chart = new google.visualization.LineChart(document.getElementById('grafico'));
            chart.draw(dataTable, opciones);
        });
}
