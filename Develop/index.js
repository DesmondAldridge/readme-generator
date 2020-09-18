const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");


// Questions
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Please input a brief description of your project:"
      },
      {
        type: "input",
        name: "installation",
        message: "Please input your project's installation instructions:"
      },
      {
        type: "input",
        name: "usage",
        message: "Please input your project's usage information:"
      },
      {
        type: "input",
        name: "contribution",
        message: "Please input your project's contribution guidelines:"
      },
      {
        type: "input",
        name: "test",
        message: "Please input your project's test instructions:"
      },
      {
        type: "input",
        name: "license",
        message: "Please choose a license for your project:",
        choices: ["Academic Free License v3.0", "Apache 2.0", "BSD 3", "Creative Commons", "wtfpl", "GPL", "MIT", "None"]
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      },
    ]);
  }

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
