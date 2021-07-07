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
function renderLicenseLink(license) {
  if (license == "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license == "APACHE") {
    return `[Apache License](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "GPL") {
    return `[Gdeneral Public License](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == "BSD") {
    return `[BSD Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "MIT") {
    return `Copyright (c) 2021`;
  } else if (license == "Apache 2.0") {
    return `Apache License 
      Version 2.0 January 2004
      http;//www.apache.org/licenses/`
  } else if (license == "General Public License 3.0") {
    rerturn`GNU General Public License 3.0
      Version 3, 29 June 2007`
  } else if (license == "BSD 3-Clause License") {
    return `BSD 3-Clause License
      Copyright (c) 2021`
  } else {
    return " "
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.projectTitle}

${renderLicenseBadge(data.projectLicense)}

## Description
${data.projectDescription}


## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [Walkthrough](#walkthrough)
- [Languages](#langauges)
- [Tests](#tests)
- [License](#license)
- [Credits](#credits)
- [Questions](#questions)

## Usage
${data.projectUsage}

## Installation
${data.installation}

## Walkthrough or Screenshot
${data.projectScreenshot}

## Langauges
${data.projectLanguages}

## Tests
${data.test}

## License
${renderLicenseLink(data.projectLicense)}

${renderLicenseSection(data.projectLicense)}

## Credits
${data.contributors}

## Questions

- Created By: ${data.userName}
- GitHub Account ${data.userGitHubName}
- Email Address ${data.userEmail}
`;
}

module.exports = generateMarkdown;
