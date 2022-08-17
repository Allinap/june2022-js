// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


//  function square(a,b) {
//     return a*b;
//  }
// console.log(square(10,15));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let Pi = 3.14;
// function radius(Pi,r) {
//     return Pi*r*r;
// }
// console.log(radius(Pi,15));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylindre(h,r) {
//     return 2 * 3.14 * r * (h + r);
// }
//
// console.log(cylindre(4, 2));
// - створити функцію яка приймає масив та виводить кожен його елемент

// let array=[1,2,3,4,5,]
// function ma(arr) {
//     console.log(arr);
// }
// ma(array);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function fun(text) {
//     document.write(`<p>${text}</p>`);
// }
// fun('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function fon(text) {
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
//
// }
// fon('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function f(text,count) {
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// f('text', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array =[1,'hello',false];
// function a(arr) {
//     document.write(`<ul>`);
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
// a(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [
//     {
//        id: 2,
//         name: 'Olya',
//         age: 20
//     } ,
//     {
//        id: 3,
//         name: 'Katya',
//         age: 28
//     } ,
//     {
//        id: 4,
//         name: 'Alina',
//         age: 26
//     } ,
//     {
//        id: 5,
//         name: 'Nastya',
//         age: 31
//     }
// ]
// function user(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id}.. ${arrElement.name}.. ${arrElement.age}</div>`)
//     }
// }
// user(array);
// - створити функцію яка повертає найменьше число з масиву
//
// let array = [44,56544,6,53,];
// function fa(arr) {
//     let min = arr[0];
//     for (const minElement of arr) {
//         if (minElement< min){
//             min = minElement;
//         }
//     }
//     return min;
// }
//
// console.log(fa(array));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1,2,4];
// function ma(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//
//     }
//     return sum;
// }
//
// console.log(ma(array));