/*
 * Задача 2.
 *
 * Создайте объект `user`, со свойствами `name`, `surname`, `job` и `data`.
 *
 * При чтении свойства `data` должна возвращаться строка с текстом.
 * Возвращаемая строка должна содержать текст: `Привет! Я `name` `surname` и я работаю `job` `.
 *
 *
 * Значения свойств `name`, `surname`, `job` в объекте `user` нужно получать из функции prompt().
 *
 * Условия:
 * - Свойство `data` обязательно должно быть геттером.
 *
 * Обратите внимание!
 * - Для того что бы обратиться к свойству оъекта необходимо использовать this.name, this.surname и this.job. *
 */

const user = {
    name: prompt(),
    surname: prompt(),
    job: prompt(),
    get data() {
        return `Привет! Я ${this.name} ${this.surname} и я работаю ${this.job}`
    }
}

alert (user.data)