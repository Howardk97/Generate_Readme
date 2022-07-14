// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseBadge = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your projects name?',
  },

  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project.',
  },

  {
    type: 'input',
    name: 'install',
    message: 'What command should be run to install dependencies?',
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Why is your project useful?',
  },

  {
    type: 'checkbox',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'GPL', 'Apache'],
  },

  {
    type: 'input',
    name: 'contribute',
    message: 'Describe how others can contribute to your project.',
  },

  {
    type: 'input',
    name: 'userName',
    message: 'What is your GitHub user name?',
  },

  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  
  {
    type: 'input',
    name: 'test',
    message: 'Describe how a developer can test your project',
  },
];

const promptUser = () => {
    return inquirer.prompt(questions)
    .then((answers) => fs.writeFileSync('README.md', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to README file'))
    .catch((err) => console.error(err));;
  }

// console.log(questions);






// // TODO: Create a function to initialize app
// function init() {
//   promptUser()
//   // Use writeFileSync method to use promises instead of a callback function
//   .then((answers) => fs.writeFileSync('README.md', writeToFile(answers)))
//   .then(() => console.log('Successfully wrote to README file'))
//   .catch((err) => console.error(err));
// }

// // Function call to initialize app
// init();




// promptUser();
// import { renderLicenseBadge } from './utils/generateMarkdown.js';
// let license = renderLicenseBadge;
// console.log(license);
// TODO: Create a function to write README file
function writeToFile({title, description, license, install, test}) {
    return `# ${title}
## Description
${description}
    
## Table of Contents
  - Installation
  - Usage
  - License
  - Contributing
  - Test
  - Questions
    
## Installation
${install}
    
## Usage
${usage}

## License
${license}

## Contributing
${contribute}

## Test
${test}

## Questions`;
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to README file'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
