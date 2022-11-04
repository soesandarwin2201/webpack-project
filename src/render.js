// const LOCAL_STORAGE = 'task.listArray';
const listArray = JSON.parse(localStorage.getItem('listArray')) || [];

const list = document.getElementById('list');

const render = () => {
  listArray.forEach((list) => {
    const li = document.createElement('li');
    li.innerHTML = `
  <div class="form" id="item">
   <input type="checkbox" name="list" id="list">
    <p>${list.name}</p>
    <i class="uil uil-ellipsis-v delete" data-id=${list.id}></i>
  </div> `;

    container.appendChild(li);
  });

  list.addEventListener('change', (e) => {
    const element = e.target.parentElement.parentElement;
    let editElement = e.target.parentElement.previousElementSibling;

    listInput.value = editElement.innerHtml;
    console.log('it is clicked');
  });
 

};











export { render , list };
