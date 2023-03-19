const colorInput = document.querySelector("#colorInput");
const sizeInput = document.querySelector("#sizeInput");
const sizeValue = document.querySelector(".size-value");
const borderBtn = document.querySelector("#borderBtn");
const gridItems = document.querySelectorAll(".grid-item");
const resetBtn = document.querySelector("#reset");

const DEFAULT_COLOR = '#000000';
const DEFAULT_MODE = 'color';
const DEFAULT_GRID_SIZE = 16;

let color = DEFAULT_COLOR;
let gridSize = DEFAULT_GRID_SIZE;
let mode = DEFAULT_MODE;

window.onload = () => {
    changeGrid();
}

colorInput.addEventListener("change", () => {
    color = colorInput.value;
})

sizeInput.addEventListener("input", (e) => {
    gridSize = e.target.value;
    sizeValue.textContent = e.target.value;
})

sizeInput.addEventListener("change", changeGrid);

borderBtn.addEventListener("click", toggleBorder);

function toggleBorder() {
    const gridItems = document.querySelectorAll(".grid-item");

    if(gridItems) {
        gridItems.forEach(item => {
            item.classList.toggle("border");
        });
    }
}

resetBtn.addEventListener("click", reset);

function changeGrid() {
    const grid = document.querySelector("#grid");
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize ** 2; i++) {
        const gridElem = document.createElement("div");
        gridElem.classList.add("grid-item");
        gridElem.addEventListener("mouseenter", colorItem);  //mouseenter
        grid.appendChild(gridElem);
    }
}

function colorItem(e) {
    e.target.style.backgroundColor = color;
}

function reset() {
    const gridItems = document.querySelectorAll(".grid-item");
    if (gridItems) {
        gridItems.forEach(item => {
            item.style.backgroundColor = "#FFFFFF";
        });
    }
}