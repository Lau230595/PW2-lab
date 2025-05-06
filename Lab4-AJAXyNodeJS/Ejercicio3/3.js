let regionesTotales = [];
for (let region of data) {
    let total = 0;
    for (let d of region.confirmed) {
        total += parseInt(d.value);
    }
    regionesTotales.push({ nombre: region.region, total: total });
}
regionesTotales.sort((a, b) => b.total - a.total);
let output = "<ol>";
for (let i = 0; i < 10; i++) {
    output += `<li>${regionesTotales[i].nombre}: ${regionesTotales[i].total}</li>`;
}
output += "</ol>";
