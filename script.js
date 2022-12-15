const gridContainer = document.getElementById('grid-container');

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

function changeGridColor(e) {
  let color = `rgb(${[0, 0, 0].map(channel => {
    return Math.floor(Math.random() * 256);
  }).join(',')})`
  Object.assign(e.target.style, {
    backgroundColor : color,
    opacity : 0.25
  });
}

  