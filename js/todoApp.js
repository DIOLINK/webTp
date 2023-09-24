(function todoApp() {
  let addTodoInput = document.getElementById('addtext');
  let ulItem = document.getElementById('todolist');
  let sectionTodo = document.getElementById('todo');
  let empty = document.createElement('p');

  const EMPTY_TODO = '<p class="col-10 col-md-5 text-center">Nothing to Do</p>';
  empty.innerHTML = EMPTY_TODO;

  if (ulItem.childNodes.length === 0) {
    sectionTodo.appendChild(empty);
  }

  addTodoInput.onkeydown = function (event) {
    if (event.key === 'Enter' && addTodoInput.value.length !== 0) {
      empty.remove();
      let item = document.createElement('li');
      item.setAttribute('class', 'list-group-item');
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
        if (ulItem.childNodes.length === 0) {
          sectionTodo.appendChild(empty);
        }
      }, 500);
    } else {
      event.target.classList.add('done');
    }
  });
})();
