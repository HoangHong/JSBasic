let products = [
    {
        name: 'A',
        unitPrice: 100,
        quantity: 2,
        category: 'Electronic goods'
    },
    {
        name: 'B',
        unitPrice: 300,
        quantity: 1,
        category: 'Electronic goods'
    },
    {
        name: 'C',
        unitPrice: 230,
        quantity: 3,
        category: 'Skincare'
    },
    {
        name: 'D',
        unitPrice: 143,
        quantity: 2,
        category: 'cloth'
    },
    {
        name: 'E',
        unitPrice: 143,
        quantity: 2,
        category: 'Skincare'
    }
];

// 1. filter các sản phẩm nằm trong 1 category nào đó 
// 2. tính tổng số tiền hàng còn trong kho
// 3. chọn ra các sản phẩm có tiền hàng tồn lớn trên 300

let productSkincares = products.filter((item) => {
    return item.category === 'Skincare';
});
console.log(productSkincares);

// 2. tính tổng tiền hàng còn trong kho

let totalPrice = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.unitPrice * currentValue.quantity;
}, 0);
console.log(totalPrice);

// 3. chọn ra các sản phầm có hàng tồn kho lớn hơn or bằng 300
// let totalElements = products.map((element)=> {
//     return element.quantity * element.unitPrice;
// });

// console.log(totalElements);
let totalFilter = products.filter((item) => {
    return item.unitPrice * item.quantity >= 300;
});
console.log(totalFilter);