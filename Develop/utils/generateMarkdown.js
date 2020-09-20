// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## DESCRIPTION
  ${data.description}

  ## TABLE OF CONTENTS
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  ## INSTALLATION
  ${data.installation}

  ## USAGE
  ${data.usage}

  ## LICENSE
  ${data.license}

  ## TEST
  ${data.test}

  ## CONTRIBUTION
  ${data.contribution}

  ## QUESTIONS



`;
}

module.exports = generateMarkdown;
