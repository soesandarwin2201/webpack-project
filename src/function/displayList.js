import { completeStatus } from './complete.js';
import StoreLists from './localStorage.js';

const container = document.getElementById('container');


export default class ShowList {
  static displayList() {
    const todoList = StoreLists.getList();
    todoList.forEach((list) => {
      ShowList.addLists(list);
    });
  }

  static addLists(list) {
    const checkedLists = list.complete ? 'checked' : '';
    const checkInput = list.complete ? 'checked' : '';
    const div = document.createElement('div');
    div.classList.add('todo-item');

    div.innerHTML = `
  <div>
    <form action="" id="item" class="form">
    <input type="checkbox" class="check-btn" id="${list.id}" ${checkedLists}>
      <input type="text" id="${list.id}" value="${list.name}" class="input-class" ${checkInput}>
      <i class="uil uil-ellipsis-v delete" data-id="${list.id}" ></i>
    </form>
  </div>`.trim();


// const checkBtn = document.querySelectorAll('.check-btn');
//     checkBtn.addEventListener('click', (e) => {
//       const todoList = StoreLists.getList();
//       const { id } = e.target;
//       todoList.completeLists(id, e.target.checked);
//       e.target.parentNode.lastElementChild.classList.toggle('checked');
//       console.log('it is clicked');
//     });

    container.appendChild(div);


}

  static trashIcon(icon) {
    if (icon.classList.contains('delete')) {
      icon.classList.remove('uil-ellipsis-v');
      icon.classList.add('uil-trash');
    }
  }

  static deleteList(icon) {
    if (icon.classList.contains('uil-trash')) {
      icon.parentElement.parentElement.remove();
    }
  }

  static checkedIcon(icon) {
    icon.classList.toggle(checked);
    icon.classList.toggle(uncheck);
    icon.parentElement.querySelector('.input-class').classList.toggle(lineThrough);
  }

  static clearLists() {
    const items = document.querySelectorAll('.todo-item');
    console.log(items);
    if(items.length > 0) {
      items.forEach((item) => {
         container.removeChild(item);
      });
    }
    const todoList = StoreLists.getList();
    localStorage.removeItem('todoList');

  }
}

