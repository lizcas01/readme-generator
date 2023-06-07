// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What would you like to name your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please type in a small description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide any instructions for installing your project.",
    }, 
    {
        type: "input",
        name: "usage",
        message: "Provide any instructions for using your project."
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for this project.",
        choices: [
            'Apache 2.0 License',
            'Boost Software License 1.0',
            'BSD 3-Clause License',
            'BSD 2-Clause License',
            'Eclipse Public License 1.0',
            'GNU GPL v1.3',
            'GNU GPL v2',
            'The MIT License',
            'Mozilla Public License 2.0',
            'None',
        ]
    },
    {
        type: "input",
        name: "contribution",
        message: "How can other developers contribute to your projects?",
    },
    {
        type: "input",
        name: "tests",
        message: "Are there any instructions for testing your projects?",
    },

    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email.",
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
 
// Function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Generating README file...");
        writeToFile("./README.md", generateMarkdown({...responses}))
    });
}

// Function call to initialize app
init();