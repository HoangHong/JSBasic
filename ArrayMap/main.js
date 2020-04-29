/**
 * 
 * === syntax ===
 * let new_array = arr.map(function callback( currentValue[, index[, array]]) {
 *  // return element for new_array
 *  }[, thisArg])
 * 
 *  - callback: function that is called for every element of arr
 *              - each time callback excutes(thực thi)
 *              - the returned value is added to new_array
 *              
 *  - currentValue: the current element being processed in the array
 * - index(optional): the index of the current element being processed in the array
 * - array(optinal): the array map was called upon
 * - thisArg(optinal): Value to use as this when excuting callback
 * 
 * 
 * !!!!! biến đổi tập hợp các phần tử trong mảng thành tập hợp mới
 * 
 * 
 * arr.map(function(item){
 *      //transfrom
 *      return newValue;
 * })
 * method name: map
 */

 let numbers = [1, 2, 3, 4];
 let doubleNumbers = numbers.map((x)=>{
    return x * x;
 });
 console.log(doubleNumbers);


 // bài tập

 let rectangles = [
     {
         width: 10,
         height: 5
     },
     {
        width: 10,
        height: 20
    },
    {
        width: 4,
        height: 16
    }
 ];

 // dùng map method để biến đổi restangles thành 1 mảng array mới có diện tích các hình trên


let calculateRectangles = rectangles.map((currentValue) => {
    return currentValue.width * currentValue.height;
});
console.log(calculateRectangles);