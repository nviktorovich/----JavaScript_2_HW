"use strict"

function sum (n1, n2) {
    return n1 + n2
}

function sub (n1, n2) {
    return n1 - n2
}

function mul (n1, n2) {
    return n1 * n2
}

function div (n1, n2) {
    return n1 / n2
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "sum":
            return sum(arg1, arg2)
        case "sub":
            return sub(arg1, arg2)
        case "mul":
            return mul(arg1, arg2)
        case "div":
            return div(arg1, arg2)
    }
}

console.log(mathOperation(1, 3, "sub"))