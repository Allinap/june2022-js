// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let masive = ['homework',1,2,true,{name:'Alina'},{age:'28'},[1,2,3],'cat',false,10];
console.log(masive);
console.log(masive[0]);
console.log(masive[1]);
console.log(masive[2]);
console.log(masive[3]);
console.log(masive[4]);
console.log(masive[5]);
console.log(masive[6]);
console.log(masive[7]);
console.log(masive[8]);
console.log(masive[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book1 = {
    title : 'kolobok',
    pageCount : 250,
    genre : 'kids'
}
const book2 = {
    title : 'pinokio',
    pageCount : 350,
    genre : 'kids'
}
const book3 = {
    title : 'mind',
    pageCount : 400,
    genre : 'psychology'
}
console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
const bookA = {
    title : 'kolobok',
    pageCount : 250,
    genre : 'kids',
    authors : [
        {
            name: 'Alina',
            age : 28

        }
    ]

}
const bookB = {
    title : 'pinokio',
    pageCount : 350,
    genre : 'kids',
    authors : [
        {
            name: 'Alina',
            age : 28

        }
    ]
}

const bookC = {
    title : 'mind',
    pageCount : 400,
    genre : 'psychology',
    authors : [
        {
            name: 'Alina',
            age : 28

        }
    ]
}
console.log(bookA, bookB, bookC);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let block = [
    {
        name : 'Elina',
        username : 'Hope',
        password : 'abc'
    } ,
    {
        name : 'Elina',
        username : 'Hope',
        password : 'sdf'
    },
    {
        name : 'Elina',
        username : 'Hope',
        password : 'ggg'
    },
    {
        name : 'Elina',
        username : 'Hope',
        password : 'hhg'
    },
    {
        name : 'Elina',
        username : 'Hope',
        password : 'tyhh'
    },
    {
        name : 'Elina',
        username : 'Hope',
        password : 'jjg'
    },
    {
        name : 'Elina',
        username : 'Hope',
        password : 'ddf'
    },
    {
        name : 'Elina',
        username : 'Hope',
        password : 'ttt'
    },
    {
        name : 'Elina',
        username : 'Hope',
        password : 'ffrr'
    },
    {
        name : 'Elina',
        username : 'Hope',
        password : 'trrr'
    }
]
console.log(block[0].password);
console.log(block[1].password);
console.log(block[2].password);
console.log(block[3].password);
console.log(block[4].password);
console.log(block[5].password);
console.log(block[6].password);
console.log(block[6].password);
console.log(block[7].password);
console.log(block[8].password);
console.log(block[9].password);