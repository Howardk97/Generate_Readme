// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');
// const renderLicenseBadge = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your projects name?',
  },

  {
    type: 'input',
    name: 'motivation',
    message: 'What motivated you to create this project?',
  },

  {
    type: 'input',
    name: 'purpose',
    message: 'What was your purpose of making this project?',
  },

  {
    type: 'input',
    name: 'problem',
    message: 'What problem does your project solve?',
  },

  {
    type: 'input',
    name: 'learn',
    message: 'What did you learn?',
  },

  {
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project?',
  },

  {
    type: 'input',
    name: 'usage',
    message: 'What do you need to do to use your project?',
  },

  {
    type: 'input',
    name: 'credit',
    message: 'Who worked on this project?',
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
    message: 'Describe how a developer can test your project.',
  },
];

const promptUser = () => {
    return inquirer.prompt(questions);
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
function writeToFile({title, motivation, purpose, problem, learn, install, usage, credit, license, contribute, test }) {
    return `# ${title}

## Description
  *Motivation
  ${motivation}

  *Purpose
  ${purpose}

  *Problem that Project Solves
  ${problem}

  *What Developer Learned
  ${learn}
    
## Table of Contents
- [Installation](#install)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribute)
- [Test](#test)
    
## Installation
${install}
    
## Usage
${usage}

## Credits
${credit}

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
