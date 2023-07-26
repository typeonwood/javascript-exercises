const reverseString = function(string) {
    let reverse = ''
    let length = string.length
    for (let i = length; i > 0; i--) {
        let letter = string[i - 1]
        reverse = reverse.concat(letter)
    }
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
