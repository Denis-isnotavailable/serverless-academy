const fs = require('fs');

console.time("Program Time");
const allWordsSet = {};

fs.readdirSync("./words_archive").forEach((file) => {    
    const wordsFromFile = fs.readFileSync("./words_archive/" + file, "utf8");
    const wordsArr = [...new Set(wordsFromFile.split("\n"))];

    wordsArr.forEach((word) => {
        allWordsSet[word] ? allWordsSet[word] += 1 : allWordsSet[word] = 1
    })
});


// Determine how many unique usernames there are in all the specified files (occurring at least once in any of the files);
const uniqueValues = () => {
    return Object.keys(allWordsSet).length;
}

// Determine how many usernames occur in all 20 files;
const existInAllFiles = () => {
    let count = 0;
    
    Object.values(allWordsSet).forEach(quantity => {
        quantity === 20 && count++
    });

    return count;
}

// Find out how many usernames occur in at least 10 files.
const existInAtleastTen = () => { 
    let count = 0;

    Object.values(allWordsSet).forEach(quantity => {
        quantity >= 10 && count++
    });

    return count;
}

console.log("unique usernames: ", uniqueValues());
console.log("usernames occur in all 20 files: ", existInAllFiles());
console.log("usernames occur in at least 10 files: ", existInAtleastTen());

console.timeEnd("Program Time");