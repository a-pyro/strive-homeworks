/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum = (number1, number2) => {
    if (Number.isInteger(number1) && Number.isInteger(number2)) {
        return (number1 === number2) ? (number1 + number2) * 3 : number1 + number2;
    } else {
        return 'Please use integers';
    }
};

console.log(crazySum(5.5, 5));
console.log(crazySum(5, 4));