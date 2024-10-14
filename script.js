const container = document.getElementById("container");
const buttonDiv = document.getElementById("btn1");
let gridDiv = document.createElement("div");
gridDiv.id = "gridDiv";
let btn = document.createElement("button");
buttonDiv.appendChild(btn);
btn.textContent = "Grid Size";
container.appendChild(gridDiv);

function createGrid(squares) {
    let numSquares = squares;
    let squareSide = (960 / numSquares);
    for (let i = 0; i < numSquares; i++) {
        const col = document.createElement("div");
        col.classList.add("square");
        col.style.width = `${squareSide}px`;
        col.style.height = `${squareSide}px`;
        col.id = `div${i}`;
        gridDiv.appendChild(col);
        for (let j = 1; j < numSquares; j++) {
            const row = document.createElement("div");
            row.style.width = `${squareSide}px`;
            row.style.height = `${squareSide}px`;
            row.classList.add("square");
            row.id = `div${i}${j}`;
            gridDiv.appendChild(row);
        }
    }
    gridDiv.addEventListener("mouseover", (event) => {
        let target = event.target;
        let hoverSquareID = target.id;
        let hoverSquare = document.getElementById(hoverSquareID);
        hoverSquare.style.backgroundColor = "red";
    });
}

btn.addEventListener("click", (e) => {
    let validNum = false;
    let numSquares = parseInt(prompt(`How many squares would you like displayed?
    Maximum 100.`));
    while (!validNum) {
        if (numSquares <= 100) {
            validNum = true;
        } else {
            numSquares = parseInt(prompt("Maximum value is 100"));
        }
    }
    gridDiv.innerHTML = "";
    container.replaceChild(gridDiv, gridDiv);
    createGrid(numSquares);
});

createGrid(16);
