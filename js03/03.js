//Спросите у пользователя имя, и поприветствуйте его с помощью alert.
{
    let name=prompt("What is your name?");
    alert("Hello " + name + "!!!")
}

//Попросите пользователя ввести строку через prompt. Используя split и join сделайте что бы после любой запятой следовало слово блин, .

{
    let str = prompt("Напишите здесь несколько слов через запятую");

    let gopnik = str.split(',').join(' блин');

    alert(gopnik)
}

//Преобразуйте строку, введенную пользователем, таким образом, чтобы первая буква становилась большой, а остальные - маленькими:

{
    let str = "cANBerRa";
    let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
    
    console.log(result) //Canberra
}

//Посчитайте количество слов в строке. Используйте разбиение по пробелам. Длина массива называется так же, как и длина строки.

{
    let str = "Мама мыла раму";

    let lengthOfString = str.split(' ').length;

    console.log(lengthOfString)
}


// Спросите у пользователя ФИО, используя prompt трижды. Выкиньте лишние пробелы, используя .trim
// Используя String: capitalize сделайте так, что бы каждое слово в ФИО было с большой буквы, а остальные - маленькие
// Объедините эти три строки в одну переменную fullName и выведите куда-то(alert, console.log). Не забудьте пробелы между словами.

{
    firstName = prompt("Напишите ваше имя");
    fatherName = prompt("Напишите ваше отчество");
    surname = prompt("Напишите вашу фамилию");
    
    firstNameTrim = firstName.trim();
    fatherNameTrim = fatherName.trim();
    surnameTrim = surname.trim();

    firstNameCap = firstNameTrim[0].toUpperCase() + firstNameTrim.slice(1).toLowerCase();
    fatherNameCap =fatherNameTrim[0].toUpperCase()+ fatherNameTrim.slice(1).toLowerCase();
    surnameCap = surnameTrim[0].toUpperCase() + surnameTrim.slice(1).toLowerCase();

    fullName = firstNameCap + " " + fatherNameCap + " " + surnameCap;

    alert("Привет " + fullName);
}


//Не используя .replace замените слово пиво в строке на слово чай

{
    let str = "Было жарко. Василий пил пиво вприкуску с креветками";

    let beerHere = "пиво";

    let beerNumber = str.indexOf(beerHere);    

    let result = str.slice(0, beerNumber) + "чай" + str.slice(beerNumber + beerHere.length);
    
    console.log(result) //"Было жарко. Василий пил чай вприкуску с креветками"
}


//Найдите в строке HTML тэг. Удалите, т. е. вырежьте его - создайте другую строку, в которой будет все символы до тэга и после него Тэг может быть любым. split и join не используйте, вместо этого используйте indexOf и slice. .replace не используйте

{
    let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";

    let tagName = "<br />";

    let tagNumber = str.indexOf(tagName);

    let result = str.slice(0, tagNumber) + str.slice(tagNumber + tagName.length);
    
    console.log(result) //какой-то текст в котором есть один тэг  и всякое другое
}


//На основе предыдущего задания сделайте тэг большими буквами. replace, split и join не используйте, вместо этого используйте indexOf и slice

{
    let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";

    let tagName = "<br />";

    let tagNameCap = tagName.toUpperCase();

    let tagNumber = str.indexOf(tagName);

    let result = str.slice(0, tagNumber) + tagNameCap + str.slice(tagNumber + tagName.length);
    
    console.log(result) //какой-то текст в котором есть один тэг <BR /> и всякое другое

}


//Попросите пользователя ввести строку через prompt. prompt не позволяет вводить многострочные строки. Дадим пользователю такую возможность - Пользователь может вводить \n в качестве маркера новой строки. Используя split и join сделайте эту строку воистину многострочной и выведите в консоль или через alert.

{
    let str = prompt("Введите несколько строк текста, в качестве маркера новой строки вводите \\n");

    let strNew = str.split("\\n").join("\n");

    alert(strNew)
}

//Пусть пользователь введет любой текст с ссылкой на youtube. Используя регулярное выражение извлеките из ссылки идентификатор видоса и создайте строку с встраиваемым блоком HTML. Добавьте блок на страницу.

let link = prompt("Вставьте сюда любую ссылку на youtube");

const regular = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;

let arr = link.match(regular);

let videoId = regular.exec(link);

let linkNew =<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>;

document.write(linkNew);
