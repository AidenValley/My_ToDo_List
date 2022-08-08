
// const AddToDo = document.getElementById('Add');

const allToDo = [{
  title: 'Get Groceries',
  dueDate: '08/07/2022'
}, {
  title: 'Wash Car',
  dueDate: '09/02/2022'
}, {
  title: 'Make dinner',
  dueDate: '08/22/2022'
}];

// allToDo.forEach((todoTitle) => { // loop that lists all the todo list
//   const element = document.createElement('div');
//   element.innerText = todoTitle;
//   document.body.appendChild(element);
// });

addingToDo = () => { // function addingToDo()
  const textbox = document.getElementById('todo-title'); // input box in html
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;

  allToDo.push({
    title: title,
    dueDate: dueDate
  });

    render();
}

render = () => {
  // reset our list
document.getElementById('todo-list').innerHTML = '';

  allToDo.forEach((todo) => {
    const element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(element);
  });
}
render();