import * as fs from 'fs/promises';

const filePath = './db.txt'

export async function readFile() {
    try {
        const data = await fs.readFile(filePath, { encoding: "utf8" });
        console.log(JSON.parse(data));

    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
};

export async function addUserToFile(user) {
    try {
        const data = await fs.readFile(filePath, { encoding: "utf8" });
        const file = JSON.parse(data);
        file.push(user);
        await fs.writeFile(filePath, JSON.stringify(file));
        
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
};

export async function findUserInFile(userName) {
    try {
        const data = await fs.readFile(filePath, { encoding: "utf8" });
        const file = JSON.parse(data);
        const result = file.filter(({name}) => name.toLowerCase() === userName.toLowerCase());
        console.log(result);
        
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
};