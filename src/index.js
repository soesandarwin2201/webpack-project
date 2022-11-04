import './style.css';
import { addList, trashIcon , deleteList , removeLocalStorage } from './add-remove.js';
import { render , list } from './render.js';

// const LOCAL_STORAGE = 'task.listArray';
const listArray = JSON.parse(localStorage.getItem('listArray')) || [] ;



const container = document.getElementById('container');
const form = document.getElementById('form');
const listInput = document.getElementById('list-input');
// const list = document.getElementById('list');
console.log(list);


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
  
  }
  localStorage.setItem('listArray', JSON.stringify(listArray));

});


window.addEventListener('DOMContentLoaded', render);

container.addEventListener('click', (e) => {
  deleteList(e.target);
  trashIcon(e.target);
  removeLocalStorage(e.target.dataset.id)
});


















