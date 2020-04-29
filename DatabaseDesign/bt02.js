// design databse for e-commerce(mua ban online) ( nguoi mua, san pham, danh muc san pham)
const users = [
    {
        id: 0,
        name: 'A',
        product: 4
    },
    {
        id: 1,
        name: 'B',
        product: 3
    },
    {
        id: 2,
        name: 'C',
        product: 2
    },
    {
        id: 3,
        name: 'D',
        product: 1
    },
    {
        id: 4,
        name: 'E',
        product: 0
    }
];
const products = [
    {
        id: 0,
        name: 'Q',
        price: 50000,
        category: 4
    },
    {
        id: 1,
        name: 'U',
        price: 76000,
        category: 3
    },
    {
        id: 2,
        name: 'I',
        price: 10000,
        category: 2
    },
    {
        id: 3,
        name: 'O',
        price: 32000,
        category: 1
    },
    {
        id: 4,
        name: 'P',
        price: 21000,
        category: 0
    }
];
const categories = [
    {
        id: 0,
        title: "Electrical"
    },
    {
        id: 1,
        title: "Computer"
    },
    {
        id: 2,
        title: "Fashion"
    },
    {
        id: 3,
        title: "Food"
    },
    {
        id: 4,
        title: "Book"
    }
];

function getData(idUser) {
    let getIdUser = users.find((getId) => {
        return getId.id === idUser;
    });
    console.log(getIdUser);
    let getIdProduct = products.find((getId) => {
        return getId.id === getIdUser.product;
    });
    console.log(getIdProduct);
    let getIdCategory = categories.filter((getId) => {
        return getId.id === getIdProduct.category;
    })
    // console.log(getIdCategory);
    return getIdCategory

}
let final = getData(3);
console.log(final);