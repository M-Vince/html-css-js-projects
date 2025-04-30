const btnAnswer = document.querySelectorAll('.btn-answer');
const questionText = document.querySelector('p');
const categoryText = document.querySelector('.category-type');
const h1 = document.querySelector('h1');
let correctAnswer;
let currData;
let currIndex;
let score = 0;


async function loadAPI() {
    
    try {
        const api = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
        const response = await fetch(`${api}`);
        const data = await response.json();
        console.log(data.results);
        currIndex = 0;
        saveData(data.results);
    } catch (e) {
        throw new Error('Not loaded!');
    }
    
}

loadAPI();

function saveData(data) {
    currData = data;
    loadQuestions(data[currIndex]);
}

function loadQuestions(data) {
    let correct = data.correct_answer;
    let incorrect = data.incorrect_answers;
    let question = data.question;
    let category = data.category;

    correctAnswer = correct;
    let randomAns = incorrect;
    // randomAns.forEach(data => {
    //     console.log(data);
    // })
    console.log(randomAns);
    console.log(randomAns.length);
    
    randomAns.splice(Math.floor(Math.random() * (randomAns.length + 1)), 0, correct);
    console.log(randomAns);

    questionText.innerText = question;
    categoryText.innerText = category;

    // const arr = ['Quest', 'Inventory', 'Skills', 'Profile'];

    // btnAnswer.forEach((btn, index) => {
    //     btn.innerText = arr[index];
    // })

    btnAnswer.forEach((btn, index) => {
        btn.innerText = randomAns[index];
    })

}

btnAnswer.forEach(item => {
    item.addEventListener('click', () => {
        if(correctAnswer === item.innerText) {
            console.log('Correct! ');  
            score++;
        } else {
            console.log('Wrong!');
        }

        if(currIndex != 9) {
            currIndex++;
            console.log('Current index: ', currIndex);
            loadQuestions(currData[currIndex])
        } else {
            console.log('You win');
            h1.innerText = `You scored ${score}/10!`
        }
    })
})