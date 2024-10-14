const container = document.getElementById("container");
let numSquares = 16;
let squareSide = (960 / numSquares);
console.log(squareSide);
for (let i = 0; i < numSquares; i++) {
    const col = document.createElement("div");
    col.classList.add("square");
    col.style.width = `${squareSide}px`;
    col.style.height = `${squareSide}px`;
    col.id = `div${i}`;
    container.appendChild(col);
    col.textContent = col.id;
    for (let j = 1; j < numSquares; j++) {
        const row = document.createElement("div");
        row.style.width = `${squareSide}px`;
        row.style.height = `${squareSide}px`;
        row.classList.add("square");
        row.id = `div${i}${j}`;
        container.appendChild(row);
        row.textContent = row.id;
    }
}
container.addEventListener("mouseover", (event) => {
    let target = event.target;
    let hoverSquareID = target.id;
    console.log(hoverSquareID);
    let hoverSquare = document.getElementById(hoverSquareID);
    hoverSquare.style.backgroundColor = "red";
});
