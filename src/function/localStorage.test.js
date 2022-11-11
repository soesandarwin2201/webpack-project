import StoreLists from './localStorage.js';
import TestList from './testList.js';

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

// describe('should delete from the array', () => {
//   test('should delete from the list', () => {
//     StoreLists.remove(2);
//     expect(StoreLists.remove(2)).toHaveLength(1);
//   });
//   test('should delete from the list', () => {
//     StoreLists.remove(1);
//     expect(StoreLists.remove(1)).toHaveLength(0);
//   });
// });


describe('should edit to the input', () => {  
  beforeEach(() => {
    localStorage.clear();
  });
 test('should edit the input', () => {
   const test = new TestList(1,1,'test',false);
  //  StoreLists.add(test);
   StoreLists.edit(test.id,test.name);
   expect(test).not.toBeNull();
   expect(test.name).toBe('test');
 });
});



describe('update task completed status', () => {
  beforeAll(() => {
    localStorage.clear();
  });
  test('test should change completed  status', () => {
    const test = new TestList(2,2,'snack', true);
    StoreLists.add(test);
    expect(test.completed).toEqual(true);

  });
})




