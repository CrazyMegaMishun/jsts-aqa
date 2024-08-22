// У нас есть объект, в котором хранятся зарплаты нашей команды:

// Напишите код для суммирования всех свойств, значения которых это число, и сохраните результат в переменной sum.
// Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

const salaries = {
    Oleh: 2500,
    Misha: 4500,
    Illiya: 7200
}

function summarize(obj) {
    return Object.values(obj).reduce(
        (previousValue, currentValue, index, array) => { 
            return previousValue + currentValue
        }
    )
}

console.log(summarize(salaries))