/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

const reverseString = (str) => {
    let arr = str.split('');
    let newArr = arr.reverse();
    return newArr.join('')
}
console.log(reverseString('cane'));