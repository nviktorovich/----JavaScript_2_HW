"use strict"
/**
 * функция предназначена для генерации случайных целых числе в диапазоне от -100 до 100
 */
function getRandomIntInclusive(min=-100, max=100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let a = getRandomIntInclusive();
let b = getRandomIntInclusive();

if (a >= 0 && b >= 0) {
    alert(`разность: ${a - b}`)
} else if (a < 0 && b < 0) {
    alert(`произведение: ${a * b}`)
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    alert(`сумма: ${a + b}`)
}