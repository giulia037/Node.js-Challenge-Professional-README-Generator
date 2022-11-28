// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const ReadmeOutput = (data) => `## Node.js-Challenge-Professional-README-Generator

For this assignment we had to use Node.js to run the readme file. As the developer you want to see the readme file pop up when you run the code node index.js. How did I get this to run the way I wanted? I simply started by taking what I knew from class. I added the basic functions by using what I wrote in my mini project.The most important part was making sure the readme file would show. To allow my computer to generate the readme I added this code- const ReadmeOutput = (data) =>. That allows me to access my data from my readme file and then push that data after the node code has run. However to get the readme file there are a few questions the user would have to answer before proceeding. 

## Screenshot

![image](https://user-images.githubusercontent.com/114687261/204166846-f390fdde-6a4a-4722-ae7b-a3146be5e316.png)`
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
.then((data) => {
    const content = ReadmeOutput(data);
       console.log(data);
       fs.writeFile("readme.md", content,(err) => {
        console.log(err)
       });
    })

