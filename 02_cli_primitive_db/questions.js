export const userNameQuestion = [
    {
        type: 'input',
        message: "Enter the user's name. To cancel press ENTER: ",
        name: 'name',        
    },
]

export const genderAndAgeQuestions = [    
    {
        type: 'list',
        message: "Choose your Gender: ",
        name: 'gender',
        choices: ['male', 'female'],        
    },
    {
        type: 'number',
        message: "Enter your age: ",
        name: 'age',        
    },
    
]

export const startDBSearchQuestion = [
    {
        type: 'confirm',
        message: "Would you like to search values in DB? ",
        name: 'isSearchConfirmed',     
        default: false
    }
]

export const dBSearchNameQuestion = [
    {
        type: 'input',
        message: "Enter user's name you want to find in DB: ",
        name: 'name',
    }
]