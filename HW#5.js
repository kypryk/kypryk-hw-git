"use strict";

/** ЗАВДАННЯ 1
  *
  * 1. Оголосіть змінну та присвойте їй стрілочну функцію
  *
  * 2. У функції не повинно бути параметрів
  *
  * 3. Поверніть з функції рядок "Привіт, світ!"
  *
  * 4. Викличте функцію та виведіть результат у консоль
  *
  */

const helloFunc = () => {
  console.log("Привіт, світ!");
}
helloFunc()


/** ЗАВДАННЯ 2
  *
  * 1. Виведіть у консоль "Привіт, світ!" із затримкою 5 секунд
  *
  * 2. Використовуйте стрілочну функцію
  */

 const helloFunc2 = () => {
  setTimeout(() => {
    console.log("Привіт, світ!");
  }, 5000);
  
}
helloFunc2()


/** ЗАВДАННЯ 3
  *
  * 1. Створіть об'єкт із трьома властивостями та присвойте його значення змінній:
  * - name
  * - surname
  * - favoriteNumber
  *
  * 2. Напишіть функцію, що прийматиме цей обʼєкт як аргумент і
  *     створюватиме в ньому додаткове поле age з довільним значенням.
  * Результат роботи функції це вивід у консоль рядка
  * "My name is <name> <surname>, I'm <age> years old and my favorite number is <favoriteNumber>"
  */

const person = {
  name: "John",
  surname: "Smith",
  favoriteNumber: 7
  };

const infoDisplay = function (object){
  object.age = 27
  console.log(`My name is ${object.name}, I'm ${object.age} years old and my favourite number is ${object.favoriteNumber}`)
}
infoDisplay(person)  


/** ЗАВДАННЯ 4
  *
  * 1. Створіть масив з кількома елементами таких типів (int, boolean, string)
  *
  * 2. Створіть стрілочну функцію, що прийматиме цей масив як аргумент.
  *
  * 3. В функції замініть елемент масиву з типом int на інший з типом string
  *
  * 4. Поверніть новий масив як результат роботи функції та виведіть його у консоль
  */

const array = [7, 14, true, "54810"];

const arrowFunc = (array) => {
  //замініть елемент масиву з типом int на інший з типом string 
  //??? замінити конкретний елемент чи перебрати всі і замінити ті які number?
  for(i = 0; i < array.length; i++){
    let type = typeof array[i]
    //console.log(type);
    if(type == "number"){
      array[i] = "something else"
    }
  }
//array[0] = "fourteen"
console.log(array);
}
arrowFunc(array);

/** ЗАВДАННЯ 5
  *
  * 1. Виправте код щоб обидва вирази (setTimeout та myFn()) працювали.
  *
  * setTimeout(function myFn() {
  * console.log('hello from myFn')
  * }, 2000)
  *
  * myFn()
  */

setTimeout(function myFn() {
  console.log('hello from myFn')
  }, 2000)


/** ЗАВДАННЯ 6
  *
  * 1. Створіть масив із 3 об'єктами "cars"
  *
  * 2. Кожен об'єкт повинен мати три властивості
  * - carBrand (рядок)
  * - price (число)
  * - isAvailableForSale (логічне значення)
  *
  * 3. Створіть функцію, що прийматиме цей масив в якості аргументу.
  *
  * 4. В середині функції додайте ще один такий же обʼєкт в масив.
  *     Не створюйте новий обʼєкт в середині функції, а візьміть його з масиву.
  *
  * 5. Поверніть з функції новий масив. Результат роботи функції виведіть у консоль.
  */

const cars = [{carBrand: "Ford", price: 6000, isAvailableForSale: true},
  {carBrand: "Reno", price: 4000, isAvailableForSale: true},
  {carBrand: "BMW", price: 7000, isAvailableForSale: false}]

const functionCars = function(cars){
  cars[3] = cars[0]
  return cars;
}
functionCars(cars)
console.log(cars)

/** ЗАВДАННЯ 7
  *
  * 1. Створіть обʼєкт
  *
    const myObject = {
        key1: true,
        key5: 10,
        key3: 'abc',
        key4: null,
        key10: NaN,
     }
  *
  * 2. Створіть функцію, що прийматиме цей обʼєкт як аргумент.
  *
  * 3. У функції реалізуйте логіку: якщо назва властивості (ключ) дорівнює key3 або key10
  *     то виводьте значення властивості в консоль.
  */

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

const fucntionShowSomeProp = (object) => {
  for(let key in object){
    //console.log(key)
    if(key == 'key3' || key == 'key10'){
      console.log(`${key}: ${object[key]}`)
    }
  }
}
fucntionShowSomeProp(myObject)

/** ЗАВДАННЯ 8
  *
  * 1. Створіть функцію "findProductById" із двома параметрами:
  * - ID товару
  * - масив товарів
  *
  * 2. Функція повинна повернути товар із певним ID
  *
  * 3. Якщо товару з певним ID у масиві товарів немає,
  * функція має повернути "undefined"
  *
  * 4. Також всередині функції виведіть у консоль товар по ID

    const products = [
    { productId: 1355, name: 'phone' },
    { productId: 5131, name: 'laptop' },
    { productId: 6134, name: 'tablet' },
 ]

 console.log(findProductById(6134, products)) // { postId: 6134, name: 'tablet' }

 console.log(findProductById(4511, products)) // undefined

 */

 const products = [
  { productId: 1355, name: 'phone' },
  { productId: 5131, name: 'laptop' },
  { productId: 6134, name: 'tablet' },
]

const findProductById = function(id, products){
  for(i = 0; i < products.length; i++){
    if(products[i].productId == id){
      return products[i]
    }
  }
}
console.log(findProductById(1355, products)) 

/** ЗАВДАННЯ 9
 *
 * 1. Створіть функцію "arraySortInfo" з одним параметром - "inputArray", та реалізуйте наступну логіку
 *
 * 2. Якщо хоча б один елемент у масиві не є числом – повернути "Деякі елементи не є числами"
 *
 * 3. Якщо числа у масиві відсортовані за зростанням - повернути "Масив відсортований за зростанням"
 *
 * 4. Якщо числа в масиві відсортовані за спаданням - повернути "Масив відсортований за спаданням".
 *
 * 5. Якщо масив не відсортований - повернути "Масив не відсортований"
 */

/*  const a = [5, 'abc', 10, 1]
 const b = [4, 10, 14, 25, 25, 50]
 const c = [150, 132, 80, 40]
 const d = [15, 26, 10, 23, 85]

 console.log(arraySortInfo(a)) // Деякі елементи не є числами
 console.log(arraySortInfo(b)) // Масив відсортований за зростанням
 console.log(arraySortInfo(c)) // Масив відсортований за спаданням
 console.log(arraySortInfo(d)) // Масив не відсортований */

 /**
  * ПІДКАЗКИ
  *
  * Підказка 1: Використовуйте метод масивів "every"
  * Підказка 2: Ви повинні використовувати два параметри в колбек функції "element", "index"
  * Підказка 3: Кожен елемент масиву, крім першого, слід порівнювати з попереднім
  */
// !!!TO DO
const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

const arraySortInfo = function(inputArray){
  function func(element, index){
    if(typeof element != 'number'){
    return "Деякі елементи не є числами"
    }
  }
  console.log(inputArray.some(func))
}
console.log(arraySortInfo(a))


//////example
const dd = [1, 2, 3, 4, 5, 6]

function someF(d){
  if(d.every((element, index) => {
    element < d[index + 1]
  })){
    return "Масив відсортований"
  }
}
console.log(someF(dd))