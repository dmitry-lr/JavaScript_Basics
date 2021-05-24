// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
// В зависимости от переданного значения выполнить одну из арифметических операций 
// (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

function simpleSum(num1, num2) {
    return num1 + num2;
}

function simpleSubstraction(num1, num2) {
    return num1 - num2;
}

function simpleMultiplication(num1, num2) {
    return num1 * num2;
}

function simpleDivizion(num1, num2) {
    return num1 / num2;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case simpleSum:
            return simpleSum(arg1, arg2);

        case simpleSubstraction:
            return simpleSubstraction(arg1, arg2);

        case simpleMultiplication:
            return simpleMultiplication(arg1, arg2);

        case simpleDivizion:
            return simpleDivizion(arg1, arg2);
    }
}

console.log(mathOperation(28, 7, simpleSum));
console.log(mathOperation(28, 7, simpleSubstraction));
console.log(mathOperation(28, 7, simpleMultiplication));
console.log(mathOperation(28, 7, simpleDivizion));
