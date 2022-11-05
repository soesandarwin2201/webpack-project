const completeStatus = (todoList, id, updated) => {
  const updatedStatus = todoList;
  const selected = todoList.findIndex((el) => el.id === id);
  updatedStatus[selected].complete = updated;
  localStorage.setItem('todoList',JSON.stringify(updatedStatus));
};

export { completeStatus };