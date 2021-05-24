// * С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val — заданное число, pow –— степень.

function power(val, pow) {
    if (pow === 0) {                      // Базовый случай
        return 1;
    }

    else {
        return val * power(val, pow - 1); // Рекурсивный случай
    }
}

console.log(power(5, 4));
