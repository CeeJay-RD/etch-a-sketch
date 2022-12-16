const gridContainer = document.getElementById('grid-container');
let color = document.getElementById('color-picker');
let grindItems = document.getElementsByClassName('grid-item');

function makeRows(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = (c + 1);
      cell.addEventListener('mouseover', changeGridColor)
      gridContainer.appendChild(cell).className = "grid-item";
    };
  };

  makeRows(16, 16);

function changeGridColor () {
  color.addEventListener('input', function(e) {
    grindItems.style.color = this.value;

  })
}

// function changeGridColor(e) {
//   let color = `rgb(${[0, 0, 0].map(channel => {
//     return Math.floor(Math.random() * 256);
//   }).join(',')})`
//   Object.assign(e.target.style, {
//     backgroundColor : color,
//     opacity : 1
//   });
// }

  