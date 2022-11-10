import StoreLists from "./localStorage.js";
import testList from "./testList.js";

describe('should check the item is added', () => {
 test('should add to the list', () => {
  const test = new testList(1,1,'sleep',false);
  const testlist  = StoreLists.add(test);
  expect(testlist).toHaveLength(1);
 });

 test('should add to the list', () => {
   const test = new testList(2, 2, 'finish the project', false);
   const testlist = StoreLists.add(test);
   expect(testlist).toHaveLength(2);
 });
});



describe('should delete from the array' , () => {
 test('should delete from the list', () => {
  StoreLists.remove(2);
  expect(StoreLists.remove(2)).toHaveLength(1);
 });
 test('should delete from the list', () => {
  StoreLists.remove(1);
  expect(StoreLists.remove(1)).toHaveLength(0);
 });
});





