// TODO: Include packages needed for this application

// This is the npm install inquirer Code
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
//Defining the Questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test your project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license does your project have?',
    },
];

//Prompt the User
inquirer.prompt(questions).then((answers) => {

    //Generating the README content
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
${answers.license}
`;

    //This should write the file, or throw an error if something goes wrong
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
            console.error('Error Writing README file:', err);
            return;
        }
        console.log('README.md has been generated!');
    });
});





// TODO: Create a function to write README file
// This was the original code

//inquirer
//.prompt([
/* Pass your questions in here */
//])
//.then((answers) => {
// Use user feedback for... whatever!!
//})
//.catch((error) => {
//if (error.isTtyError) {
// Prompt couldn't be rendered in the current environment
//} else {
// Something else went wrong
//}
//});
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();