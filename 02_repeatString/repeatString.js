const repeatString = function(string, number) {
    if (number === 0) {
        return ''
    }
    else if (number === 1) {
        return string
    }
    else if (number > 1) {
        let i = 1
        let oldString = string
        while (i < number) {
            string = string.concat(oldString);
            i++;
        }
        return string
    }
    else {
        return 'Error: Number must be a whole number'
    }
    
};

// Do not edit below this line
module.exports = repeatString;
