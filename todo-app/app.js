const input = document.querySelector('.create-item-input');
const addBtn = document.querySelector('.create-item-btn');
const taskList = document.querySelector('.task-list');


addBtn.addEventListener('click', () => {
    
    if (input.value) {
        console.log(input.value);

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
        
        const addTask = Object.assign(document.createElement('li'), { className: 'task-items' });
        const title = Object.assign(document.createElement('h3'), { className: 'task-description', innerText: input.value });
        const editBtn = Object.assign(document.createElement('button'), { className: 'task-item-btn-edit', innerText: 'Edit' });
        const delBtn = Object.assign(document.createElement('button'), { className: 'task-item-btn-del', innerText: 'Delete' });
        const divWrap = Object.assign(document.createElement('div'), { className: 'task-btn' });

        divWrap.append(editBtn);
        divWrap.append(delBtn);
        addTask.append(title);
        addTask.append(divWrap);
        taskList.append(addTask);
        
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
            editInput.style.width = '100%';
            editInput.value = text;

            
            taskItem.prepend(editInput);
        }    
    } 
})

// const div = document.querySelector('.task-btn');

// div.addEventListener('click', (e) => {
//     // e.stopPropagation();
//     // console.log(e.target);
//     // console.log(e);

// })


