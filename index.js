const fs = require('fs');
const inquirer = require('fs');
//prompting user for information to be written to the new file.
inquirer.prompt([ 
    {
        type: 'input', 
        message: 'What is the title of this project?',
        name: 'title'

    },
    {
        type: 'input', 
        message: 'Please enter a description of your project.',
        name: 'description'

    },
    {
        type: 'input', 
        message: 'What installations were required for this project?',
        name: 'installation'

    },
    {
        type: 'input', 
        message: '',
        name: 'usage'

    },
    {
        type: 'input', 
        message: '',
        name: 'license'

    },
    {
        type: 'input', 
        message: '',
        name: 'contributing'

    },
    {
        type: 'input', 
        message: '',
        name: 'tests'

    },
    {
        type: 'input', 
        message: '',
        name: 'questions'

    },










])