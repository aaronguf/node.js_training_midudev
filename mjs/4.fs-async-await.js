//IIFE - Inmediately Invoked Function Expression
const fs = require("node:fs/promises");

(async () => {

    console.log("leyendo archivo ...");
const text = await fs.readFile("./archivo.txt", "utf-8");
console.log("primer texto: ", text);
console.log("Hacer cosas mientras lee el archivo ...");

console.log("Leyendo el segundo archivo ... ");
const secondText = await fs.readFile("./archivo2.txt", "utf-8")
console.log(secondText);
})();


