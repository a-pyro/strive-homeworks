/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = (num) => {
    if (num >= 0) {
        return (num % 3 === 0 || num % 7 === 0) ? true : false;
    } else {
        return 'the number is not positive';
    }
};

console.log(check3and7(3));
console.log(check3and7(7));
console.log(check3and7(5));
console.log(check3and7(21));
console.log(check3and7(25));
console.log(check3and7(100));
console.log(check3and7(70));