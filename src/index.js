import _ from 'lodash';
import './style.css';

const listArray = [
  {
    index: 1,
    completed: false,
    desc: 'Task Complete 1',
  },
  {
    index: 2,
    completed: false,
    desc: 'Task Complete 2',
  },
  {
    index: 3,
    completed: false,
    desc: 'Task Complete 3',
  },
  {
    index: 4,
    completed: false,
    desc: 'Task Complete 4',
  },
  {
    index: 5,
    completed: false,
    desc: 'Task Complete 5',
  },
];

const container = document.getElementById('to-do-list-container');

// window.addEventListener('DOMContentLoaded', () => {

//  listArray.forEach((list) => {
//    const li = document.createElement('li');
//    li.innerHTML = `
//   <div class="form">
//    <input type="checkbox" name="list" id="list">
//     <p>${list.desc}</p>
//     <i class="uil uil-ellipsis-v"></i>
//   </div> `;

//    container.appendChild(li);

//  });
//  console.log(container);
// });

window.addEventListener('DOMContentLoaded', (e) => {
  console.log(container);
});
