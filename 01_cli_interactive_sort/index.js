const readline = require('readline');
const {
    sortWordsAlphabetically,
    sortNumbersFromSmallToBig,
    sortWordsByLengthInAscending,
    sortUniqueWords,
    sortUniqueItems
} = require('./operations');

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
});

const startTitle = "Hello. Enter 10 words or digits dividing them in spaces: ";
const startTitleSecondIteration = "Enter 10 words or digits dividing them in spaces: ";
const variants = `  
    How would you like to sort values:
        1. Sort words alphabetically 
        2. Show numbers from lesser to greater 
        3. Show numbers from bigger to smaller 
        4. Display words in ascending order by number of letters in the word 
        5. Show only unique words 
        6. Display only unique values from the set of words and numbers 
    To exit the program, enter word 'exit', otherwise the program will repeat itself again: 
`;
let isFirstIteration = true;

const sortProgram = () => {
    
    rl.question(
        isFirstIteration ? startTitle : startTitleSecondIteration,
        (userAnswer) => {
            isFirstIteration = false;
            const answerArr = userAnswer.split(" ");

            rl.question(
                variants,
                (userChoice) => {
                    switch (userChoice) {
                        case "1":
                            console.log("Result: ", sortWordsAlphabetically(answerArr).join(" "));
                            sortProgram();
                            break;
                        case "2":
                            console.log("Result: ", sortNumbersFromSmallToBig(answerArr).join(" "));
                            sortProgram();
                            break;
                        case "3":
                            console.log("Result: ", sortNumbersFromSmallToBig(answerArr).reverse().join(" "));
                            sortProgram();
                            break;
                        case "4":
                            console.log("Result: ", sortWordsByLengthInAscending(answerArr).join(" "));
                            sortProgram();
                            break;
                        case "5":
                            console.log("Result: ", sortUniqueWords(answerArr).join(" "));
                            sortProgram();
                            break;
                        case "6":
                            console.log("Result: ", sortUniqueItems(answerArr).join(" "));
                            sortProgram();
                            break;
                        case "exit":
                            console.log("Program closed");
                            rl.close();
                            break;
                        default:
                            console.log("Wrong enter. Choose from the list!");
                            sortProgram();
                    }
                }
            )
        }
    )
};

sortProgram();