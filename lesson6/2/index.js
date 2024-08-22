/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// РЕШЕНИЕ

let toR = prompt("Введите числа которые хотите посчитать: ") //[1, 2, 3]

function f (arr) {
    let sum = 0
    arr = arr.split(' ')

    for (let i = 0; i<arr.length; i++) {
        if (isNaN(arr[i])){
            throw new Error(`Argument ${arr[i]}in not a number`)
        }else {
            sum += parseInt(arr[i])
        }
    }

    return sum
}

alert(f(toR))