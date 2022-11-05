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
    const div = document.createElement('div');

    div.innerHTML = `
  <div class="todo-item">
    <form action="" id="item" class="form">
      <input type="checkbox" name="list" id="list">
      <input type="text" id="${list.id}" value="${list.name}" class="input-class">
      <i class="uil uil-ellipsis-v delete" data-id="${list.id}" ></i>
    </form>
  </div>`;

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
}