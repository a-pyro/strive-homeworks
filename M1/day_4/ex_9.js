/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

let cutString = function (str) {
    let newString = str.slice(1, str.length - 1);
    return newString;
}

console.log(cutString('abcdef'));
console.log(cutString('qwertyuiop'));