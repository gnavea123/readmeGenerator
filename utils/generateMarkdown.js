// function to generate markdown for README
function generateMarkdown(answers, userInfo) {
  // return `# ${answers.title}`;
  //
  //
  // console.log("value of answers title");
  // console.log(answers.title);

  //
  // Generate Table of Contents based on answers
  let draftToC = `
  
  
  
  ## Table of Contents`;

  if (answers.installation !== "") {
    draftToC += `
 * [Installation](#installation)`;
  }

  if (answers.usage !== "") {
    draftToC += `
 * [Usage](#usage)`;
  }

  if (answers.contributing !== "") {
    draftToC += `
 * [Contributing](#contributing)`;
  }

  if (answers.tests !== "") {
    draftToC += `
 * [Tests](#tests)`;
  }

  // Generate markdown for README
  //
  let draftMarkdown = `# ${answers.fileName}

 
 ## Description 
  
 ${answers.description} `;

  // Add Table of Contents to markdown
  draftMarkdown += draftToC;

  // Add License section
  draftMarkdown += `
 * [License](#license)`;

  // Installation section
  if (answers.installation !== "") {
    draftMarkdown += `
 
 ## Installation
 
 *Steps required to install project:*
 
 ${answers.installation}`;
  }

  // Optional Usage section
  if (answers.usage !== "") {
    draftMarkdown += `
 
 ## Usage 
 
 *Instructions and examples for use:*
 
 ${answers.usage}`;
  }

  // License that will be used
  draftMarkdown += `
 
   ## License
   
   ${answers.license}
   `;
  // Contributing section
  if (answers.contributing !== "") {
    draftMarkdown += `
 
 ## Contributing
 
 *If you would like to contribute please follow these steps.*
 
 ${answers.contributing}`;
  }

  // Optional Tests section
  if (answers.tests !== "") {
    draftMarkdown += `
 
 ## Tests
 
 *Tests for application and how to run them:*
 
 ${answers.tests}`;
  }

  // Questions and contact information
  let draftDev = `
 ---
 
 ## Questions?
 
 For any questions, please contact me with the information below:

${answers.questions}
 `;

  // If GitHub email is not null, add to Developer section
  if (userInfo !== null) {
    draftDev += `

 Email: ${userInfo}

 `;
  }

  // Add developer section to markdown
  draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;
}

module.exports = generateMarkdown;
