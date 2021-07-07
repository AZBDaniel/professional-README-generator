// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    if (data == "MIT") {
      return `![MIT](https://img.shields.io/static/v1.svg?label=License&message=MIT&color=Orange)`;
    } else if (data == "APACHE") {
      return `![APACHE](https://img.shields.io/static/v1.svg?label=License&message=APACHE&color=Green)`;
    } else if (data == "GPL") {
      return `![GPL](https://img.shields.io/static/v1.svg?label=License&message=GPL&color=Blue)`;
    } else if (data == "BSD") {
      return `![BSD](https://img.shields.io/static/v1.svg?label=License&message=BSD&color=Red)`;
    } else {
      return " ";
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.projectTitle}

${renderLicenseBadge(data.projectLicense)}

## Description
${data.projectDescription}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Languages](#languages)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}


## Usage
${data.projectUsage}


## Screenshot
${data.projectScreenshot}


## Langauges
${data.projectLanguages}


## License
${data.projectLicense}


## Credits
${data.contributors}


## Tests
${data.test}


## Questions

- Created By: ${data.userName}
- GitHub Account ${data.userGitHubName}
- Email Address ${data.userEmail}

`;
}

module.exports = generateMarkdown;
