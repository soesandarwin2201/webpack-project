// const LOCAL_STORAGE = 'task.listArray';
const listArray = JSON.parse(localStorage.getItem('listArray')) || [];


let editElement;
let editFlag;
let editID = '';

const render = () => {
  listArray.forEach((list) => {
    const li = document.createElement('li');
    li.innerHTML = `
  <form class="form" id="item"  data-id=${list.id}>
  <input type="checkbox" name="list" id="list">
  <input type="text" value="${list.name}" id="input-class">
    <i class="uil uil-edit edit-btn"></i>
    <i class="uil uil-ellipsis-v delete" data-id=${list.id}></i>
  </form> `;

    container.appendChild(li);
  });

  const editBtn = document.querySelector('.edit-btn');
  let listInput = document.getElementById('list-input');
   
  listArray.forEach((list) => {
    editBtn.addEventListener('click', (event) => {
      const listName = listInput.value;
      let element = event.currentTarget.parentElement.parentElement;
      let editElement =
        event.currentTarget.parentElement.firstElementChild.nextElementSibling;
      listInput = editElement.innerHTML;
      editFlag = true;
      editID = element.dataset.id;
    });
  })
 

  

};

 













export { render };
