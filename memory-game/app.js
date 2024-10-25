const content = document.querySelector('.game-section');
const resetBtn = document.querySelector('.btn-reset');

// Assign emojis to array
let cardArr = 
[
    '😊','😊', 
    '😂','😂', 
    '❤️','❤️', 
    '😍','😍',
    '😒','😒',
    '👌','👌',
    '😘','😘',
    '😁','😁'
];

// Create array and counter to monitor game changes
let flippedCards = [];
let matchCardsCount = 0;


// const resetBtn = document.querySelector('.btn-reset');
resetBtn.addEventListener('click', () => {
    matchCardsCount = 0
    flippedCards = [];
    content.innerText = '';
    const resetCards = shuffle(cardArr)
    generateCards(resetCards);
});

// 
// FUNCTIONS
// 

// Shuffle all contents inside and assign to random indices of the array
function shuffle(arr) {
    
    console.log('Total Length: ', arr.length);
    console.log(arr);
    
    for(let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        
        [arr[i], arr[j]] = [arr[j], arr[i]];
        // console.log(`Index: ${j}, Array: `,arr);
    }
    
    return arr;
}

// Create game board and add click events in each card
function generateCards(arr) {
    for(let i = 0; i < arr.length; i++) {
        const divCard = document.createElement('div');
        const divFront = document.createElement('div');
        const divBack = document.createElement('div');
        divFront.classList.add('card-front');
        divBack.classList.add('card-back');
        
        divBack.textContent = arr[i];
        divCard.append(divFront);
        divCard.append(divBack);
        divCard.classList.add('card');

        divCard.addEventListener('click', flipCard)

        content.append(divCard);
    }

    // Cards
    // Define here to get all cards
    // const allCards = document.querySelectorAll('.card');

    // allCards.forEach((card) => {
    //     console.log(card);
    //     card.addEventListener('click', (e) => {
    //             e.target.classList.add('flipped');
    //             flippedCards.push(e.target);
    //             console.log(flippedCards);
    //             console.log(e.target.parentElement);
    //         });
    //     card.addEventListener('click', flipCard);
    // });
}

// Runs if user clicked a card
function flipCard() {

    // e.target.classList.add('flipped');
    // flippedCards.push(e.target);

    if(this.classList.contains('flipped')) {
        console.log('Already clicked');
        return;
    }

    // Add class 'flipped' to selected card
    this.classList.add('flipped');
    // Add to flippedCards array to check
    flippedCards.push(this);
    
    console.log(flippedCards);

    if(flippedCards.length === 2) {
        checkCards();
    }
}


// Checking cards if both are identical 
function checkCards() {

    // Assign both cards from flippedCards array
    const [card1, card2] = flippedCards;

    console.log(card1, card2);

    if(card1.innerText === card2.innerText) {

        setTimeout(() => {
            card1.classList.add('matched');
            card2.classList.add('matched');
        }, 1000);

        matchCardsCount++;

        if(matchCardsCount === cardArr.length / 2) {
            setTimeout(() => {
                alert('You Win, Click Reset to Play Again!');
            }, 1500);
            // matchCardsCount = 0
            // flippedCards = [];
            // generateCards(shuffle(cardArr));
        }
    } else {

        // If both are not identical, remove class 'flipped'
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }, 1000)
    }

    // Assign flippedCards array to empty
    flippedCards = [];
    console.log('FlippedCards array = Reset to 0');
}


// Initialize the game on load
// Shuffle card items randomly 
const shuffledArr = shuffle(cardArr);
generateCards(shuffledArr);