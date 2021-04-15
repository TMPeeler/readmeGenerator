const fs = require('fs');
const inquirer = require('inquirer');
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
        type: 'input', 
        message: 'Please choose a license:',
        name: 'license'
//does this require a different input type with predetermined badges and licenses?
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
${response.license}

<a name="tests"></a>
## Tests
${response.tests}

<a name="questions"></a>
## Questions
For any additional information or any questions, please feel free to contact me at:${response.questions}`


    fs.writeFile("readMe.MD", readMe, function (err) {
        if (err) {
            throw err;
        }
        console.log('ok theres your readme leave me alone');
    });
})