// Cargamos Google Charts
google.charts.load('current', {'packages':['corechart']});

// Al cargar la página, llenamos el select con las regiones del JSON
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

// Esta función se activa al hacer clic en el botón
function generarGrafico() {
    google.charts.setOnLoadCallback(() => {
        fetch('../data.json')
            .then(res => res.json())
            .then(data => {
                const select = document.getElementById("regionesSelect");
                let seleccionadas = [];

                // Obtenemos las regiones seleccionadas
                for (let i = 0; i < select.options.length; i++) {
                    if (select.options[i].selected) {
                        seleccionadas.push(select.options[i].value);
                    }
                }

                // Validación básica
                if (seleccionadas.length === 0) {
                    alert("Selecciona al menos una región para comparar.");
                    return;
                }

                let fechas = [];
                let valores = {};

                // Inicializamos los arrays de cada región
                for (let r of seleccionadas) {
                    valores[r] = [];
                }

                // Buscamos en el JSON los datos de las regiones seleccionadas
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

                // Construimos la tabla para Google Charts
                let datosGrafico = [['Fecha'].concat(seleccionadas)];
                for (let i = 0; i < fechas.length; i++) {
                    let fila = [fechas[i]];
                    for (let r of seleccionadas) {
                        fila.push(valores[r][i]);
                    }
                    datosGrafico.push(fila);
                }

                // Mostramos el gráfico
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
