function extractWordsFromArray(arr) {
    let res = [];
    for (let item of arr) {       
        isNaN(Number(item)) && res.push(item);
    }
    return res;
}

function extractNumsFromArray(arr) {
    let res = [];
    for (let item of arr) {       
        !isNaN(Number(item)) && res.push(item);
    }
    return res;
}

function sortWordsAlphabetically(arr) {    
    let words = extractWordsFromArray(arr);    
    return [...words].sort((first, second) => first.toLowerCase().localeCompare(second.toLowerCase()));
}

function sortNumbersFromSmallToBig(arr) {    
    let nums = extractNumsFromArray(arr);    
    return [...nums].sort((first, second) => Number(first) - Number(second));
}

function sortWordsByLengthInAscending(arr) {    
    let words = extractWordsFromArray(arr);
    return [...words].sort((first, second) => first.length - second.length);
}

function sortUniqueWords(arr) {    
    let words = extractWordsFromArray(arr);
    return [...words].filter((item, index, array) => array.indexOf(item) === index);
}

function sortUniqueItems(arr) {
    return [...arr].filter((item, index, array) => array.indexOf(item) === index);
}

module.exports = {
    sortWordsAlphabetically,
    sortNumbersFromSmallToBig,
    sortWordsByLengthInAscending,
    sortUniqueWords,
    sortUniqueItems        
}