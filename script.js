const canvas = document.querySelector(".canvas");

const createDiv = function () {
  let div = document.createElement("div");
  div.classList.add("div");
  div.textContent = "";
  return div;
};

const createGrid = function (num) {
  canvas.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  for (let i = 0; i < num * num; i++) {
    canvas.appendChild(createDiv());
  }
};

createGrid(16);
