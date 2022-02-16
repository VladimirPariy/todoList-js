let todoButtonAdd = document.querySelector('.todo-add-new-item__btn');
let todoInput = document.querySelector('.todo-add-new-item__input');
let todoContainer = document.querySelector('.todo-container');
let allTasks = [];
let allDivs = [];

if (!localStorage.tasks) {
    allTasks = []
} else {
    allTasks = JSON.parse(localStorage.getItem('tasks'))
}

function CreateTask(task) {
    this.task = task
    this.doneTask = false
}

todoButtonAdd.addEventListener('click', () => {
    allTasks.push(new CreateTask(todoInput.value))
    updateLocalStorage()
    createElem()
    todoInput.value = ''
})

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(allTasks));
}

function createElem() {
    todoContainer.innerHTML = ''
    console.log(allTasks)
    if (allTasks.length > 0) {
        filteredDoneTasks()
        allTasks.forEach((element, index) => {
            todoContainer.innerHTML += createTask(element, index)
        })
        allDivs = document.querySelectorAll('.todo-item')
    }
}

createElem()

function createTask(element, index) {
    return `<div class="todo-item ${element.doneTask ? 'checked' : ''}" >
                <input onclick="doneTask(${index})" type="checkbox" class="todo-item__done" ${element.doneTask ? 'checked' : ''}>
                <div class="todo-item__text">${element.task}</div>
                <button onclick="removeTask(${index})" class="todo-item__remove"></button>
            </div>
    `
}

function doneTask(index) {
    allTasks[index].doneTask = !allTasks[index].doneTask
    if (allTasks[index].doneTask) {
        allDivs[index].classList.add('checked')
    } else {
        allDivs[index].classList.remove('checked')
    }
    updateLocalStorage()
    createElem()
}

function removeTask(index) {

    setTimeout(() => {
        allTasks.splice(index, 1)
        updateLocalStorage()
        createElem()
    }, 100)
}

function filteredDoneTasks() {
    const active = allTasks.length && allTasks.filter(item => item.doneTask === false)
    const done = allTasks.length && allTasks.filter(item => item.doneTask === true)
    allTasks = [...active, ...done];
}
