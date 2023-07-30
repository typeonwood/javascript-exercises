const getTheTitles = function(array) {
    titleList = []
    array.forEach((item) => {
        titleList.push(item.title)
    })
    return titleList
};

// Do not edit below this line
module.exports = getTheTitles;
