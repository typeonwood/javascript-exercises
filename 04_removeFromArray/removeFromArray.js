// const removeFromArray = function(array, ...removedItems) {
//     newArray = []
//     for (let x in array) {
//         if (!removedItems.includes(array[x])) {
//             newArray.push(array[x])
//         }
//     }
//     return newArray
// };

// const removeFromArray = function(array, ...removedItems) {
//     newArray = []
//     array.forEach((item) => {
//         if (!removedItems.includes(item)) {
//             newArray.push(item)
//         }
//     })
//     return newArray
// }

const removeFromArray = function(array, ...removedItems) {
    return array.filter(item => !removedItems.includes(item))
}

// Do not edit below this line
module.exports = removeFromArray;
