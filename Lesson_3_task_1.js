// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

'use strict'

let i = 0;
while (i <= 100) {
    for (let n = Math.trunc(i / 2); n >= 1; n--) {
        if (i % n == 0 && n != 1) {
            break;
        }
        else if (i % n != 0) {
            continue;
        }
        else
            console.log(i);
    }
    i++;
}
