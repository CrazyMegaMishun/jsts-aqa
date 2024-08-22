/**
 * Завдання 5
 *
 * Використовуючи цикл знайти факторіал числа.
 * Факторіал числа вивести у консоль.
 */

const number = prompt("Введіть число:"); //ЗМІНЮВАТИ ЗАБОРОНЕНО

//РІШЕННЯ

function factorial(n) {
    let result = 1

    for (let i = 0; i< n; i++) {
        result = result * (i + 1)
    }

    return result
}

alert(factorial(number))