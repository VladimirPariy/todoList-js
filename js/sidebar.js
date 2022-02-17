const sidebarBtn = document.querySelector('.sidebar__button')
const sidebar = document.querySelector('.sidebar')

sidebarBtn.addEventListener('click', () => {
    sidebarBtn.classList.toggle('active')
    sidebar.classList.toggle('active')
});



