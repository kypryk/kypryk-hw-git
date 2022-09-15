"use strict";

// Домашка:
/*
1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

let burgers = 4;
let fries = 0; 
(burgers >= 4 && fries >= 1) ? console.log("Ми поїли") : console.log("Ми йдемо в інше кафе");

/*2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/

let price = 1900;
if(price >= 1000 && price <= 1900){
    console.log(`${price} is within the 1000-1900 range`);
}else{
    console.log(`${price} is outside of the 1000-1900 range`);
}

/*3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

//без оператора НЕ !
let priceNew = 1000;
if(priceNew < 1000 || priceNew > 1900){
    console.log(`${priceNew} is outside of the the 1000-1900 range`);
}else{
    console.log(`${priceNew} is within the the 1000-1900 range`);
}
//з оператором НЕ !
let priceNewest = 999;
!(priceNewest >= 1000 && priceNewest <= 1900) ? console.log(priceNewest + ' is outside of the the 1000-1900 range') : console.log(priceNewest + ' is within the the 1000-1900 range');

/*4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

let season = 4;
if(season == 1){
    console.log("It's winter now");
}else if(season == 2){
    console.log("It's spring now");
}else if(season == 3){
    console.log("It's summer now, go on vacation");
}else{
    console.log("It's autumn now");
}

/*5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/

let a = 2
    b = 3
    c = 1;
let avg;
//if a is MAX
if(a>b && a>c){
    if(b>c){
        avg = b;
    }else{
        avg = c;
    }
//if b is MAX
}else if(b>a && b>c){
    if(a>c){
        avg = a;
    }else{
        avg = c;
    }
//if c is MAX
}else{
    if(a>b){
        avg = a;
    }else{
        avg = b;
    }
}
console.log(`Average number is ${avg}`)

/*6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/
let day = 2;
switch(day){
    case 1: 
        console.log("Today is Monday")
        break;
    case 2: 
        console.log("Today is Tuesday")
        break;  
    case 3: 
        console.log("Today is Wednesday")
        break; 
    case 4: 
        console.log("Today is Thursday")
        break; 
    case 5: 
        console.log("Today is Friday")
        break; 
    case 6: 
        console.log("Today is Saturday")
        break; 
    case 7: 
        console.log("Today is Sunday")
        break;  
}

/*7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

let operator = '/';
let number1 = 10;
    number2 = 2;
switch(operator){
    case '+':
        result = number1 + number2
        console.log(result)
        break; 
    case '-':
        result = number1 - number2
        console.log(result)
        break; 
    case '*':
        result = number1 * number2
        console.log(result)
        break; 
    case '/':
        result = number1 / number2
        console.log(result)
        break; 
}

//8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let string = "Orcs must die, something else, test, test";
console.log(string.replace(/[aoieuy]/ig, ''));

/*9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
    https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk
*/

let meters = 11000;
let result = meters / 1000;
let endingKm;
//якщо число не ціле
if(result % 1 != 0){
    endingKm = 'а';
}
//якщо число ціле
else{
    //беремо 2 останні цифри
    let stringTwoNumbers = `${result}`
    let lastTwoNumbers = stringTwoNumbers.slice(stringTwoNumbers.length - 2, stringTwoNumbers.length)
    console.log(`${lastTwoNumbers}`)
    //якщо 2 останні цифри в межах 11-20
    if(lastTwoNumbers >= 11 && lastTwoNumbers <= 20){
        endingKm = 'ів';
    }
    else{
        //беремо останню цифру
        let stringresult = `${result}`
        let lastNumber = stringresult.slice(stringresult.length - 1, stringresult.length)
        //console.log(`${lastNumber}`)
        //якщо закінчується на 1
        if(lastNumber == 1){
            endingKm = '';
        //якщо закінчується на 2-4
        }else if(lastNumber > 1 && lastNumber < 5){
            endingKm = 'а';
        //якщо закінчується на 0 або 5-9
        }else if(lastNumber == 0 || lastNumber >= 5 && lastNumber <= 9){
            endingKm = 'ів';
        }
    }
}
console.log(`${meters} - це ${result} кілометр${endingKm}`)

//Version 1:
/*let meters = 25000;
let result = meters / 1000;
//якщо число не ціле
if(result % 1 != 0){
    console.log(`${meters} - це ${result} кілометра`)
}
//якщо число ціле
else{
    //якщо число в межах 11-20
    if(result >= 11 && result <= 20){
        console.log(`${meters} - це ${result} кілометрів`)
    }
    else{
        //беремо останню цифру
        let stringresult = `${result}`
        let lastNumber = stringresult.slice(stringresult.length - 1, stringresult.length)
        console.log(`${lastNumber}`)
        //якщо закінчується на 1
        if(lastNumber == 1){
            console.log(`${meters} - це ${result} кілометр`)
        //якщо закінчується на 2-4
        }else if(lastNumber > 1 && lastNumber < 5){
            console.log(`${meters} - це ${result} кілометра`)
        //якщо закінчується на 0 або 5-9
        }else if(lastNumber == 0 || lastNumber >= 5 && lastNumber <= 9){
            console.log(`${meters} - це ${result} кілометрів`)
        }
    }
}*/
