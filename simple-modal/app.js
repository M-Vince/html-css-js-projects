const btnOpen = document.querySelector('.open-btn');
const btnClose = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');

btnOpen.addEventListener('click', (e) => {
    modal.classList.toggle('active');
    console.log(e.target.classList);
})

btnClose.addEventListener('click', (e) => {
    modal.classList.toggle('active');
    console.log(e.target.classList);
})