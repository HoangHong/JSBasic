// database design
const classes = [
    {
        id: 0,
        name: '1B',
        teacher: 3
    },
    {   
        id: 1,
        name: '2B',
        teacher: 4,
    },
    {   
        id: 2,
        name: '3B',
        teacher: 2,
    },
    {
        id: 3,
        name: '4A',
        teacher: 0,
        
    },
    {   
        id: 4,
        name: '5A',
        teacher: 1,
        
    }
];
const teacher = [
    {
        id: 0,
        name: 'Doi',
        age: 43
    },
    {
        id: 1,
        name: 'Khanh',
        age: 60
    },
    {
        id: 2,
        name: 'NoName',
        age: 60
    },
    {
        id: 3,
        name: 'Lieu',
        age: 45
    },
    {
        id: 4,
        name: 'Xoe',
        age: 48
    }
];
const students = [
    {   
        id: 0,
        name: 'Minh1',
        height: 120,
        class: 0
    },
    {
        id: 1,
        name: 'Minh2',
        height: 125,
        class: 0
    },
    {   
        id: 2,
        name: 'Minh3',
        height: 135,
        class: 0
    }
]
function getStudentInClass(className) {
    let class1B = classes.find((x) => {
        return x.name === className;
    });
    console.log(class1B);
    let studentsInClass = students.filter((student) => {
        return student.class === class1B.id;
    });
    return studentsInClass;
}
let studentInClass = getStudentInClass('1B');
// console.log(studentInClass);

// design database for a e-magazine website( tac gia, chuyen muc, bai bao)
// design databse for e-commerce(mua ban online) ( nguoi mua, san pham, danh muc san pham)
// npm table
// using node table to make previous app look nicer