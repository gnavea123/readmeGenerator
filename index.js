// initial scrip file for the Project

// const fs = require("fs");
// const path = require("path");
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

// // array of questions for user
// const questions = [];

// // function to write README file
// function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();

const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter the Title of the Readme File",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter the description",
  },
  {
    type: "input",
    name: "tableContents",
    message: "Please describe the table of contents",
  },
];
// inquirer.prompt(questions).then((answers) => {
//   //console.log(answers);
//   fs.appendFile("log.txt", answers),err=>{
//     if (err {console })};
// });

inquirer.prompt(questions).then((data) => {
  //const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

  //fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
  fs.writeFile("log.txt", JSON.stringify(data, null, "\t"), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
});
