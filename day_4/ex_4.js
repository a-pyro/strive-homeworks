/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = (number) => {
    if (Number.isInteger(number)) {
        if (number >= 20 && number <= 100 || number === 400) {
            return true;
        } else {
            return false;
        };
    } else {
        return 'please use an integer';
    };
};

console.log('ln17', boundary(20.6));
console.log('ln18', boundary(20));
console.log('ln19', boundary(10));
console.log('ln20', boundary(100));
console.log('ln21', boundary(102));
console.log('ln22', boundary(400));
console.log('ln23', boundary(401));