/**
 * 
 * ======== reduce()
 * - reduce() method executes a reducer function on each element of the array
 * - resulting in a single output value
 * 
 * arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
 * 
 * - callback: a function to execute on each element in the array
 * - accumulator: the accumulator accumunlate(biến tích lũy) callback's return values
 * - currentValue: the current element being proccessed in the array
 * - index: the index of the current element being processed in the array.reduce((previousValue, currentValue, currentIndex, array) => {}, initialValue)
 * - array: the array reduce() was called upon
 * - initialValue: a value to use as the first argument(đối số) to the first call of the callback
 *          + if no initialValue is supplied(cung cấp), the first element in the array will be used as  the initial accumulator value
 *              and shipped(bỏ qua) as currentValue
 * 
 * 
 * arr.reduce(function(item1, item2) {
 *          // calculation
 *      return x
 * })
 */

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((a, b) => {
    console.log(a, b);
    return a + b;
});
console.log(sum);

// bài tập 
let orders = [
    {
        name: 'A',
        quantity: 2,
        unitPrice: 100
    },
    {
        name: 'B',
        quantity: 1,
        unitPrice: 400
    },
    {
        name: 'C',
        quantity: 5,
        unitPrice: 15
    }
];
// dung reduce tinh tong don hang

let sumOrder = orders.reduce((a, b) => {
    return a + (b.unitPrice * b.quantity);
}, 0);
console.log(sumOrder);