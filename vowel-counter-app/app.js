const words = document.querySelector('.words-area');
const btnCheck = document.querySelector('.btn-check');
const ctrText = document.querySelector('.counter-number');

const vowels = ['a','e','i','o','u'];
let counter = 0;

btnCheck.addEventListener('click', () => {
    // console.log(words.value);
    const str = words.value;
    // console.log(str.length);

    for(let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();
        // console.log(ch.toLowerCase());

        if(vowels.includes(ch)) {
            counter++;
            console.log('Yes => ', ch);
            console.log('Counter: ', counter);
            
        }
    }
    console.log('Vowels: ', counter);
    ctrText.textContent = counter;

    counter = 0;
});
