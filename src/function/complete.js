import StoreLists from "./localStorage.js";

const completeStatus = (todoList, isChecked, taskId) => {
  todoList.find((el) => parseInt(el.id, 10) === parseInt(taskId, 10)).completed = isChecked;
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

export default completeStatus;


