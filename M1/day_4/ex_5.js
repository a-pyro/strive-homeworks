/* EXERCISE 5
Write a function "strivify" which accepts a string S.
Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const strivify = function (s) {
    if (s.indexOf("Strive") === -1) {
        return 'Strive ' + s;
    } else {
        return s;
    }
};

console.log(strivify('Strive'));