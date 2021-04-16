const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
//prompting user for information to be written to the new file.
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title'

    },
    {
        type: 'input',
        message: 'Please enter a description of your project:',
        name: 'description'

    },
    {
        type: 'input',
        message: 'What installations were required for this project?',
        name: 'installation'

    },
    {
        type: 'input',
        message: 'Describe the usage of this project:',
        name: 'usage'

    },
    {
        type: 'list',
        message: 'Please choose a license:',
        name: 'license',
        choices: [
            'MIT license', 
            'Apache 2.0 License',
            'Mozilla Public License 2.0'
        ]
        //does this require a different input type with predetermined badges and licenses? maybe a list type or something?
    },
    {
        type: 'input',
        message: 'Please enter any contribution guidelines:',
        name: 'contributing'

    },
    {
        type: 'input',
        message: 'Please enter any test instructions:',
        name: 'tests'

    },
    {
        type: 'input',
        message: 'For any additional questions you may contact me at this email:',
        name: 'questions'

    }
]).then((response) => {
    console.log(response);
    //declare variable of markdown here with template literals for whole markdown
    let readMe = `## ${response.title}
## Table of contents
1. [Description](#desc)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)
6. [Tests](#tests)
7. [Questions](#questions)
<!-- found some documentation on this table of contents from an atlassian article posted in discord -->
<a name="description"></a>
## Description
${response.description}

<a name="installation"></a>
## Installation
${response.installation}
<a name="usage"></a>
## Usage
${response.usage}
<a name="contributing"></a>
## Contributing
${response.contributing}
<a name="license"></a>
## License
${renderBadge(response.license)}
<a name="tests"></a> 
## Tests
${response.tests}
<a name="questions"></a>
## Questions
For any additional information or any questions, please feel free to contact me at: ${response.questions}`


    fs.writeFile("readMe.MD", readMe, function (err) {
        if (err) {
            throw err;
        }
        console.log('ok theres your readme leave me alone');
    });
})

function renderBadge(licenseName) {
    switch (licenseName) {
        case "MIT License":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            break;

        case "Apache 2.0 License":
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) `;
            break;

        case "Mozilla Public License 2.0":
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
            break;

        default:
            return ``;
            break;
    }
}