import './style.css';
import { addList } from './add-remove.js';

const LOCAL_STORAGE = 'task.listArray';
const listArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE)) || [] ;



const container = document.getElementById('container');
const form = document.getElementById('form');
const listInput = document.getElementById('list-input');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const listName = listInput.value;

  if( listName === null || listName === '') {
    console.log('it is empty');
    return undefined;
  }
  else {
    const list = addList(listName);
    listArray.push(list);
    render();
    listInput.value = null;
    console.log(listArray);
  }
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(listArray));

});



const render = () => {
  listArray.forEach((list) => {
    const li = document.createElement('li');
    li.innerHTML = `
  <div class="form">
   <input type="checkbox" name="list" id="list">
    <p>${list.name}</p>
    <i class="uil uil-ellipsis-v"></i>
  </div> `;

    container.appendChild(li);
  });
};


