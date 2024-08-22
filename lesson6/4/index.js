/**
 * Задача 4.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 *
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

// РЕШЕНИЕ

let number = prompt("Введите число для того что бы получить массив его делителей: ")

function getDivisors(num) {
    if (isNaN(num)) {
        alert(`Given argument +${num}+ is not a number`)
        throw new Error (`Given argument +${num}+ is not a number`)
    }
    if (parseInt(num) < 1) {
        alert(`Given argument +${num}+ is less than 1`)
        throw new Error (`Given argument +${num}+ is less than 1`)
    }

    let arr = []

    for (let i = 0; i<=parseInt(num); i++){
        if(parseInt(num) % i === 0) arr.push(i)
    }

    return arr
}

alert(getDivisors(number))