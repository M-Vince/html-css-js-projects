const input = document.querySelector('.create-item-input');
const addBtn = document.querySelector('.create-item-btn');
const taskList = document.querySelector('.task-list');

// const listItems = [
//     {
//         task: 'Upload video in Youtube',
//         completed: false
//     },
//     {
//         task: 'Record new audio',
//         completed: true
//     },
//     {
//         task: 'Add caption Thanks for Watching!',
//         completed: false
//     },
// ];
// listItems.forEach( loadItems );


// console.log(listItems);
let listItems;
console.log(localStorage.getItem('task-items'));

// Check if getItem 'task-items' is empty, then assign [] to listItems 
if(localStorage.getItem('task-items')) {
    listItems = JSON.parse(localStorage.getItem('task-items'));
    listItems.forEach(loadItems);
    console.log('Items: ', listItems.map(item => item));
} else {
    listItems = [];
    console.log(`listItems ==> ${listItems}`);
}

addBtn.addEventListener('click', () => {
    
    if (input.value) {
        // console.log(input.value);

        // console.log(`localStorage getItem key name: task-items ===> ` + localStorage.getItem(`task-items`));

        // OPTION 1
        
        // const addTask = document.createElement('li');
        // const title = document.createElement('h3');
        // const editBtn = document.createElement('button');
        // const delBtn = document.createElement('button');
        // const divWrap = document.createElement('div');
        
        // addTask.classList.add('task-items');
        // title.classList.add('task-description');
        // editBtn.classList.add('task-item-btn-edit');
        // delBtn.classList.add('task-item-btn-del');
        // divWrap.classList.add('task-btn');
        // title.innerText = input.value;
        // editBtn.innerText = `Edit`;
        // delBtn.innerText = `Delete`;
        
        // divWrap.append(editBtn);
        // divWrap.append(delBtn);
        // addTask.append(title);
        // addTask.append(divWrap);
        // taskList.append(addTask);

        // OPTION 2
        addItem(input.value);
        
        // OPTION 3

        // taskList.insertAdjacentHTML(
        //     'beforeend',
        //     `<li class="task-items"> 
        //         <h3 class="task-description">${input.value}</h3>
        //         <div class="task-btn">
        //             <button class="task-item-btn-edit"> Edit </button>
        //             <button class="task-item-btn-del"> Delete </button>
        //         </div> 
        //     </li>
        //     `
        // );


        input.value = '';
    }
})

function addItem(value) {
    const addTask = Object.assign(document.createElement('li'), { className: 'task-items' });
    const title = Object.assign(document.createElement('h3'), { className: 'task-description', innerText: value });
    const editBtn = Object.assign(document.createElement('button'), { className: 'task-item-btn-edit', innerText: 'Edit' });
    const delBtn = Object.assign(document.createElement('button'), { className: 'task-item-btn-del', innerText: 'Delete' });
    const divWrap = Object.assign(document.createElement('div'), { className: 'task-btn' });

    divWrap.append(editBtn);
    divWrap.append(delBtn);
    addTask.append(title);
    addTask.append(divWrap);
    taskList.append(addTask);

    //LOCAL STORAGE SET ITEM
    const addObjItem = {};
    addObjItem.task = value;
    addObjItem.completed = false;
    listItems.push(addObjItem);
    localStorage.setItem(`task-items`, JSON.stringify(listItems));

    // console.log(JSON.stringify(listItems));
    // const str = JSON.stringify(listItems);
    // let parse = [];
    // parse = JSON.parse(str);
    // console.log(parse);
    // Object.values(parse).forEach((value) => {
    //     console.log(`Value ==> ${value.task}`);
    // })
}

function loadItems(item) {
    const addTask = Object.assign(document.createElement('li'), { className: 'task-items' });
    const title = Object.assign(document.createElement('h3'), { className: 'task-description', innerText: item.task });
    const editBtn = Object.assign(document.createElement('button'), { className: 'task-item-btn-edit', innerText: 'Edit' });
    const delBtn = Object.assign(document.createElement('button'), { className: 'task-item-btn-del', innerText: 'Delete' });
    const divWrap = Object.assign(document.createElement('div'), { className: 'task-btn' });

    item.completed ? addTask.classList.toggle('mark-as-done') : '';

    divWrap.append(editBtn);
    divWrap.append(delBtn);
    addTask.append(title);
    addTask.append(divWrap);
    taskList.append(addTask);
}



const taskItem = document.querySelector('.task-items');

taskList.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON') {
        // e.target.remove();
        console.log(e);
        // e.target.parentNode.remove();

        if(e.target.innerText === 'Delete') {

            // Get the item selected using .closest('CSS selector')
            console.log(e.target.closest('.task-items'));

            const index = findItemIndex(e.target);

            // Create new array by using splice method to remove the selected index
            listItems.splice(index, 1);
            console.log(`Deleted, updating listItems... : `, listItems);
            
            const target = e.target.parentNode;
            target.parentNode.remove();

            // Update the localStorage
            localStorage.setItem('task-items', JSON.stringify(listItems));
        } else if (e.target.innerText === 'Edit') {
            const target = e.target.parentNode;
            const prevEl = target.previousElementSibling;
            // const text = prevEl.innerText;
            prevEl.remove();

            const editInputText = document.createElement('input');
            editInputText.classList.add('edit-input');
            editInputText.value = prevEl.innerText;

            e.target.nextElementSibling.innerText = 'OK';
            e.target.innerText = 'Cancel';
            // console.log(e.target.nextElementSibling);

            target.insertAdjacentElement('beforebegin', editInputText);
        } else if (e.target.innerText === 'OK') {
            editInput(e.target, true);
        } else if (e.target.innerText === 'Cancel') {
            // const index = findItemIndex(e.target);
            // console.log(listItems[index].task);
            editInput(e.target, false)
        }
    } else if (e.target.className === 'task-description') {
        const item = e.target.parentNode;
        // const flag = item.classList.toggle('mark-as-done');
        const index = findItemIndex(e.target);
        console.log(e.target.closest('.task-items'));

        // const nodes = Array.from(e.target.closest('ul').children);
        // const index = nodes.indexOf(e.target.closest('.task-items'));
        // console.log(`NODES => `, nodes);
        // console.log(`LISTITEMS => `, listItems);
        // console.log(`Nodes children ==> ${nodes.indexOf(e.target.closest('.task-items'))}`);
        // const flag = listItems[index].completed;
        // const flag = item.classList.toggle('mark-as-done') 
        // console.log(`flag: `, flag);
        
        // listItems[index].completed = flag;
        listItems[index].completed = item.classList.toggle('mark-as-done');
        console.log(`listItems[${index}].completed = `, listItems[index].completed);
        
        localStorage.setItem('task-items', JSON.stringify(listItems));
    }
})

function findItemIndex(target) {
    // Create array to get children of ul
    const nodes = Array.from(target.closest('ul').children);
    // Get the index of selected item ('li') using closest in the 'nodes' array
    const index = nodes.indexOf(target.closest('.task-items'));
    console.log(`NODES => `, nodes);
    console.log(`LISTITEMS => `, listItems);
    console.log(`Nodes children ==> ${nodes.indexOf(target.closest('.task-items'))}`);
    return index;
}

function editInput(target, flag) {
    // Remove input text and switch back to h3
    const parent = target.parentNode;
    const prevEl = parent.previousElementSibling;
    // if flag is true = 'OK' button, if flag is false = 'Cancel' button
    const text = flag ? prevEl.value : listItems[findItemIndex(target)].task;

    if (text) {
        prevEl.remove();

        const title = document.createElement('h3');
        title.classList.add('task-description');
        title.innerText = text;

        if (flag) {
            // Assign new text to localStorage
            listItems[findItemIndex(target)].task = text;
            localStorage.setItem('task-items', JSON.stringify(listItems));

            target.innerText = 'Delete';
            target.previousElementSibling.innerText = 'Edit';
        } else {
            target.innerText = 'Edit';
            target.nextElementSibling.innerText = 'Delete';
        }

        parent.insertAdjacentElement('beforebegin', title);
    }
}

// const div = document.querySelector('.task-btn');

// div.addEventListener('click', (e) => {
//     // e.stopPropagation();
//     // console.log(e.target);
//     // console.log(e);

// })


