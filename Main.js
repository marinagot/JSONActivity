"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const data = __importStar(require("./supermarkets.json"));
console.log("------------- Iniciamos ejecución del programa -------------------\n");
let gastoPrevisto = 0;
for (let i = 0; data.supermercados.length > 0 && i < 3; i++) {
    let j = 0;
    while (data.supermercados[i].productos.length > 0 && j < 3) {
        gastoPrevisto = gastoPrevisto + Number(data.supermercados[i].productos[j].precio);
        j++;
        if (j == 2) {
            console.log(" ----- Juan se gastará en: " + data.supermercados[i].nombre +
                " un total de: " + gastoPrevisto.toFixed(2) + "€ ---- ");
        }
    }
}
console.log("\n ----- Juan tiene previsto gastarse: " + gastoPrevisto.toFixed(2) + "€ ---- \n");
console.log("------------- Finalizamos ejecución del programa -------------------\n");
