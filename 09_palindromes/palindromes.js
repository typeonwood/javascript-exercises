const palindromes = function (string) {
// round length of string down to nearest integer after dividing by two 
// loop through string, checking if character on left matches corresponding one on right
// stop after the rounded length calculation has been reached
    // let fullLength = string.length
    // let halfLength = Math.round(fullLength / 2);
    // for (i = 0; i < halfLength; i++) {
    //     if (i === 0) {
    //         if (string.slice(i, (i + 1)).toLowerCase() != string.slice(-(i + 1)).toLowerCase()) {
    //             return false
    //         }
    //     }
    //     else if (string.slice(i, (i + 1)).toLowerCase() != string.slice(-(i + 1), -i).toLowerCase()) {
    //         return false
    //     }
    // }
    // return true
    let processedString = string.toLowerCase().replace(/[^a-z0-9]/g, '')
    reversedString = processedString.split('').reverse().join('')
    return reversedString === processedString
};

// Do not edit below this line
module.exports = palindromes;
