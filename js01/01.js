// Обратите внимание на те или иные расчеты, которые вам нужны в обычной жизни. Это может быть оплата за электроэнергию, количество километров, пройденных за месяц (если вы, например, ходите по одному и тому же маршруту каждый день), количество батонов, кофе, масла, всего, что угодно и так далее. Также можете написать любой расчет, необходим вам на работе.

let rainyDays1 = 20 // сколько дождливых дней в Шотландии зимой
let winterMonths = 3 // сколько месяцев

let rainyDays2 = 10 // сколько дождливых дней в Шотландии летом
let summerMonths = 3 // сколько месяцев

let rainyDays3 = 15 // сколько дождливых дней в Шотландии в остальное время года
let otherMonths = 6 // сколько месяцев

let rainyDaysYear = (rainyDays1*winterMonths) + (rainyDays2*summerMonths) + (rainyDays3*otherMonths) // сколько дождливых дней в году

alert(rainyDaysYear)



let dayCoffee = prompt("Сколько чашек кофе вы выпиваете за день?");

let monthCoffee = dayCoffee * 30;

alert("Вы выпиваете " + monthCoffee + " чашек в месяц.")