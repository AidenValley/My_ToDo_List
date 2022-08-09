
// const AddToDo = document.getElementById('Add');

// Model
// If localstorage has a todos array, then use it
// otherwise use default array.
let allToDo;
// Retrieve localStorage
const savedTodos = JSON.parse(localStorage.getItem('allToDo'));
// Check if its an array
if(Array.isArray(savedTodos)) {
  allToDo = savedTodos;
} else {
  allToDo =  [{
    title: 'Get Groceries',
    dueDate: '08/07/2022',
    id: 'firstTodo'
  }, {
    title: 'Wash Car',
    dueDate: '09/02/2022',
    id: 'secondTodo'
  }, {
    title: 'Make dinner',
    dueDate: '08/22/2022',
    id: 'thirdTodo'
  }];
}

// creates a todo
createTodo = (title, dueDate) => {
  const todoID = '' + new Date().getTime();

  allToDo.push({
    title: title,
    dueDate: dueDate,
    id: todoID
  });
  saveTodos();
}
// deletes a todo
removeTodo = (idToDelete) => {
  allToDo = allToDo.filter (todo => {
    // if the id of this todo matches idToDelete, return false
    // for everything else, return true
    if(todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });

  saveTodos();
}

saveTodos = () => {
  localStorage.setItem('allToDo', JSON.stringify(allToDo));
}


// controller
addingToDo = () => { // function addingToDo()
  const textbox = document.getElementById('todo-title'); // input box in html
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;

  createTodo(title, dueDate);
  render();
}

deleteTodo = (event) => {
  const deletebtn = event.target;
  const idToDelete = deletebtn.id;
  
  removeTodo(idToDelete);
  render();
}

// view
render = () => {
  // reset our list
document.getElementById('todo-list').innerHTML = '';

  allToDo.forEach((todo) => {
    const element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style = 'margin-left: 12px';
    deleteBtn.onclick = deleteTodo;
    deleteBtn.id = todo.id;
    element.appendChild(deleteBtn);

    const todoList = document.getElementById('todo-list');
    todoList.appendChild(element);
  });
}
render();