/**
 * Задача 1.
 *
 * Создайте свойство `salary` в объекте `person`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Возвращаемая стрка должна содержать текст: `Зарплата за проект составляет 100$`
 * Где 100 это произведение ставки в час `rate` на количество отработанных часов `hours`
 *
 * Создайте свойство `rate` в объекте `person`.
 * Свойство `rate` можно менять, но нельзя удалять.
 * Свойство `rate` должно содержать число.
 *
 * Создайте свойство `hours` в объекте `person`.
 * Свойство `hours` можно менять, но нельзя удалять.
 * Свойство `hours` должно содержать число.
 *
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 *
 * Обратите внимание!
 * - Для того что бы обратиться к свойству оъекта необходимо использовать this.hours и this.rate
 * - Для решения данного задания вам потребуется defineProperty или defineProperties
 */

const person = {
    get salary() {
        return `Зарплата за проект составляет ${this.rate * this.hours}$`
    }
}

Object.defineProperty(person, 'rate', {
    value: 100,
    writable: true,
    configurable: false,
})

Object.defineProperty(person, 'hours', {
    value: 2,
    writable: true,
    configurable: false
})

alert (person.salary)