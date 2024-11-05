const btnCopy = document.querySelector('.btn-copy');
const btnGenerate = document.querySelector('.btn-generate')
const pwText = document.querySelector('#password-text');
const lengthSlider = document.querySelector('#pw-slider');
const lengthValue = document.querySelector('.length-value');
const upperEl = document.querySelector('#incUpper');
const lowerEl = document.querySelector('#incLower');
const numberEl = document.querySelector('#incNumber');
const symbolEl = document.querySelector('#incSymbol');

// Initialzie variables 
let pwLength = 1;

// Creates random generated words that includes with the 
function generatePassword(isUpper, isLower, isNumber, isSymbol, length) {

    // Types of characters to randomly generate a password
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%&*-_+/';

    let password = '';
    let chosenChars = '';

    const typeCount = isUpper + isLower + isNumber + isSymbol;
    console.log('count: ', typeCount);
    

    // Checks which type is being included otherwise
    // returns empty string
    chosenChars += isUpper ? upperChars : '';
    chosenChars += isLower ? lowerChars : '';
    chosenChars += isNumber ? numbers : '';
    chosenChars += isSymbol ? symbols : '';
    console.log(chosenChars);
    

    // Checks if length is not empty and at least
    // one type of characters in included in generating
    // password
    if(length === 0) {
        alert('Select a password length');
        return '';
    } else if(typeCount === 0) {
        alert('Include at least one type of characters');
        return '';
    }
    else {
        // Get random indices of the chosen characters from before
        // and concatenate them to form a password
        for(let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chosenChars.length);
            password += chosenChars[randomIndex];
        }
        return password;
    }
}

// When changing a value from the slider, it
// assigns to the length value to indicate
// what number is currently being drag.
lengthSlider.addEventListener('input', () => {
    // console.log(lengthSlider.value);
    lengthValue.innerText = lengthSlider.value;
    pwLength = parseInt(lengthSlider.value);
})

// Get all checked types of characters and length to 
// generate them from the assign function
btnGenerate.addEventListener('click', () => {
    console.log(pwLength);
    
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

    // Get all types of characters and returns generated password
    const result = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, pwLength);
    console.log('Password generated => ', result);

    // Displays generated password to the input form
    pwText.value = result;
})

// Copies the current value in the input form
btnCopy.addEventListener('click', () => {
    const text = pwText.value;
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
})







