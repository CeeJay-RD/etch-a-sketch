const DEFAULT_COLOR = '#000000'
const DEFAULT_MODE =  'color'

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE


function setCurrentColor(newColor) {
  currentColor = newColor
}

function setCurrentMode(newMode) {
  currentMode = newMode
}

const gridContainer = document.getElementById('grid-container')
const colorPicker = document.getElementById('color-picker')
const grindItems = document.getElementsByClassName('grid-item')
const colorBtn = document.getElementById('color-btn')
const rainbowBtn = document.getElementById('rainbow-btn')

colorPicker.oninput = (e) => setCurrentColor(e.target.value)
rainbowBtn.onclick = () => setCurrentMode('rainbow')
colorBtn.onclick = () => setCurrentMode('color')


function makeRows(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.addEventListener('mouseover', changeGridColor)
      cell.addEventListener('mousedown', changeGridColor)
      gridContainer.appendChild(cell).className = "grid-item";
    };
  };

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

  makeRows(16, 16);

function changeGridColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return
  if (currentMode === 'rainbow') {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
  } else if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor
  }

}

  