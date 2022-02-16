// const buttonAdd = document.querySelector('.todo-menu__add');
// const buttonRemove = document.querySelector('.todo-menu__remove');
// let todoContainer = document.querySelector('.todo-container');


// buttonAdd.addEventListener('click', () => {
//     let elem = document.createElement('li')
//     elem.classList.add('todo-item')
//     document.querySelector('.todo-container').appendChild(elem)
//     elem.appendChild(input)
// });

// buttonRemove.addEventListener('click', () => {
//     if (todoContainer.childElementCount > 0) {
//         let removeNode = document.querySelectorAll('.todo-item')
//         todoContainer.removeChild(removeNode[removeNode.length - 1])
//     }
// });

// todoContainer.addEventListener('click',  (event) => {
//     if (event.target.tagName === 'LI') {
//         event.target.classList.toggle('todo-item__done');
//     }
// });


const todoButtonAdd = document.querySelector('.todo-add-new-item__btn')
const todoInput = document.querySelector('.todo-add-new-item__input')

todoButtonAdd.addEventListener('click', () => {
    createElem()
    addInputTextToElem()
    clearInput()
})

function createElem() {
    if (todoInput.value.length > 0) {
        let createFullElem = document.createElement('div')
        createFullElem.classList.add('todo-item')
        document.querySelector('.todo-container').appendChild(createFullElem)

        let parentNode = document.querySelectorAll('.todo-item')

        let createElemWithAdd = document.createElement('div')
        createElemWithAdd.classList.add('todo-item__add')
        parentNode[parentNode.length - 1].appendChild(createElemWithAdd)

        let createElemWithText = document.createElement('div')
        createElemWithText.classList.add('todo-item__text')
        parentNode[parentNode.length - 1].appendChild(createElemWithText)

        let createElemWithRemove = document.createElement('div')
        createElemWithRemove.classList.add('todo-item__remove')
        parentNode[parentNode.length - 1].appendChild(createElemWithRemove)
    }
}

function addInputTextToElem() {
    let allTodoItem = document.querySelectorAll('.todo-item')
    allTodoItem[allTodoItem.length - 1].children[1].innerHTML = todoInput.value
}

function clearInput() {
    todoInput.value = ''
}