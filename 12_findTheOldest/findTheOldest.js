const findTheOldest = function(array) {
    function findAges(person) {
        if (person.yearOfDeath === undefined) {
            return 2023 - person.yearOfBirth
        }
        else {
            return person.yearOfDeath - person.yearOfBirth
        }
    }
    let ages = array.map((person) => findAges(person))
    let oldest = 0;
    ages.forEach((age) => {
        if (age > oldest) {
            oldest = age
        }
    })
    index = ages.findIndex(x => x === oldest);
    oldestPerson = array[index]
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
