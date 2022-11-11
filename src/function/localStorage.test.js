import StoreLists from './localStorage.js';
import TestList from './testList.js';
import { completeStatus } from './complete.js';


describe('should check the item is added', () => {
  test('should add to the list', () => {
    const test = new TestList(1, 1, 'sleep', false);
    const testlist = StoreLists.add(test);
    expect(testlist).toHaveLength(1);
  });

  test('should add to the list', () => {
    const test = new TestList(2, 2, 'finish the project', false);
    const testlist = StoreLists.add(test);
    expect(testlist).toHaveLength(2);
  });
});


describe('should edit to the input', () => {
  test('should edit the input', () => {
    const test = new TestList(3, 3, 'test', false);
    StoreLists.addList(test);
    StoreLists.editList(3, 'meet');
    expect(JSON.parse(localStorage.getItem('todoList'))[0].name).toBe('meet');
  });
});

describe('update task completed status', () => {
  test('test should change completed  status', () => {
    const testItem = new TestList(1 , 1 ,'drink', false);
    StoreLists.addList(testItem);
    const array = StoreLists.getList();
    StoreLists.completeLists(array,true,array[0].id);
    expect(JSON.parse(localStorage.getItem('todoList'))[0].completed).toBeTruthy();
  });
});

describe('Deleteing task that are complete', () => {
  test('test for delete checked function', () => {
    localStorage.clear();
    StoreLists.clearChecked();
    expect(JSON.parse(localStorage.getItem('todoList')).length).toEqual(0);
  });
});



describe('should delete from the array', () => {
  test('should delete from the list', () => {
    StoreLists.remove(2);
    expect(StoreLists.remove(2)).toHaveLength(1);
  });
  test('should delete from the list', () => {
    StoreLists.remove(1);
    expect(StoreLists.remove(1)).toHaveLength(0);
  });
});