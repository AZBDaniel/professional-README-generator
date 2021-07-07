// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const installation = [{
    type: 'input',
    name: 'installation',
    message: 'How do users install your application?',
    default: 'npm i'
}]

const contributor = [{
    type: 'input',
    name: 'contributors',
    message: 'Who are the contributors?'
}]

const test = [{
    type: 'input',
    name: 'test',
    message: 'How to run test?',
    default:'npm run test'
}]

// TODO: Create an array of questions for user input
const promptInfo = () => {
    return inquirer.prompt([
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
        }, {
            type: 'input',
            name: 'projectDescription',
            message: 'Enter a description about your project? (Required)',
            validate: projectDescriptionInput => {
                if (projectDescriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a breif description about your projet!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'userName',
            message: 'Enter your First Name (Required) Last Name (Optional)',
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('Please enter at least your first "Name"!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'userGitHubName',
            message: 'Enter your GitHub Username! (Required)',
            validate: userGitHubNameInput => {
                if (userGitHubNameInput) {
                    return true;
                } else {
                    console.log('Please enter your "Git Hub Username"');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'userEmail',
            message: 'Enter a Email Address you will except additional questions at! (Required)',
            validate: userEmailInput => {
                if (userEmailInput) {
                    return true;
                } else {
                    console.log('Please enter email address, so users can contact you with!');
                    return false;
                }
            }
        }, {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Does your project require any additonal "Installation" instructions?',
            default: true
        }, {
            type: 'input',
            name: 'projectUsage',
            message: 'Enter how and why to use your project? (Required)',
            validate: projectUsageInput => {
                if (projectUsageInput) {
                    return true;
                } else {
                    console.log('Please enter how to use your project!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'projectScreenshot',
            message: 'Enter a relative file path to a "Screen Shot" of your project? (Required)',
            validate: projectScreenshotInput => {
                if (projectScreenshotInput) {
                    return true;
                } else {
                    console.log('Please enter a breif description about your projet!');
                    return false;
                }
            }
        }, {
            type: 'checkbox',
            name: 'projectLanguages',
            message: 'What coding "Langauges" did you use for this project? (Check all that apply)',
            choices: [
                "HTML",
                "CSS",
                "Javascript",
                "jQuery",
                "Bootstrap",
                "Nodejs",
                "ES6"
            ],
        }, {
            type: 'checkbox',
            name: 'projectLicense',
            message: 'What "Licenses" need to be included in this project? (Check all that apply)',
            choices: [
                "MIT",
                "APACHE",
                "GPL",
                "BSD",
            ],
        }, {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Do you need to list any "Contributing" individual? If yes please enter Name,GitHub UserName, Link to GitHub.',
            default: true

        }, {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Does your project include any Tests? If yes enter description on how to test project.',
            default: true
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('New README has been Generated!')
    })
}

// TODO: Create a function to initialize app
function init() {
    let userInfo
    promptInfo()
        .then(async (userRespawns) => {
            userInfo = userRespawns

            if (userInfo.confirmInstallation) {
                const answer = await inquirer.prompt(installation);
                userInfo.installation = answer.installation;
            }
        
        }).then(async () => {
            if (userInfo.confirmContributing) {
                const answer = await inquirer.prompt(contributor);
                userInfo.contributors = answer.contributors
            }

        }).then(async () => {
            if (userInfo.confirmTests) {
                const answer = await inquirer.prompt(test);
                userInfo.test = answer.test
            }
        }).then(()=>{
            console.log(userInfo);
            writeToFile('newReadMe.md',generateMarkdown(userInfo))
        })

        
}


// Function call to initialize app
init();
