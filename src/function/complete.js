const completeStatus = (todoList, isChecked, taskId) => {
  todoList.find((el) => parseInt(el.id, 10) === parseInt(taskId, 10)).complete = isChecked;
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

const complete = (todolist, isChecked, taskid) => {
  todolist.find((el) => parseInt(el.id, 10) === parseInt(taskid, 10)).completed = isChecked;
};

export default completeStatus;
export { complete };
