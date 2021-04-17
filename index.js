// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide some information about how to use your project:'
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Provide name of author or other creators:'
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What license does this project have? (Check one)',
        choices: ['MIT', 'ISC', 'Apache', 'GNU']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Please provide a link to the deployed project:'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub user name:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
      }
    
    ])
  }
  
  promptUser().then(answers => generateMarkdown(answers));


  // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(),filename),data)
// };

// // TODO: Create a function to initialize app
// function init() {

//     inquirer
//     .prompt(questions)
//     .then(responses => {
//         writeToFile('newReadMe.md', generateMarkdown(answers));
//     });
// };

// // Function call to initialize app
// init();