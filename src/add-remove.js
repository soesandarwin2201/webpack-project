const listArray = JSON.parse(localStorage.getItem('listArray')) || [];
export const addList = (item) => {
  const listInput = document.getElementById('list-input');
  const toDoList = {
    id: Date.now().toString(),
    name: listInput.value,
    des: false,
  };
  return toDoList;
};

function trashIcon(element) {
  if (element.classList.contains('delete')) {
    element.classList.remove('uil-ellipsis-v');
    element.classList.add('uil-trash');
  } else if (element.classList.contains('uil-trash')) {
    element.classList.remove('uil-trash');
    element.classList.add('uil-ellipsis-v');
  }
}

function deleteList(element) {
  if (element.classList.contains('uil-trash')) {
    element.parentElement.parentElement.remove();
  }
}

// const LOCAL_STORAGE = 'task.listArray';

function removeLocalStorage(id) {
  let listArray = JSON.parse(localStorage.getItem('listArray'));
  listArray = listArray.filter((list) => list.id !== id);
  localStorage.setItem('listArray', JSON.stringify(listArray));
  //  console.log(listArray);
}

function editList(id, name) {
  const update = listArray.map((list) => {
    if(list.id === id) {
      return { ...list, name:name}
    }
    return list;
  });
  localStorage.setItem('listArray', JSON.stringify('update'));
}

export { trashIcon, deleteList, removeLocalStorage };
