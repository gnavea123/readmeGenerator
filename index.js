//
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your name for the license:\n",
    },
    {
      type: "input",
      name: "year",
      message: "Please enter current year for license:\n",
    },
    {
      type: "input",
      name: "fileName",
      message: "Please enter the fileName of the Readme File:\n",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email for Contributor contact:\n",
    },
    {
      type: "input",
      name: "github_user",
      message: "Please enter your github_user to highlight Repository:\n",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter the description of the project:\n",
    },
    {
      type: "input",
      name: "installation",
      message: "Please describe installation process:\n",
    },
    {
      type: "input",
      name: "usage",
      message: "Please describeins usage of the application:\n",
    },
    {
      type: "list",
      name: "license",
      message: "Please describe License type selected:\n",
      choices: ["MIT", "GPL-3-0", "Apache-2-0"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Please describe how you will accept Contributions:\n",
    },
    {
      type: "input",
      name: "tests",
      message: "Please describe the tests required from Contributions:\n",
    },
    {
      type: "input",
      name: "questions",
      message: "Please describe How Contributors can raise any questions :\n",
    },
  ]);
};

// Bonus using async/await and try/catch
const init = async () => {
  console.log("initialising...");
  try {
    const answers = await questions();
    console.log("Generating your README next...");
    const userInfo = answers.email;
    console.log("value of userInfo=");
    console.log(userInfo);
    const markdown = generateMarkdown(answers, userInfo);
    console.log("value of markdown");
    //console.log(markdown);

    await writeFileAsync(answers.fileName, markdown);

    console.log("Successfully saved to file");
  } catch (err) {
    console.log(err);
  }
};

init();
