const listArray = JSON.parse(localStorage.getItem('listArray')) || [];


let editElement;
let editFlag;
let editID = '';

const render = (lists) => {
  listArray.forEach((list) => {
    const li = document.createElement('li');
    li.innerHTML = `
  <form class="form" id="item"  data-id=${list.id}>
  <input type="checkbox" name="list" id="list">
  <input type="text" value="${list.name}" class="input-class" id=${list.id}>
    <i class="uil uil-ellipsis-v delete" data-id=${list.id}></i>
  </form> `;

    container.appendChild(li);
  });

  const editBtn = document.querySelectorAll('.input-class');

  editBtn.forEach((btn) => {
   btn.addEventListener('click', (e) => {
    lists.editList(e.target.id,e.target.name);
   });
  });
   


};

 













export { render };
