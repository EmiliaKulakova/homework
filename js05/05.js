//Сохраните в массив ответы на вопросы, заданные с помощью confirm. Используйте литеральный (декларативный) синтаксис массивов ([....,....,....])

{
    const news = ["Сегодня выходной?", "Сегодня солнечно?", "Сегодня дождь?"].filter(confirm)
}


//Сохраните в массив ответы на вопросы, заданные с помощью prompts. Используйте доступ к массиву по индексу и присвоение (arr[....] = ....)

{
    const dates = ["Какой сегодня день недели?", "Какой месяц?", "Какое число?"].map(prompt);

    dates[3] = "2024 год";

    alert(dates)
}

//Попросите пользователя ввести (prompt) индекс в массиве. Выведите значение элемента по этому индексу. Попробуйте так же ввести индекс "length".

{
    const week =["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

    let input = +prompt("Введите индекс, от 0 до 6 включительно");

    output = week[input];

    alert(input + " это " + output + " из " + week.length + " дней недели")
}

//Попросите пользователя ввести (prompt) индекс в массиве, а так же значение для этого индекса. Присвойте в введенный индекс введенное значение

{
    const newArr = [];

    let newIndex = +prompt("Введите любой индекс");

    let newValue = prompt("Введите значение");

    newArr[newIndex] = newValue;

    console.log(newArr)
}


//Создайте таблицу умножения 5x5 используя декларативный синтаксис вложенных массивов const arr = [[....], [....], [....], .....]. Числа во вложенных массивах должны быть равны произведению индекса внешнего массива на индекс внутреннего массива: arr[2][3] === 6

{
    const table = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
}


//Используя slice создайте массив массивов (другую таблицу/матрицу) из таблицы умножения, в которой не будет нулей

{
    const table = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];

    const table2 = table.slice(1);

    let [a, b, c, d] = table2;

    const table3 = [a.slice(1), b.slice(1), c.slice(1), d.slice(1)];
}


//Спросите у пользователя строку из нескольких слов. Спросите у него искомое слово. Выведите, каким по счету является это слово в строке из нескольких слов. Если слово не найдено, выведите сообщение об этом (а не -1)
{
    let line = prompt("Введите строку из нескольких слов");

    let word = prompt("Введите слово, которое нужно найти в строке");

    let lineNew = line.split(" ")

    let output = lineNew.indexOf(word);

    if (output >= 0)
    {
        alert("Это слово номер " + (output + 1));
    }
    else{
        alert("Слово не найдено.")
    }
}


//Добавьте в массив пять введенных пользователем через prompt элементов(используйте push). Создайте другой массив с этими же элементами в обратном порядке. Для этого извлекайте элементы из первого массива используя pop, добавляйте их во второй используя push

{
    let input = prompt("Введите список из 5 слов через запятую");

    let inputList = input.split(',');

    let arr = [];

    arr.push(inputList.pop(), inputList.pop(), inputList.pop(), inputList.pop(), inputList.pop());

    console.log(arr)
}

//Переверните второй массив из предыдущего задания еще раз (последовательность будет как в первом массиве), используя shift и unshift
{
    let input = prompt("Введите список из 5 слов через запятую");

    let inputList = input.split(',');

    let arr = [];

    arr.push(inputList.pop(), inputList.pop(), inputList.pop(), inputList.pop(), inputList.pop());

    let arr2 = [];

    arr2.unshift(arr.shift(), arr.shift(), arr.shift(), arr.shift(), arr.shift());

    console.log(arr2)
}

//Скопируйте массив созданный в задании Multiply table неглубоко
{
    const table = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];

    const copy = table.slice();

    console.log(copy)
}

//Скопируйте массив созданный в задании Multiply table включая вложенные массивы (глубокая копия)
{
    const table = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];

    const copy = table.map(x =>[...x]);

    console.log(copy)
}

//Создайте код, в котором будет две переменных с массивами (arr1 и arr2), которые равны друг другу (arr1 === arr2)
{
    const arr = [a, b, c];

    const arr2 = arr;

    console.log(arr === arr2);
}

//Соберите все элементы всех вложенных массивов из задания Multiply table в один массив. Его длина должна быть равна 25. Используйте spread-оператор
{
    const table = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];

    const copy = [...table[0], ...table[1], ...table[2], ...table[3], ...table[4]];

    console.log(copy)
}

//Извлеките первую, пятую и девятую букву из строки, введенной пользователем, используя деструктуризацию. Выведите их
{
    let line = prompt("Введите любую строчку");

    let [a, , , , b, , , , c] = line;

    console.log(a, b, c)
}

//Извлеките вторую, четвертую и пятую букву из строки, введенной пользователем, используя деструктуризацию. Если в строке таких букв не окажется задайте переменным значение по умолчанию ! (восклицательный знак). Выведите эти переменные
{
    let line = prompt("Введите любую строчку");

    let [ , a='!', , b='!', c='!'] = line;

    console.log(a, b, c)
}

//Реализуйте задание Multiply table slice, используя оператор rest при деструктуризации. Используйте вложенную деструктуризацию. После получения четырех обрезанных вложенных массивов - соберите общий массив без нулей
{
    const table = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];

    let [[ ], [ , ...rest], [ , ...rest2], [ , ...rest3], [ , ...rest4]] = table; //используем rest, чтобы скопировать массивы без нулей

    let table2 = [...rest, ...rest2, ...rest3, ...rest4]; //используем spread, чтобы перенести вложенные массивы в один массив

    console.log(table2)
}

//Есть массив ["John", "Paul", "George", "Ringo"]. Выведите каждое имя отдельным alert(), используя цикл for .... of
{
    const beatles = ["John", "Paul", "George", "Ringo"];

    for (let star of beatles)
    {
        alert(`Hello, ${star}`)
    }
}

//Используя заготовку, создайте выпадающий список с валютами. Элементы выпадающего списка создаются с помощью тэга <option>
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<select>"
    for (let currency of currencies){
        str += `<option value="${currency}">${currency}</option>`;
    }
    str+= "</select>"
    document.write(str) //document.write отобразит ваш HTML на странице
}


//Аналогично, добейтесь вывода имен в ячейки таблицы по горизонтали (одна строка с четырьмя ячейками)
{
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table><tr>"
    for (const name of names){
        str += `<td>${name}</td>`
    }
    str+= "</tr></table>"
    document.write(str) //document.write отобразит ваш HTML на странице
}


//Аналогично, добейтесь вывода имен в ячейки таблицы по вертикали(одна колонка с четырьмя строками, в каждой строке - одна ячейка)
{
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (let name of names){
        str += `<tr><td>${name}</td></tr>`
    }
    str+= "</table>"
    document.write(str) //document.write отобразит ваш HTML на странице
}


//Используя заготовку, создайте таблицу 3x4. В каждой строке по три ячейки с буквами, четыре строки, так как 4 валюты в массиве.
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<table>"
    for (let currency of currencies){ //цикл создает строки
        str += `<tr>`//одна итерация цикла создает ОДНУ СТРОКУ
        console.log(currency)
        for (let letter of currency){ //цикл создает ЯЧЕЙКИ в ОДНОЙ СТРОКЕ
            str += `<td>${letter}</td>`//одна итерация цикла создает ОДНУ ЯЧЕЙКУ
            console.log(letter)
        }
        str += `</tr>`
    }
    str+= "</table>"
    document.write(str) //document.write отобразит ваш HTML на странице
}


//Выведите таблицу умножения 5x5 из задания Multiply table в таблицу, используя вложенные for .... of и document.write. Сделайте черезстрочную подсветку - задавайте четным строкам один цвет фона, нечетным - другой
{
    const table = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
    let str = "<table>";
    let lineNumber = 0;
    for (let line of table){
        str += `<tr style="background-color: ${lineNumber % 2 === 0 ? "green" : "blue"};">`;
        for (let digit of line){
            str += `<td>${digit}</td>`;
        }
        str += '</tr>';
        lineNumber ++
    }
    str += "</table>";
    document.write(str);
}


//Реализуйте задачу String: capitalize как отдельную функцию:
{
    const capitalize = str => {
        let result = str[0].toUpperCase() + str.slice(1).toLowerCase()
        
        return result //именно этот код обеспечит возврат результата функции
    }
    console.log(capitalize("cANBerRa")) //Canberra
}


//Пусть пользователь вводит строку. Разбейте её по пробелам. Используя map и capitalize создайте массив в котором каждое слово будет с большой буквы. Соберите массив в строку обратно
{
    let line=prompt("Введите строку из нескольких слов");
    let arr = line.split(" ");

    const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();
    let firstCapital = arr.map(capitalize);
    let line2 = firstCapital.join(" ");
    
    console.log(line2)
}


//Пусть пользователь вводит строку. Разбейте её по пробелам. Используя filter верните true если элемент массива не состоит в определенном массиве недопустимых слов. Если же элемент массива - недопустимое слово, функция, переданная в filter должна возвращать false. Соберите массив в строку обратно.
{
    let line=prompt("Введите строку из нескольких слов");
    let arr = line.split(" ");

    let badWords =["черт", "блин", "пипец"];
    let line2 = arr.filter(word => !badWords.includes(word));

    line2 = line2.join(" ");

    console.log(line2)
}

//Пусть пользователь вводит строку. Разбейте её по пробелам. Используя map и тернарный оператор верните из функции слово без изменений, если оно не состоит в каком-то другом массиве запрещенных слов. Если же слово состоит в этом списке, функция должна вернуть слово BEEP. Соберите массив обратно в строку через пробел. Таким образом вы сможете реализовать замену нескольких запрещенных слов на BEEP.
{
    let line = prompt("Введите строку из нескольких слов");
    let array1 = line.split(" ");

    let badWords=["черт", "блин", "пипец"];

    let array2 = array1.map(word => badWords.includes(word) ? "BEEP" : word);

    array2 = array2.join(" ");

    console.log(array2)
}


//Реализуйте задачу For Select Option используя reduce:
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str          = "<select>"
    str             += currencies.reduce( (a,b) => a + `<option value="${b}"> ${b} </option>`, "")
    str             += "</select>"
}
