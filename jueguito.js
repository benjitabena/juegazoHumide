/*let bootstrap = require("bootstrap");
var Losgrids = document.querySelector(".grid-container");

let matrix = [
    [01, 02, 03, 04, 05, 06, 07, 08, 09, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
];

let table = document.getElementById("matrixTable");
for (let i = 0; i < matrix.length; i++) {
    const element = array[i];
}

// Crear la grilla de 10x10 con divs
for (let f = 0; f < 10; f++) {
    for (let c = 0; c < 10; c++) {
        // Crear un nuevo div para cada celda de la grilla
        let div = document.createElement("div");
        div.className = "grid-item";
        div.textContent = f + "x" + c; // Puedes personalizar el contenido aquí

        // Agregar el div al contenedor de la grilla
        Losgrids.appendChild(div);
    }
}
// Agrega este código en tu archivo JavaScript

*/

const gridContainer = document.getElementById("gridContainer");

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        
        gridItem.addEventListener("click", () => {
            gridItem.classList.toggle("colored");
        });
        
        gridContainer.appendChild(gridItem);
    }
}

