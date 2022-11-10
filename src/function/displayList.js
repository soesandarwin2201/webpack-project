import StoreLists from './localStorage.js';

export default class ShowList {
  displayList() {
    this.todoList.forEach((list) => {
      ShowList.addLists(list);
    });
  }

  static addLists(list) {
    const container = document.getElementById('container');
    const checkedLists = list.complete ? 'checked' : '';
    const div = document.createElement('div');
    div.classList.add('todo-item');

    div.innerHTML = `
    <form action="" class="form">
    <input type="checkbox" class="check-btn" id="${list.id}" ${checkedLists}>
    <input type="text" data-id="${list.id}" value="${
  list.name
}" class="input-class ${checkedLists ? 'line_through' : ''}">
    <i class="uil uil-ellipsis-v delete" data-id="${list.id}" ></i>
    </form>`;

    const checkBtn = div.lastElementChild.querySelector('.check-btn');
    const taskDescription = div.querySelector('.input-class');
    const optionsIcon = div.querySelector('.delete');

    checkBtn.addEventListener('click', (e) => {
      const todoList = StoreLists.getList();
      StoreLists.completeLists(todoList, e.target.checked, e.target.id);
      taskDescription.classList.toggle('line_through');
    });

    taskDescription.addEventListener('input', (ev) => {
      const updatedDesc = ev.target.value;
      StoreLists.editList(list.id, updatedDesc);
    });

    optionsIcon.addEventListener('click', () => {
      div.remove();
      StoreLists.removeLists(list.id);
      //  alertMessage('error', '<b>Success:</b> list removed successfully', 4000);
    });

    container.appendChild(div);
  }

  static deleteList(icon) {
    if (icon.classList.contains('uil-trash')) {
      icon.parentElement.parentElement.remove();
    }
  }

  static clearLists() {
    const container = document.getElementById('container');
    const todoList = StoreLists.getList();
    const items = document.querySelectorAll('.todo-item');
    if (items.length > 0) {
      items.forEach((item) => {
        container.removeChild(item);
      });
      todoList.forEach((list, index) => {
        todoList.index = index + 1;
      });
    }

    localStorage.removeItem('todoList');
  }
}
