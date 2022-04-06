import * as data from "./supermarkets.json"

console.log ("------------- Iniciamos ejecución del programa -------------------\n");

let gastoPrevisto: number = 0;

for (let i = 0; data.supermercados.length > 0 && i < 3; i++) {
    let j: number = 0;
    while (data.supermercados[i].productos.length > 0 && j < 3) {
        gastoPrevisto = gastoPrevisto + Number(data.supermercados[i].productos[j].precio);
        j++;
        if (j == 2) {
            console.log(" ----- Juan se gastará en: " + data.supermercados[i].nombre +
            " un total de: "+ gastoPrevisto.toFixed(2) + "€ ---- ");
        }
    }
}

console.log("\n ----- Juan tiene previsto gastarse: " + gastoPrevisto.toFixed(2) + "€ ---- \n")
console.log ("------------- Finalizamos ejecución del programa -------------------\n");
