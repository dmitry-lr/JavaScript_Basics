// 3.	Товары в корзине хранятся в массиве. Задачи:
// a.	Организовать такой массив для хранения товаров в корзине;
// b.	Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


function countBasketPrice(arr) {
    let sum = 0;
    for (let item of arr) {
        sum = sum + item;
    }
    console.log(sum);
}

prices = [2, 3, 4, 5, 100];

countBasketPrice(prices);




