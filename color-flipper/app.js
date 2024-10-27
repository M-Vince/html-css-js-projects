const allBtn = document.querySelectorAll('.btn');
const btnRandom = document.querySelector('.btn-random');
const btnRandOne = document.querySelector('.btn-random-one');
const bgColorInfo = document.querySelector('.bg-color');
const body = document.querySelector('body');

const hexValues = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
]

// FUNCTIONS

function randomHexIndex() {
    const index = Math.floor(Math.random() * hexValues.length);
    console.log(index);
    
    const randomHexValue = hexValues[index];
    console.log(randomHexValue);
    
    return randomHexValue;
}

function randomColor() {
    let hexString = '#';
    let hexValue = ''
    for(let i = 0; i < 6; i++) {
        hexValue = randomHexIndex();
        hexString += hexValue;
    }

    console.log(hexString);
    return hexString;    
}

function randomColorWheel() {
    allBtn.forEach((btn) => {
        let color = randomColor();
        btn.style.backgroundColor = color;

        btn.addEventListener('click', () => {
            body.style.backgroundColor = color;
            bgColorInfo.textContent = color;
        })
    })
}



// randomColor();
// body.style.backgroundColor = randomColor();

btnRandom.addEventListener('click', randomColorWheel)

btnRandOne.addEventListener('click', () => {
    const color = randomColor();
    body.style.backgroundColor = color; 
    bgColorInfo.textContent = color;
})

// INITIALIZE ON LOAD
randomColorWheel();

