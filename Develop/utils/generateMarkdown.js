// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  // https://img.shields.io/static/v1.svg?label=License&message=APACHE&color=Green
  // https://img.shields.io/static/v1.svg?label=License&message=MIT&color=Orange
  // https://img.shields.io/static/v1.svg?label=License&message=GPL&color=Blue
  // https://img.shields.io/static/v1.svg?label=License&message=BSD&color=Red
  // https://img.shields.io/static/v1.svg?label=License&message=NONE&color=Black
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description
${data.projectDescription}


## Table of Contents

-Installation
-Usage
-Screenshot
-Languages
-License
-Credits
-Tests
-Questions

## Installation
${data.confirmInstallation}


## Usage
${data.projectUsage}


## Screenshot
${data.projectScreenshot}


## Langauges
${data.projectLangauges}


## License
${data.projectLicense}


## Credits
${data.confirmContributing}


## Tests
${data.confirmTests}


## Questions

- Created By: ${data.userName}
- GitHub Account ${data.userGitHub}
- Email Address ${data.userEmail}

`;
}

module.exports = generateMarkdown;
