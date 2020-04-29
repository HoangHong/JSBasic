// design database for a e-magazine website( tac gia, chuyen muc, bai bao)
const  categories = [
    {
        id: 0,
        title: 'Hot News'
        
    },
    {
        id: 1,
        title: 'Sport'
        
    },
    {
        id: 2,
        title: 'Technology'
        
    },
    {
        id: 3,
        title: 'Society'
        
    },
    {
        id: 4,
        title: 'Fashion'
        
    },
    {
        id: 5,
        title: 'Music'
        
    }

];
const articles = [
    {
        id: 0,
        author: 5,
        category: 2
    },
    {
        id: 1,
        author: 3,
        category: 5
    },
    {
        id: 2,
        author: 4,
        category: 1
    },
    {
        id: 3,
        author: 1,
        category: 0
    },
    {
        id: 4,
        author: 0,
        category: 3
    },
    {
        id: 5,
        author: 2,
        category: 4
    }

];
const authors = [
    {
        id: 0,
        name: "ABC",
        age: 26,
        address: 'HN, VN',
    },
    {
        id: 1,
        name: "HKH",
        age: 28,
        address: 'QN, VN',
    },
    {
        id: 2,
        name: "UIY",
        age: 32,
        address: 'HP, VN',
    },
    {
        id: 3,
        name: "ASWE",
        age: 40,
        address: 'BD, VN',
    },
    {
        id: 4,
        name: "TYRR",
        age: 50,
        address: 'DN, VN',
    },
    {
        id: 5,
        name: "LKKKH",
        age:42,
        address: 'BN, VN',
    }
]

function getAuthorInArticle(authorName) {
    let getNameAuthor = authors.find((name) => {
        return name.name === authorName;
    });

    // console.log(getNameAuthor)
    let authorInArticle = articles.filter((author) => {
        return author.author === getNameAuthor.id;
    });
    let getIdCategory = authorInArticle.find((x) => {
        return x.id;
    });
    // console.log(getIdCategory);
    let categoryInArticle = categories.filter((id) => {
        return id.id === getIdCategory.id;
    });
    // console.log(categoryInArticle);
    return categoryInArticle;
}

let x = getAuthorInArticle('ASWE');
console.log(x);
