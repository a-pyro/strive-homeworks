/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

let giveMeRandom = function (num) {
    let arrRandom = [];
    for (let i = 0; i < num; i++) {
        arrRandom.push(Math.floor((Math.random()) * 10))
    };
    return arrRandom;
}

console.log(giveMeRandom(6));
console.log(giveMeRandom(6));
console.log(giveMeRandom(6));
console.log(giveMeRandom(6));
console.log(giveMeRandom(6));
console.log(giveMeRandom(6));