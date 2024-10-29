const countNumber = document.querySelector('.count-number');
const btnPlus = document.querySelector('.btn-plus');
const btnReset = document.querySelector('.btn-reset');
const btnMinus = document.querySelector('.btn-minus');

let counter;

function loadCounter() {
    counter = 0;
}

function increaseCount() {
    // counter = counter++;
    // console.log(counter++);
    
    countNumber.innerText = ++counter;
    console.log(counter);
    
}

function decreaseCount() {
    // return counter--;
    countNumber.innerText = --counter;
    console.log(counter);
}

function reset() {
    // return counter = 0;
    counter = 0;
    countNumber.textContent = counter;
    console.log(counter);
}

btnPlus.addEventListener('click', increaseCount);
btnMinus.addEventListener('click', decreaseCount);
btnReset.addEventListener('click', reset);

// Initialize on load 
loadCounter();