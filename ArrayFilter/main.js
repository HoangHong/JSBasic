/**
 *  ===========filter()
 * - creates a new array with all elements that pass the test( thỏa mãn đk nào đó) 
 * -- syntax 
 * let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
 * 
 * - callback: fuction a predicate(thuộc tính), to test each element of the array
 *       + return true to keep the element,
 *                  false otherwise
 * - element: the current element being processed in the array
 * - index: the index of the current element being processed in the array
 * - array: the array filter was called upon
 * - thisArg: value to use as this when excuting( thực thi) callback
 * 
 * arr.filter(function(item){
 *  // filter
 *  return newValue;// true or false
 * 
 * });
 * method name: filter
 * đại diện cho từng phần tử, lặp qua từng phần tử 
 */

 let numbers = [1, 2, 3, 4];
 let eventNumbers = numbers.filter((x) => {
    return x % 2 === 0;
 });
 console.log(eventNumbers);