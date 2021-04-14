const inquirer = require('inquirer');

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
        choices: ['MIT', 'ISC', 'Apache License 2.0', 'GNU']
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
        name: 'link',
        message: 'Please enter your email address:'
      }
    ]);
  };
  
  promptUser().then(answers => console.log(answers));
  