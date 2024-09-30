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
} else {
    listItems = [];
    console.log(listItems);
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
            const target = e.target.parentNode;
            target.parentNode.remove();
        } else if (e.target.className === 'task-item-btn-edit') {
            const target = e.target.parentNode;
            const prevEl = target.previousElementSibling;
            const text = prevEl.innerText;
            prevEl.remove();

            const editInput = document.createElement('input');
            // editInput.style.width = '100%';
            editInput.classList.add('edit-input');
            editInput.value = text;

            e.target.nextElementSibling.innerText = 'OK';
            // console.log(e.target.nextElementSibling);

            target.insertAdjacentElement('beforebegin', editInput);
        } else if (e.target.innerText === 'OK') {
            const target = e.target.parentNode;
            const prevEl = target.previousElementSibling;
            const text = prevEl.value;

            if (text) {
                prevEl.remove();
    
                const title = document.createElement('h3');
                title.classList.add('task-description');
                title.innerText = text;
    
                e.target.innerText = 'Delete';
    
                target.insertAdjacentElement('beforebegin', title);
            }
        }
    } else if (e.target.className === 'task-description') {
        const item = e.target.parentNode;
        // const item = e.target;
        item.classList.toggle('mark-as-done');
    }
})

// const div = document.querySelector('.task-btn');

// div.addEventListener('click', (e) => {
//     // e.stopPropagation();
//     // console.log(e.target);
//     // console.log(e);

// })


