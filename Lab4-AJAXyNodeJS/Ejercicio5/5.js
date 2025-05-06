google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(cargarDatos);

function cargarDatos() {
    fetch('../data.json')
        .then(res => res.json())
        .then(datos => {
            let regionesObjetivo = ['Arequipa', 'Cusco', 'Piura'];
            let fechas = [];
            let mapaValores = {};

            for (let i = 0; i < datos.length; i++) {
                if (regionesObjetivo.includes(datos[i].region)) {
                    mapaValores[datos[i].region] = [];

                    for (let j = 0; j < datos[i].confirmed.length; j++) {
                        if (fechas.length < datos[i].confirmed.length) {
                            fechas.push(datos[i].confirmed[j].date);
                        }
                        mapaValores[datos[i].region].push(parseInt(datos[i].confirmed[j].value));
                    }
                }
            }

            // Creamos encabezado
            let dataArray = [['Fecha'].concat(regionesObjetivo)];

            for (let k = 0; k < fechas.length; k++) {
                let fila = [fechas[k]];
                for (let r = 0; r < regionesObjetivo.length; r++) {
                    fila.push(mapaValores[regionesObjetivo[r]][k]);
                }
                dataArray.push(fila);
            }

            let data = google.visualization.arrayToDataTable(dataArray);

            let opciones = {
                title: 'Comparación de regiones',
                curveType: 'function',
                legend: { position: 'bottom' }
            };

            let chart = new google.visualization.LineChart(document.getElementById('grafico'));
            chart.draw(data, opciones);
        });
}
