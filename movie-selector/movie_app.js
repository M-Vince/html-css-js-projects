// const listItems = document.querySelectorAll('.li-1');

const listItems = document.querySelectorAll('.list-items');

// for(let i of listItems) {
//     i.style.backgroundColor = 'pink';
// }

// listItems.forEach((values) => {
//     values.style.backgroundColor = 'lightgreen';
// });

const listItem_2 = document.querySelector('.li-2');

// listItem_2.style.fontSize = '2.5rem';

listItem_2.style.backgroundColor = 'green';

const newDiv = document.createElement('div');
const p = document.createElement('p');
p.innerText = "This is a paragraph!";

newDiv.append(p);

const container = document.querySelector('.container');

// container.append(newDiv);
const list = document.querySelector('.list');

const newListItem = document.createElement('li');
newListItem.innerText = 'Avengers';

list.append(newListItem);

console.log(list.innerHTML);
console.log(newListItem.className);

console.log(newListItem.classList);


newListItem.classList.add('list-items');
console.log(newListItem.className);

// Append / AppendChild / Prepend

const ul = document.querySelector('ul');
const itemAppend = document.createElement('li');
console.log(itemAppend.classList);

itemAppend.innerText = 'Doctor Strange';
itemAppend.classList.add('list-items');

ul.append(itemAppend);
console.log(itemAppend.className);

// AppendChild

const liAppendChild = document.createElement('li');
const createText = document.createTextNode('Iron Man');
// ul.appendChild(document.createElement('li')).appendChild(createText);

liAppendChild.appendChild(createText);
liAppendChild.classList.add('list-items');

ul.appendChild(liAppendChild);

// Prepend

const liPrepend = document.createElement('li');
const textPrepend = document.createTextNode('X-Men');

liPrepend.appendChild(textPrepend);
liPrepend.classList.add('list-items');

ul.prepend(liPrepend);

// Remove/RemoveChild

const removeLi = document.querySelector('li');
console.log(removeLi);
removeLi.remove();

// RemoveChild
const removeChildLi = document.querySelector('li:nth-child(3)');
// console.log(removeChildLi);
// let random = removeChildLi.parentElement;
// console.log(random.innerHTML);
// random.removeChild(removeChildLi);

removeChildLi.parentElement.removeChild(removeChildLi);

// 





