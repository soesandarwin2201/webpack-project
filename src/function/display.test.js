import ShowList from "./displayList.js";
import StoreLists from "./localStorage.js";

const todoList = StoreLists.getList();

const mocktestLists = [
 {
  id : Date.now().toString(),
  name : 'Sleep',
  index : todoList.length + 1 ,
  complete : false
 }
];

describe('Add test to test container',() => {
 test('test list should added to the test container',() => {
  document.body.innerHTML = ` 
  <main>
  <form action="">
  <input id="name" type="text" placeholder="Add to list" required>
  </form>
  <ul id="test container"> <ul>
  </main>`;

  const testContainer = document.getElementById('test container');

  ShowList.addLists(mocktestLists);
 })
});