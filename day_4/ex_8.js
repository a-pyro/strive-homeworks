/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const upperFirst = (str) => {
    // array of strings
    let arrStr = str.split(' ');
    for (let i = 0; i < arrStr.length; i++) {
        // getting the first char of the word and capitalizing it
        let firstChar = arrStr[i].charAt(0).toUpperCase();
        arrStr[i] = firstChar + arrStr[i].slice(1);
    }
    return arrStr.join(' ')
}

console.log(upperFirst('Morty, is the cutest sphynx cat in my house'));