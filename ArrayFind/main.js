

/**
 * ========= find()
 * - return the value of the first element ( trả về giá trị đầu tiên thỏa mãn đk nào đó)
 * arr.find(callback(element[, index[, array]]), [thisArg]);
 * 
 * - callback: function to excute on each value in the array
 * - element: the current element in the array
 * - index: the index of the current element in the array
 * - array: the array that find was called on
 * - thisArg: object to use as this inside callback
 * 
 * arr.find(function(item){
 * 
 *      // code
 *      return item 
 * })
 */

let numbers = [1, 2, 3, 4];
let evenNumberFirst = numbers.find((number) => {
    return number % 2 === 0;
});
console.log(evenNumberFirst);