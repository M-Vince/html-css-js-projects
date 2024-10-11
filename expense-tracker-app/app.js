// Budget Tab
const inputBudget = document.querySelector('#budget-input');
const budgetBtn = document.querySelector('.btn-budget');
// Expenses Tab
const expensesType = document.querySelector('#expenses-type');
const expensesAmount = document.querySelector('#expenses-amount');
const expensesBtn = document.querySelector('.btn-expenses');
// Overview
const totalBudget = document.querySelector('.total-budget-overview');
const expOverview = document.querySelector('.expenses-overview');
const balOverview = document.querySelector('.balance-overview');
// Expense List
const ul = document.querySelector('.list-items');
const editBtn = document.querySelector('.btn-edit');
const deleteBtn = document.querySelector('.btn-del');

// updateOverview();

budgetBtn.addEventListener('click', () => {
    // If value is a Number and not empty
    if(!isNaN(inputBudget.value) && inputBudget.value !== '') {
        const value = inputBudget.value;
        totalBudget.innerText = value;
        // const budget = Number(inputBudget.value);
        // Update to recalculate the total balance
        updateOverview();
    }
});

expensesBtn.addEventListener('click', () => {
    // If Amount value is a Number and both Type & Amount values are not empty  
    if(!isNaN(expensesAmount.value) && expensesType.value !== '' && expensesAmount.value !== '') {
        const type = expensesType.value;
        const amount = expensesAmount.value;
        console.log('Works')
        createExpenseItem(type, amount);
        // expOverview.innerText = amount;
        // const totalExpenses = Number(expOverview.innerText) + amount;

        // Convert Total Expenses and Expense Amount to a Number to calculate and assign it to Total Expenses Overview
        expOverview.innerText = Number(expOverview.innerText) + Number(amount);
        // Update to recalculate the total balance
        updateOverview();
    }
});

ul.addEventListener('click', (e) => {
    // console.log(e);
    if(e.target.className === 'btn-edit') {
        // console.log(e.target.closest('li'));
        // console.log(liEdit.children);
        // console.log(liEdit);

        // Get element from parent's sibling (1st div) and 
        // create array from 1st div's children to loop them
        const parent = e.target.parentNode;
        const div = parent.previousElementSibling;
        const children = Array.from(div.children);

        // Loop each element and assign them back to Expenses Tab
        children.forEach((element, index) => {
            switch(index) {
                case 0:
                    expensesType.value = element.innerText;
                    break;
                case 1:
                    expensesAmount.value = element.innerText;

                    // Get Expense Amount (h4) to recalculate in Overview
                    reduceExpenses(element.innerText);
                    break;
            }
        })
        // console.log(...children);

        e.target.closest('li').remove();
    }
    else if(e.target.className === 'btn-del') {
        const parent = e.target.parentNode;
        const div = parent.previousElementSibling;
        const children = Array.from(div.children);

        // Get Expense Amount (h4) to recalculate in Overview
        reduceExpenses(children[1].innerText);

        const removeLi = e.target.closest('li');
        removeLi.remove();
    }

});

// Create List Item to UL
function createExpenseItem(type, amount) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    
    const div2 = document.createElement('div');
    const btnEdit = Object.assign(document.createElement('button'), { className: 'btn-edit', innerText: 'Edit Button' });
    const btnDel = Object.assign(document.createElement('button'), { className: 'btn-del', innerText: 'Delete Button' });

    h3.innerText = type;
    h4.innerText = amount;
    div.append(h3, h4);
    div2.append(btnEdit, btnDel);
    li.append(div, div2);

    ul.append(li);
}

function updateOverview() {
    const budget = Number(totalBudget.innerText);
    const expenses = Number(expOverview.innerText);
    const totalBalance = budget - expenses;

    balOverview.innerText = totalBalance;
}

// const totalBudget = document.querySelector('.total-budget-overview');
// const expOverview = document.querySelector('.expenses-overview');
// const balOverview = document.querySelector('.balance-overview');

function reduceExpenses(amount) {
    const reduceAmount = Number(amount);
    const expenses = Number(expOverview.innerText);
    const balance = Number(balOverview.innerText);
    const totalExpenses = expenses - reduceAmount;
    const totalBalance = balance + reduceAmount;

    expOverview.innerText = totalExpenses;
    balOverview.innerText = totalBalance;
}

