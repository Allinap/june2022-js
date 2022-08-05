//  Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 12;
// if (x!==0){
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 34;

if (time >= 0 && time <= 15) {
    console.log('1 чверть');
} else if
(time > 15 && time <= 30) {
    console.log('2 чверть');
} else if
(time > 30 && time <= 45) {
    console.log('3 чверть');
} else if
(time > 45 && time <= 60) {
    console.log('4 чверть');
} else {
    console.log('error');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 30;
//
// if (day > 0 && day <= 10) {
//     console.log('1 decade');
// } else if
// (day >10 && day <= 20) {
//     console.log('2 decade');
// } else if
// (day > 20 && day <= 31) {
//     console.log('3 decade');
// } else {console.log('error');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let day = +prompt('enter number');
switch (day) {
   case 1:
        console.log('monday ');
        break
        case 2:
        console.log('tuesday');
        break
        case 3:
        console.log('wednesday');
        break
        case 4:
        console.log('thursday');
        break
        case 5:
        console.log('friday');
        break
        case 6:
        console.log('saturday');
        break
        case 7:
        console.log('sunday');
            console.log('not day');

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

    let a = 14;
    let b = 33;
    if (a > b){
        console.log(a);
    } else if (b > a){
        console.log(b);
    } else if (a===b)
    {
        console.log('рівні');
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = '' || 'default';
console.log(x);