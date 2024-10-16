const addTitle = document.querySelector('#note-title');
const addContent = document.querySelector('#note-content');
const btnAdd = document.querySelector('.btn-add');
const btnDelAll = document.querySelector('.btn-delete-all');
const noteListDiv = document.querySelector('.note-items'); 

// Starting default values
let notes = [];
let idCounter = 0;

// When opening or refreshing page, update note items
// using localStorage.getItem()
updateItem();

// Object Constructor Functions
// to create object type (Find it in google)
function Note(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
}

function updateItem() {

    // Update notes array from localStorage
    notes = localStorage.getItem('note-items') ? JSON.parse(localStorage.getItem('note-items')) : [];
    console.log('UPDATE NOTES => ', notes);

    // Check if localStorage has data or not
    if(localStorage.getItem('note-items')) {
        
        console.log(JSON.parse(localStorage.getItem('note-items')));
        // const arr = JSON.parse(localStorage.getItem('note-items'));
        // arr.array.forEach(element => {
        //     console.log(element);
        // });

        // Get data and assign to temporary array
        let arr = Array.from(JSON.parse(localStorage.getItem('note-items')));
        console.log(arr);

        // Loop all items to load them to individual cards in HTML
        arr.forEach(noteItem => {
            noteListDiv.innerHTML += 
            `
            <div class="note-card">
                <div>
                    <h2> ${noteItem.title} </h2>
                    <p class="note-card-content"> ${noteItem.content} </p>
                </div>
                <button class="btn-remove"> Remove </button>
            </div>
            `

            // 1, 2, 3
            // Check if localStorage data id's doesn't index correctly 
            // Ex: if id is 3 or 8 or 12 in the first index of an array,
            // it will change to its consecutive numbers to increasing
            // order -  Ex: (id:1, id:2, id:3, id:4, ...)
            if(noteItem.id !== idCounter + 1) {
                noteItem.id = idCounter + 1;
                notes[idCounter] = noteItem;
                console.log('ID COUNTER => ',idCounter);
            }
            idCounter++;
            
        });

        // After assigning correct id numbers, update it
        // into localStorage
        localStorage.setItem('note-items', JSON.stringify(notes));
        console.log('Updated Successfully!');
        console.log(notes.length);
    }
}

// Find index of item based from e.target (Used to remove specific card item)
function findItemIndex(target){
    const children = Array.from(target.closest('.note-items').children);
    const index = children.indexOf(target.closest('.note-card'));
    console.log(`NODES => `, children);
    console.log(`Children ==> ${children.indexOf(target.closest('.note-card'))}`);
    return index;
}

// Delete all items by putting '' (empty string) to text noteListDiv.textContent
function deleteAll(){
    notes.splice(0, notes.length);
    localStorage.setItem('note-items', JSON.stringify(notes));
    noteListDiv.textContent = '';
}

btnDelAll.addEventListener('click', deleteAll);

btnAdd.addEventListener('click', () => {

    if(addTitle.value && addContent.value) {
        console.log('Working!');
        console.log(addTitle.value, addContent.value);

        // Increment counter and create Note object to push into notes array
        idCounter++;
        const newItem = new Note(idCounter, addTitle.value, addContent.value);
        notes.push(newItem);
        console.log(notes);

        // Create card in HTML
        noteListDiv.innerHTML += 
            `
            <div class="note-card">
                <div>
                    <h2> ${newItem.title} </h2>
                    <p class="note-card-content"> ${newItem.content} </p>
                </div>
                <button class="btn-remove"> Remove </button>
            </div>
            `
        // Set item to localStorage
        localStorage.setItem('note-items', JSON.stringify(notes));
        console.log(JSON.stringify(notes));
        
    }
    // Clear content in input values
    addTitle.value = '';
    addContent.value = '';
});

noteListDiv.addEventListener('click', (e) => {
    if(e.target.className === 'btn-remove') {
        // console.log(e.target.closest('.note-card'));
        // findItemIndex(e.target);

        // const children = Array.from(e.target.closest('.note-items').children);
        // console.log(children);
        // const index = children.indexOf(e.target.closest('.note-card'));
        // console.log(`NODES => `, children);
        // console.log(`Children ==> ${children.indexOf(e.target.closest('.note-card'))}`);

        // Remove item from notes array and remove card in HTML,
        // update item to localStorage
        notes.splice(findItemIndex(e.target), 1);
        console.log(notes);
        const currentCard = e.target.closest('.note-card');
        currentCard.remove();

        localStorage.setItem('note-items', JSON.stringify(notes));
    }
});

// const btnDelAll = document.querySelector('.btn-delete-all');



// TODO 
// 1 - note array must be able to delete an item 
// 2 - use splice to delete an index inside an array
// 3 - count children of noteListDev to update the note array for localStorage
// 4 - Develop localStorage for user saving data inside website