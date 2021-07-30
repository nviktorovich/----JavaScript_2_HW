"use strict"

let userCash = parseInt(prompt("Введите сумму, для внесения на счет"))
let rubles = "рублей"
if (userCash % 10 === 1) {
    rubles = "рубль"
} else if (userCash % 10 > 1 && userCash % 10 < 5 && userCash % 100 !== 12 && userCash % 100 !== 13 && userCash % 100 !== 14) {
    rubles = "рубля"
}
alert(`Ваша сумма в ${userCash} ${rubles} успешно зачислена.`)

// 1, 21, 31, ... - рубль
// 2, 3, 4, 22, 23, 24, 32, 33, 34, ... рубля
// остальное - рублей