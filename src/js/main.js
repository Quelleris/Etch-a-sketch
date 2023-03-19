const colorInput = document.querySelector("#colorInput");
const sizeInput = document.querySelector("#sizeInput");
const sizeValue = document.querySelector(".size-value");
const borderBtn = document.querySelector("#borderBtn");
const gridItems = document.querySelectorAll(".grid-item");
const resetBtn = document.querySelector("#reset");
const modeRadioBtns = document.querySelectorAll('input[name="modeChoice"]');

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

modeRadioBtns.forEach(btn => {
    btn.addEventListener('click', changeMode);
})

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
    if (mode === 'color') {
        color = colorInput.value;
        e.target.style.backgroundColor = color;
        console.log('color', mode);
    }    
    else if (mode === 'rainbow') {
        color = getRandomColor();
        e.target.style.backgroundColor = color;
    }    
            // e.target.style.backgroundColor = color;
        // case 'darken':
        //     color = darkenColor(color);
        //     e.target.style.backgroundColor = color;
        // case 'lighten':
        //     color = lightenColor(color);
        //     e.target.style.backgroundColor = color;
    }

function changeMode(e) {
    mode = e.target.value;
    console.log(mode);
}

function reset() {
    const gridItems = document.querySelectorAll(".grid-item");
    if (gridItems) {
        gridItems.forEach(item => {
            item.style.backgroundColor = "#FFFFFF";
        });
    }
}

function getRandomColor() {
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    const randomColor = `rgb(${R}, ${G}, ${B})`;
    return randomColor;
}