// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
var picture;


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
        message: 'Would you like to assign credit to anybody or anything other than yourself?',
        name: 'Credits',
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
      type: 'list',
      message: 'Which License is the application covered under?',
      name: 'License',
      choices: ['GPL', 'Apache', 'Copyleft', 'Open-source license' ],
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'Email',
    },
    {
        type: 'input',
        message: 'What is your gitHub?',
        name: 'GitHub',
      },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

const generateReadME = (data) => {
    var license = data.License;
    switch (license) {
        case 'GPL': 
            picture = './licenseImages/GPL.png';
            break;
        case 'Apache':
            picture = './licenseImages/Apache.png';
            break;
        case 'Copyleft':
            picture = './licenseImages/Copyleft.png';
            break;
        case 'Open-source license':
            picture = './licenseImages/openSource.png';
            break;
    }
    
    return `
# ${data.Title}

## Description
    
${data.Description}
 <img src = "${picture}" width="100px" style="padding-left: 25px">
    
## Table of Contents (Optional)
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#Badges)
- [Features](#Features)
- [How to Contribute](#How to Contribute)
- [Tests](#Tests)
- [Questions](#Questions)

    
## Installation
    
${data.Installation}
    
## Usage
    
${data.Usage}
    
'Add a screenshot here!'
        
    
## Credits
    
${data.Credits}
    
## License
    
${data.License} is the license governing this document. Please refer to their documentation for reference regarding the use and redistribution of this application
 
## Badges
    
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/).

## Features
    
If your project has a lot of features, list them here.
    
## How to Contribute
    
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
## Tests
    
${data.Testing}

## Questions

If you have any questions, feel free to reach out to me at ${data.Email} or reference my GitHub:
[github.com/${data.GitHub}](github.com/${data.GitHub})`
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
