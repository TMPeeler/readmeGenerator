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


    fs.writeFile("readMe.MD", readMe, function (err) {
        if (err) {
            throw err;
        }
        console.log('ok theres your readme leave me alone');
    });
})