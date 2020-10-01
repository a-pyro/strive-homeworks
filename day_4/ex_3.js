/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = function (number) {
    return number > 19 ? (Math.abs(number - 19)) * 3 : Math.abs(number - 19);
};

console.log(crazyDiff(2));