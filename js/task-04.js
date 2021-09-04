

const counterValue = document.getElementById("value");
const increment = counter.querySelectorAll("button")[1];
const decrement = counter.querySelectorAll("button")[0];

increment.addEventListener('click', () => {
    counterValue.innerHTML++;
});

decrement.addEventListener('click', () => {
    counterValue.innerHTML--;
});