const todoButtonAdd = document.querySelector('.todo-add-new-item__btn');
const todoInput = document.querySelector('.todo-add-new-item__input');
const todoContainer = document.querySelector('.todo-container');
const todoDoneContainer = document.querySelector('.sidebar__list');

let allTasksArray = [];
let allDivsWithTasks = [];


if (!localStorage.tasks) {
    allTasksArray = []
} else {
    allTasksArray = JSON.parse(localStorage.getItem('tasks'))
}

function CreateTaskConstructor(task) {
    this.task = task
    this.doneTask = false
}

todoButtonAdd.addEventListener('click', () => {
    allTasksArray.push(new CreateTaskConstructor(todoInput.value))
    createElemAndUpdateLocalStorage()
    todoInput.value = ''
})

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(allTasksArray));
}

function createElem() {
    todoContainer.innerHTML = ''
    todoDoneContainer.innerHTML = ''
    if (allTasksArray.length > 0) {
        allTasksArray.forEach((element, index) => {
            if (element.doneTask === false) {
                todoContainer.innerHTML += createTaskInHTML(element, index)
            }
            if (element.doneTask === true) {
                todoDoneContainer.innerHTML += createTaskInHTML(element, index)
            }
        })
        allDivsWithTasks = document.querySelectorAll('.todo-item')
    }
}

function createElemAndUpdateLocalStorage() {
    updateLocalStorage()
    createElem()
}

createElem()

function createTaskInHTML(element, index) {
    return `<div class="todo-item ${element.doneTask ? 'checked' : ''}" >
                <input onclick="doneTask(${index})" type="checkbox" class="todo-item__done" ${element.doneTask ? 'checked' : ''}>
                <div class="todo-item__text">${element.task}</div>
                <button onclick="removeTask(${index})" class="todo-item__remove"><?xml version="1.0" ?><svg id="false-cross-reject-decline" style="enable-background:new 0 0 15 15;" version="1.1" viewBox="0 0 15 15" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7.5,0C3.364,0,0,3.364,0,7.5S3.364,15,7.5,15S15,11.636,15,7.5S11.636,0,7.5,0z M7.5,14C3.916,14,1,11.084,1,7.5  S3.916,1,7.5,1S14,3.916,14,7.5S11.084,14,7.5,14z"/><polygon points="10.146,4.146 7.5,6.793 4.854,4.146 4.146,4.854 6.793,7.5 4.146,10.146 4.854,10.854 7.5,8.207 10.146,10.854   10.854,10.146 8.207,7.5 10.854,4.854 "/></svg></button>
            </div>
    `
}

function doneTask(index) {
    allTasksArray[index].doneTask = !allTasksArray[index].doneTask
    if (allTasksArray[index].doneTask) {
        allDivsWithTasks[index].classList.add('checked')
    } else {
        allDivsWithTasks[index].classList.remove('checked')
    }
    createElemAndUpdateLocalStorage()
}

function removeTask(index) {
    allTasksArray.splice(index, 1)
    createElemAndUpdateLocalStorage()
}



