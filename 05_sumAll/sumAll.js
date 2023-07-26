const sumAll = function(firstNumber, secondNumber) {
    count = 0
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) return 'ERROR'
    if (firstNumber < 0 || secondNumber < 0) return 'ERROR'
    if (firstNumber < secondNumber) {
        for (i=firstNumber; i<=secondNumber; i++) {  
            count += i
        }
    }
    else if (secondNumber < firstNumber) {
        for (i=secondNumber; i<=firstNumber; i++) {  
            count += i
        }
    }
    return count
};

// Do not edit below this line
module.exports = sumAll;
