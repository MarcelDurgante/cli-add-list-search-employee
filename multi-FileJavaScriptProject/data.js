// Loading and writing data to the filesystem ----------------------------
import fs from 'node:fs/promises';

export const loadData = async () => {
    console.log(`${chalk.magenta.bold('Loading employees... ')}`);
    try {
        const fileData = await fs.readFile('./data.json');
       return JSON.parse(fileData);
    } catch (err) {
        console.error("Cannot load in employees");
        throw err;
    }
}

export const writeData = async (employees) => {
    console.log(`${chalk.blue.bold('Writing employees...')}`);
    try {
        await fs.writeFile('./data.json', JSON.stringify(employees, null, 2));
    } catch (err) {
        console.error("Cannot write employees data.");
        throw err;
    }
}