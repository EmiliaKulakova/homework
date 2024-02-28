let input=+prompt("Введите номер задания: 1 (Number: odd), 2 (String: lexics), 3 (Boolean), 4 (Boolean: if), 5 (Comparison: sizes), 6 (Ternary), 7 (Training), 8 (Prompt: or), 9 (Confirm: or this days), 10 (Confirm: if this days), 11 (Default: or), 12 (Default: if), 13 (Login and password), 14 (Currency exchange), 15 (Scissors)");

if (input === 1)
//Number: odd
//С помощью prompt узнайте число, введенное пользователем. С помощью if проверьте что число корректно преобразовано из строки. В случае ошибки выведите сообщение Выведите четное число или нет, используя if.
{
    let num = +prompt("Введите любое число");
        
    if (isNaN(num))
    {
        alert("Пожалуйста введите число")
    }

    else if (num % 2 === 0)
    {
        alert("Это четное число");
    }
    else
    {
        alert("Это нечетное число");
    }
}

else if (input===2)
//String: lexics
//Спросите у пользователя текст, и проверьте его на наличие некорректного слова или нескольких некорректных слов. Используйте метод indexOf (или includes) строки:
{
    let text = prompt("Введите текст")

    if (text.includes("фак ю"))
    {
        alert("Я все маме расскажу")
    }
    else
    {
        alert("Ок")
    }
}

else if (input===3)
//Boolean
//Напишите код, который спрашивает те или иные вопросы с ответом "да"/"нет" с помощью confirm, и сохраняет ответы в переменных.
{
    let planet = confirm("Вы живете на планете Земля?");

    let sex = confirm("Вы мужского пола?");

    let status = confirm("Вы женаты/замужем?");
}

else if (input===4)
//Boolean: if
//Расширьте предыдущее задание условиями по полученным переменным условиями (if else). Например, если вы спрашиваете пол пользователя с помощью confirm, то по условию сделайте alert("Вы женщина") и alert("Вы мужчина")
{
    let planet = confirm("Вы живете на планете Земля?");

    if (planet)
    {
        alert("Вы человек")
    }
    else
    {
        alert("Вы гуманоид")
    }
}

else if (input===5)
//Comparison: sizes
//Сделайте перевод перевод из нашей системы размеров в американскую или любую на выбор. Используйте prompt, условия сравнения и alert.
{
    let size = prompt("Введите размер");

    if (+size === 40)
    {
        alert("Это 6-й британский размер")
    }
    else if (+size === 42)
    {
        alert("Это 8-й британский размер")
    }
    else if (+size === 44)
    {
        alert("Это 10-й британский размер")
    }
    else if (+size === 46)
    {
        alert("Это 12-й британский размер")
    }
    else if (+size === 48)
    {
        alert("Это 14-й британский размер")
    }
}


else if (input===6)
//Ternary
//Спросите у пользователя пол (confirm). Выведите с помощью alert "Вы мужчина" или "Вы женщина". Используйте тернарный оператор.
{
    alert(confirm('Вы мужского пола?') ? 'Вы мужчина' : 'Вы женщина');
}


else if (input===7)
{
    //Training
    //Просмотрите выражения ниже и попробуйте вычислить в уме их результат.

    // bool type cast
    !!2 //true
    !!0 //false
    !!1 //true
    // or
    2 || 1 // 2
    2 || 0 // 2
    //and
    2 && 1 // 1
    1 && 2 // 2
    0 && 2 // 0
    // or and and difference
    0 || 1 || 2 // 1
    0 && 1 && 2 // 0
    2 || 1 || 0 // 2
    2 && 1 && 0 // 0
    confirm('left') || confirm('right')  // если нажать "Ок" дальше код не выполняется
    confirm('left') && confirm('right') // если нажать "Отмена" дальше код не выполняется
    //null, undefined, so on
    null || 2 // 2
    undefined && 1 // error
    alert("Hello") && confirm('Are you sexy?'); // alert("Hello") это false
    alert("Hello") || confirm('Are you drunk?'); // выполняется alert и confirm
    //brackets and complex expressions
    (undefined || 2) && (3 || 0) // 3
    (2 && 1) || (null && 0) // 1
    (2 > 1) && "greater" // "greater"
    (2 < 1) && null // 2 < 1
    null && (2 < 1) // null
    // ternary operator
    1 ? "one" : "not one" // one
    0 ? "zero" : "not zero" // not zero
    "0" ? "\"zero\"" : "not `zero`" // "zero"
    parseInt("0") ? 'true' : 'false' // false
    ("" || 2) && (3 || "3.5") || (4 && 5) // 3
    (-1 + 1) && "zero" // 0
    "-1" + 1 && "oups" // oups
    (typeof null === 'object') ? "null is object" : "null is null" // null is object
    // ternary && ||
    Math.random() < 0.5 && 'less' || 'more' //если Math.random() < 0.5, возвращается less, если нет, more
    (a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a // то же самое, но еще выводится на экран значение Math.random()
    //in for array
    [2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found' // prime
}


else if (input===8)
//Prompt: or
//Для задания Number: age используя ИЛИ || вывести сообщение об ошибке (alert) если пользователь не введет возраст или нажмет отмену (т. е. prompt выдаст пустую строку или null, интерпретируемую как false).
{
    let age = +prompt("Сколько вам лет?") || alert("Ошибка") ;

    let year = 2024 - age;

    alert("Вы " + year + " года рождения");
}

else if (input===9)
//Confirm: or this days
//C помощью этого же трюка (использование ИЛИ для запуска альтернативы) сделайте капризного робота, который в confirm спрашивает "шопинг?", а в случае отказа - выводить alert "ты - бяка".
{
    confirm('Шопинг?') || alert('Ты бяка')
}


else if (input===10)
//Confirm: if this days
//Сделать тоже самое с помощью if.
{
    if (!(confirm('Шопинг?')))
    {
        alert('Ты бяка')
    }
}

else if (input===11)
//Default: or
//Попросите пользователя ввести ФИО в три разныe переменныe. Используя ИЛИ || добавьте строки по умолчанию, которые будут сохраняться во внутренних переменных если пользователь ввел пустую строку или нажал "Отмена". Например, если вы на шаге ввода Фамилии нажмете Escape, фамилия будет "Иванов"
{
    firstName = prompt("Напишите ваше имя") || "Ivan";
    fatherName = prompt("Напишите ваше отчество") || "Ivanovich";
    surname = prompt("Напишите вашу фамилию") || "Ivanov";

    alert(fullName = firstName +" " + fatherName + " " + surname);
}

else if (input===12)
//Default: if
//Сделайте тоже самое с помощью if и else
{
    if (!(firstName = prompt("Напишите ваше имя")))
    {
        firstName = 'Ivan';
    }

    if(!(fatherName = prompt("Напишите ваше отчество")))
    {
        fatherName = 'Ivanovich';
    }

    if(!(surname = prompt("Напишите вашу фамилию")))
    {
        surname = 'Ivanov'
    }

    alert(firstName +" " + fatherName + " " + surname)
}


else if (input===13)
//Login and password
//Напишите код, который спрашивает логин, проверяет его на верность, в случае если логин верен, просит ввести пароль и проверяет его. В случае несовпадения логина или пароля выводить alert с текстом ошибки. В случае успешного логина - alert с поздравлением. Правильные логин: admin и пароль: qwerty. Используйте вложенные if и else.
{
    let login = prompt("Введите логин")

    if (login === "admin")
    {
        let password = prompt("Введите пароль")
        if (password === "qwerty")
        {
            alert("Welcome")
        }
        else
        {
            alert("Неверный пароль")
        }
    }
    else
    {
        alert("Неверный логин")
    }
}

else if (input===14)
//Currency exchange

{
    let money = prompt("Какая валюта вас интересует: usd, eur, gbp?");

    let moneyLower= money.toLowerCase();

    let amount =+prompt("Какая сумма интересует?");

    let deal = confirm("Вы хотите купить?") ? "buy" : "sell";

    let rateUSD = [38.2, 38.68];
    let rateEUR = [41.43, 42.1];
    let rateGBP = [47.9, 49.06];

    if (moneyLower==="usd")
    {
        if (deal === "buy")
        {
            let amountNew = amount * rateUSD[0];
            amountNew = amountNew.toFixed(2);
            alert(amount + " " + moneyLower + " для покупки будет " + amountNew + " в гривнах.")
        }

        else if (deal === "sell")
        {
            let amountNew = amount * rateUSD[1];
            amountNew = amountNew.toFixed(2);
            alert(amount + " " + moneyLower + " для продажи будет " + amountNew + " гривен.")
        }
    }

    else if (moneyLower==="eur")
    {
        if (deal === "buy")
        {
            let amountNew = amount * rateEUR[0];
            amountNew = amountNew.toFixed(2);
            alert(amount + " " + moneyLower + " для покупки будет " + amountNew + " в гривнах.")
        }

        else if (deal === "sell")
        {
            let amountNew = amount * rateEUR[1];
            amountNew = amountNew.toFixed(2);
            alert(amount + " " + moneyLower + " для продажи будет " + amountNew + " гривен.")
        }
    }

    else if (moneyLower==="gbp")
    {
        if (deal === "buy")
        {
            let amountNew = amount * rateGBP[0];
            amountNew = amountNew.toFixed(2);
            alert(amount + " " + moneyLower + " для покупки будет " + amountNew + " в гривнах.")
        }

        else if (deal === "sell")
        {
            let amountNew = amount * rateGBP[1];
            amountNew = amountNew.toFixed(2);
            alert(amount + " " + moneyLower + " для продажи будет " + amountNew + " гривен.")
        }
    }

}


else if (input===15)
//Scissors
//Сделайте игру "камень-ножницы-бумага". Пользователь вводит свой вариант через prompt, программа генерирует свой вариант через Math.random() и выводит через alert. Следующий alert выводит имя победителя или "ничья"
{
    let user = prompt("Введите одно из трех: камень, ножницы или бумага");

    let pc = Math.random();

    if (user==="камень")
    {
        if (pc <= 0.33)
        {
            alert("НИЧЬЯ")
        }
        else if (pc > 0.33 && pc <= 0.66)
        {
            alert("Ты выиграл")
        }
        else if (pc > 0.66)
        {
            alert("Ты проиграл")
        }
    }

    if (user==="ножницы")
    {
        if (pc <= 0.33)
        {
            alert("Ты проиграл")
        }
        else if (pc > 0.33 && pc <= 0.66)
        {
            alert("НИЧЬЯ")
        }
        else if (pc > 0.66)
        {
            alert("Ты выиграл")
        }
    }

    if (user==="бумага")
    {
        if (pc <= 0.33)
        {
            alert("Ты выиграл")
        }
        else if (pc > 0.33 && pc <= 0.66)
        {
            alert("Ты проиграл")
        }
        else if (pc > 0.66)
        {
            alert("НИЧЬЯ")
        }
     }
}
