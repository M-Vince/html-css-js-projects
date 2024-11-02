const board = document.querySelector('.board');
const btnReset = document.querySelector('.btn-reset');
const allTiles = document.querySelectorAll('.tile');
const message = document.querySelector('p');

// Initial values
let tileArray = Array.from(allTiles);
let flagOpp = true;
let isTie = false;
let roundWon = false;
let roundLose = false;

// Board Indexes 
// [
//     0, 1, 2,
//     3, 4, 5,
//     6, 7, 8   
// ]

// An array to check the winning combinations
const combinations = 
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

// Apply each tile to have clickable events
allTiles.forEach((item) => {
    item.addEventListener('click', () => {

        // User click inserts a 'O' to a tile
        // and check if its passes the winning
        // combinations
        item.textContent = 'O';
        item.classList.add('circle');
        checkCombination();
        console.log('TileArray Length: ', tileArray.length);
        
    });
})

btnReset.addEventListener('click', resetBoard);

// Check users play if each tile has a winning pattern
function checkCombination() {

    // Opponent's turn to place 'X'
    if(flagOpp) {getRandomTile()}

    // NEW: Using tileArray (board), find the pattern in the winning
    // combination array and assign to 3 variables, it checks whether
    // it passes the 'O' & 'X' pattern
    for (let i = 0; i < combinations.length; i++) {
        const winCombi = combinations[i];
        let [a, b, c] = winCombi;

        if(tileArray[a].innerText === 'O' && 
            tileArray[b].innerText === 'O' && 
            tileArray[c].innerText === 'O') {
            console.log(a, b, c);
            roundWon = true;
            break;
            
        } else if (tileArray[a].innerText === 'X' && 
            tileArray[b].innerText === 'X' && 
            tileArray[c].innerText === 'X') {
            console.log(a, b, c);
            roundLose = true;
            break;
        }
    }

    // Check if user win or lose
    if(roundWon) {
        result('You Win!');
        return;
    }
    else if(roundLose) {
        result('You Lose!');
        return;
    }

    // Check if all tiles aren't empty and
    // return if it's tie or not
    isTie = tileArray.every(winCombi => {
        return winCombi.innerText !== '';
    });

    if(isTie) {
        result('Tie!');
        return;
    }
    // console.log('is Tie? => ',isTie);
    
}

// Find random tile for opponent to place 'X'
function getRandomTile() {
    // Get random index; tile == index
    const randomIndex = Math.floor(Math.random() * tileArray.length);
    console.log('Random Index: ' , randomIndex);
    // console.log(tileArray[randomIndex].innerText);

    // If the tile is empty, it places 'X' as opponent's mark & ends his turn
    if(tileArray[randomIndex].textContent) {
        // console.log('Already have a value: ', tileArray[randomIndex]);

        // Recursive function it gets an empty tile
        getRandomTile();
        
    } else {
        // console.log(`Flag is ${flagOpp} at the moment`);
        tileArray[randomIndex].textContent = 'X';
        tileArray[randomIndex].classList.add('cross');

        // Checks the remaining empty tiles & assign to an array 
        const arr = tileArray.filter((item) => {
            if(!item.innerText) {
                return item;
            }
        })
        console.log(arr);

        // The opponent will play until it reaches
        // the length that's less than 2
        if(arr.length < 2) {
            flagOpp = false;
            // console.log('Flag is false', flagOpp);
        }
    }
}

// Resets every tile to their initial values
function resetBoard() {
    tileArray = Array.from(allTiles);
    flagOpp = true;
    isTie = false;
    roundWon = false;
    roundLose = false;
    message.innerText = '';

    allTiles.forEach((item) => {
        item.classList.remove('circle'); 
        item.classList.remove('cross'); 
        item.innerText = '';
    })
}

// Default modal if user wins or lose
function result(text) {
    setTimeout(() => {
        message.innerText = text;
    }, 500);
}
