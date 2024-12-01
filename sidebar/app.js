const btnMenu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');


btnMenu.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
    console.log(sidebar.classList);
});