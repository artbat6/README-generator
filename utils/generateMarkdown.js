// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('license', license);
  switch(license){
  case "MIT": 
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  case "ISC":
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  case "GNU":
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  case "Apache":
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  default: ""
};
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  const badge = renderLicenseBadge(answers.license[0]);

  return `# ${answers.title}
    ## Description
    ### ${answers.description}
    ## Installation
    ### ${answers.installation}
    ## Usage
    ### ${answers.usage}
    ## Credits
    ### ${answers.credits}
    ## License
    ### ${answers.license}
    ## Link
    ### ${answers.link}
    ## 
    ### ${answers.github}
    ## 
    ### ${answers.email}
  `;
}

module.exports = generateMarkdown;
