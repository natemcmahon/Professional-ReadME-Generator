// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your Project Title?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Write a brief description of your project:',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'How is the application used?',
      name: 'Usage',
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'ContributionGuidelines',
    },
    {
      type: 'input',
      message: 'How is the application tested?',
      name: 'Testing',
    },
    {
      type: 'input',
      message: 'Which License is the application covered under?',
      name: 'License',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'Email',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

const generateReadME = (data) => {
    return `
# ${data.Title}

## Description
    
${data.Description}
    
## Table of Contents (Optional)
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
${data.Installation}
    
## Usage
    
${data.Usage}
    
'Add a screenshot here!'
        
    
## Credits
    
List your collaborators, if any, with links to their GitHub profiles.
    
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
If you followed tutorials, include links to those here as well.
    
## License
    
${data.License}    
 
## Badges
    
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
## Features
    
If your project has a lot of features, list them here.
    
## How to Contribute
    
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
## Tests
    
${data.Testing}`
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((data) => {
    var generatedPage = generateReadME(data);
    writeToFile('README.md', generatedPage);
  });
}

// Function call to initialize app
init();
