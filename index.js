const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
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
        type: 'input',
        name: 'license',
        message: 'What type of license does this project have?'
      },
      {
        type: 'input',
        name: 'link',
        message: 'Provide link to deployed project:'
      }
    ]);
  };
  
  promptUser().then(answers => console.log(answers));
  