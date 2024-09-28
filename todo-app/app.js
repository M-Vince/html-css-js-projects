const input = document.querySelector('.create-item-input');
const addBtn = document.querySelector('.create-item-btn');
const taskList = document.querySelector('.task-list');


addBtn.addEventListener('click', () => {

    if (input.value) {
        console.log(input.value);

        const addTask = document.createElement('li');
        const title = document.createElement('h3');
        const delBtn = document.createElement('button');

        addTask.classList.add('task-items');
        delBtn.classList.add('task-item-btn');
        title.innerText = input.value;
        delBtn.innerText = `Delete`;
        addTask.append(title);
        addTask.append(delBtn);

        taskList.append(addTask);
    }
})


taskList.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON') {
        // e.target.remove();
        console.log(e);
        // e.target.parentNode.remove();

        if(e.target.innerText === 'Delete') {
            const target = e.target.parentNode;
            target.parentNode.remove();
        }


    }
})




{/* <li class="task-items"> 
    <h3>Record New Video Content</h3>
    <button class="task-item-btn"> Delete </button> 
</li> */}