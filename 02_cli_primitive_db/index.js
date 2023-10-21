import inquirer from 'inquirer';
import {
    userNameQuestion,
    genderAndAgeQuestions,
    startDBSearchQuestion,
    dBSearchNameQuestion
} from './questions.js';
import {
    readFile,
    addUserToFile,
    findUserInFile
} from './operations.js';


function startProgram() {
    inquirer.prompt(userNameQuestion).then(({name}) => {        
        name === '' ? askToUseDB() : askParameters(name); 

    }).catch((error) => {
        if (error.isTtyError) {
            console.log(error)
        } else {
            console.log(error)
        }
    });
}
    

function askParameters(name) {
    inquirer.prompt(genderAndAgeQuestions).then(async ({ gender, age }) => {
        await addUserToFile({name, gender, age})
        startProgram();

    }).catch((error) => {
        if (error.isTtyError) {
            console.log(error)
        } else {
            console.log(error)
        }
    });
}

function askToUseDB() {
    inquirer.prompt(startDBSearchQuestion).then(async ({isSearchConfirmed}) => {
        if (isSearchConfirmed) {
            await readFile();
            findNameInDB();
        }
    }).catch((error) => {
        if (error.isTtyError) {
            console.log(error)
        } else {
            console.log(error)
        }
    });
}

function findNameInDB() {
    inquirer.prompt(dBSearchNameQuestion).then(({name}) => {
        findUserInFile(name);

    }).catch((error) => {
        if (error.isTtyError) {
            console.log(error)
        } else {
            console.log(error)
        }
    });
}

startProgram();