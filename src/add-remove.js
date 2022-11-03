export const addList = (item) => {
 const listInput = document.getElementById('list-input');
 const toDoList = {
  id: Date.now().toString(),
  name : listInput.value,
  des : listInput.value ?? false
 };
return toDoList;
}