// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const readmeInfo = () => {
    return inquirer.prompt({
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your Project Title? (Required)',
            validate: projectTitleInput => {
              if (projectTitleInput) {
                return true;
              } else {
                console.log('Please enter your Project Title!');
                return false;
              }
            }
          },{
            type: 'input',
            name: 'projectDescription',
            message: 'Enter a description about your project? (Required)',
            validate: projectTitleInput => {
              if (projectTitleInput) {
                return true;
              } else {
                console.log('Please enter a breif description about your projet!');
                return false;
              }
            }
          },{
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Does your project require any additonal "Installation" instructions?',
            default: true
          }
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
