let addTodoInput = document.getElementById('addtext');
let ulItem = document.getElementById('todolist');
let liItem = document.getElementsByTagName('li');
let sectionTodo = document.getElementById('todo');
let empty = document.createElement('p');

const EMPTY_TODO = 'Nothing to Do';

if (liItem.length === 0) {
    empty.innerHTML = EMPTY_TODO;
    sectionTodo.appendChild(empty);
}
addTodoInput.onkeydown = function (event) {
    if (event.key === 'Enter' && addTodoInput.value.length !== 0) {
        empty.remove();
        let item = document.createElement('li');
        item.id = addTodoInput.value;
        item.innerHTML = addTodoInput.value;
        ulItem.appendChild(item);
        addTodoInput.value = '';
    }
};

ulItem.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('done')) {
        setInterval(() => {
            event.target.remove();
        }, 500);
    } else {
        event.target.classList.add('done');
    }
});
