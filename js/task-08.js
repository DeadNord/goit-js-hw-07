const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const create = document.querySelector(`[data-action="render"]`);
const destroy = document.querySelector(`[data-action="destroy"]`);


create.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = input.value;
  createBoxes(amount);
}


function createBoxes(amount) {
    let basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes(amount) {
    boxes.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}

console.log(input.value)