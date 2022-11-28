// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'pTitle',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'pDescription',
      message: 'Please enter your project description',
    },
    {
      type: 'input',
      name: 'pInstallation',
      message: 'Please enter installation instructions',
    },
    {
      type: 'input',
      name: 'pUsageInfo',
      message: 'Please enter the usage information',
    },
    {
      type: 'input',
      name: 'pContrib',
      message: 'Please enter the contribution instructions',
    },
    {
      type: 'input',
      name: 'pTests',
      message: 'Please enter the projects testing guidelines',
    },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
