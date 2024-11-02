const board = document.querySelector('.board');
const btnReset = document.querySelector('.btn-reset');
const allTiles = document.querySelectorAll('.tile');

// Initial values
let tileArray = Array.from(allTiles);
let flagOpp = true;
let someArrayO = [];
let someArrayX = [];
let checker = false;
let countO = 0;
let countX = 0;

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
    // tileArray = Array.from(allTiles);
    // console.log(tileArray);
    // for(let i = 0; i < tileArray.length; i++) {
    //     console.log(tileArray[i]);
    // }

    // Opponent's turn to place 'X'
    if(flagOpp) {getRandomTile()}


    // Check each tile that has 'O' & 'X'
    // and put them to another array to check
    tileArray.map((item, index) => {
        if(item.innerText === 'O') {
            // console.log(item.innerText, index);
            // if (!someArrayO.includes(index)) {
            // }
            someArrayO.push(index);
        } 
        
        if (item.innerText === 'X') {
            someArrayX.push(index);
        }
    })

    
    // Check each 'O''s & 'X''s array if 
    // they passed the winning combination
    for(let i = 0; i < combinations.length; i++) {
        console.log(combinations[i]);
        for(let j = 0; j < combinations[i].length; j++) {
            if(someArrayO.includes(combinations[i][j])) {
                console.log('2ND LOOP: CIRCLE => ',combinations[i][j]);
                countO++;
                console.log('CountO:',countO);
            } else if(someArrayX.includes(combinations[i][j])) {
                console.log('2ND LOOP: CROSS => ',combinations[i][j]);
                countX++;
                console.log('CountX:',countX);
            }
            
        }
        console.log(`---------------------`);
        

        // Conditions if user wins or loses
        if(countO === 3) {
            alertModal('You win!');
            break;
        } else if (countX === 3) {
            alertModal('You lose!');
            break;
        }
        else 
            countO = 0;
            countX = 0;
    }
    
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
    someArrayO = [];
    someArrayX = [];
    countO = 0;
    countX = 0;
    // console.log('working');

    allTiles.forEach((item) => {
        item.classList.remove('circle'); 
        item.classList.remove('cross'); 
        item.textContent = '';
    })
}

// Default modal if user wins or lose
function alertModal(text) {
    setTimeout(() => {
        alert(text)
        allTiles.forEach(item => {
            item.innerText = '';
            item.classList.remove('circle');
            item.classList.remove('cross');
        })
        resetBoard();

    }, 500);
}
