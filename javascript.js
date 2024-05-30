"use strict";
const container = document.querySelector(".container");
const setGridBtn = document.querySelector(".setGrid");

const GRID_SIZE = 640;

let grid = 16 * 16;
let squareSize = 40;

const getRandomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function createGrid(grid, squareSize) {
  for (let i = 0; i < grid; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "square");
    div.style.cssText = `width: ${squareSize}px; height: ${squareSize}px`;
    let opacity = 0.1;

    let randomColor = `${getRandomBetween(0, 255)}, ${getRandomBetween(
      0,
      255
    )}, ${getRandomBetween(0, 255)}`;
    console.log(randomColor);

    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = `rgba(${randomColor}, ${opacity})`;
      if (opacity < 1.1) {
        opacity += 0.1;
      }
    });

    container.appendChild(div);
  }
}

function setGrid() {
  const gridNumber = Number(prompt("Please set grid size (AxA):"));

  if (!Number.isInteger(gridNumber)) return alert("It's not a number");
  if (gridNumber <= 0)
    return alert(`Wrong number - You can't insert 0 or negative number`);
  if (gridNumber > 100)
    return alert(`You can only insert number between 1 and 100`);

  grid = gridNumber * gridNumber;
  squareSize = GRID_SIZE / gridNumber;

  container.textContent = "";

  createGrid(grid, squareSize);
}
setGridBtn.addEventListener("click", setGrid);

createGrid(grid, squareSize);
