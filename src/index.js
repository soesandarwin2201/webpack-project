import './style.css';
import ShowList from './function/displayList.js';
import StoreLists from './function/localStorage.js';

window.addEventListener('DOMContentLoaded', ShowList.displayList);

const form = document.getElementById('form');
const listInput = document.getElementById('list-input');
const container = document.getElementById('container');

const messageContainer = document.getElementById('message-container');

function alertMessage(type, message, time) {
  const paragraph = document.createElement('p');
  paragraph.classList.add('alert');
  paragraph.innerHTML = `${message}`;
  if (type === 'error') {
    paragraph.classList.add('error');
  } else if (type === 'success') {
    paragraph.classList.add('success');
  } else if (type === 'remove') {
    paragraph.classList.add('remove');
  }
  messageContainer.appendChild(paragraph);
  paragraph.classList.add('fadeout');
  setTimeout(() => {
    messageContainer.removeChild(paragraph);
  }, time);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputClass = document.getElementById('list-input');

  const name = inputClass.value;

  if (name === null || name === ' ') {
    alertMessage('error', '<b>Error: </b> Please fill the empty filed!', 4000);
  } else {
    const todoList = StoreLists.getList();
    const name = listInput.value;
    const complete = false;
    const index = todoList.length + 1;
    const id = Date.now().toString();
    const todo = {
      name, complete, id, index,
    };
    ShowList.addLists(todo);
    StoreLists.addList(todo);
    listInput.value = ' ';
    alertMessage('success', '<b>Success:</b> List saved successfully', 4000);
  }
});

container.addEventListener('click', (e) => {
  ShowList.deleteList(e.target);
  ShowList.trashIcon(e.target);
  StoreLists.removeLists(e.target.dataset.id);
  alertMessage('error', '<b>Success:</b> list removed successfully', 4000);
});

container.addEventListener('change', (e) => {
  StoreLists.editList(e.target.id, e.target.value);
});
