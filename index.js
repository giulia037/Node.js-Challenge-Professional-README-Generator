// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const readmeOutput = ({ Title, Description, pInstallation, pUsageInfo, pContrib, pTests }) => `## Node.js-Challenge-Professional-README-Generator

For this assignment we had to use Node.js to run the readme file. As the developer you want to see the readme file pop up when you run the code node index.js. How did I get this to run the way I wanted? I simply started by taking what I knew from class. I added the basic functions by using what I wrote in my mini project.The most important part was making sure the readme file would show. To allow my computer to generate the readme I added this code- const ReadmeOutput = (data) =>. That allows me to access my data from my readme file and then push that data after the node code has run. However to get the readme file there are a few questions the user would have to answer before proceeding. 

## Screenshot

![image](https://user-images.githubusercontent.com/114687261/204166846-f390fdde-6a4a-4722-ae7b-a3146be5e316.png)`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter your project description',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions',
    },
    {
      type: 'input',
      name: 'usageInfo',
      message: 'Please enter the usage information',
    },
    {
      type: 'input',
      name: 'contrib',
      message: 'Please enter the contribution instructions',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter the projects testing guidelines',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please enter the license',
      choices:["Apache 2.0 License","BSD 3-Clause License", "BSD 2-Clause License", "Boost Software License 1.0"]
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'Please enter Github profile',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address',
    },
  ])

// TODO: Create a function to write README file
.then((answers) => {
  console.log(answers)
  const readmePageContent = generateMarkdown(answers);

  fs.writeFile('readmeOutput.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created readme!')
  );
});
