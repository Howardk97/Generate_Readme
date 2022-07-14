// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let source;
// console.log(${license})
// let license = 'MIT';
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    source = 'APM';
    // renderLicenseLink(source);
    return source;
  } else if(license === 'GPL') {
    source = 'eclipse-marketplace';
    // renderLicenseLink(source);
    return source;
  } else if(license === 'Apache') {
    source = 'AUR';
    // renderLicenseLink(source);
    return source;
  }

  // renderLicenseLink(source);
}

console.log(renderLicenseBadge('MIT'));

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let link;
function renderLicenseLink(source) {
  if (source === 'APM') {
    link = `https://img.shields.io/apm/l/test`;
    return link;
  } else if (source === 'eclipse-marketplace') {
    link = `https://img.shields.io/eclipse-marketplace/l/test`;
    return link;
  } else if (source === 'AUR') {
    link = 'https://img.shields.io/aur/license/test';
    return link;
  } else if (!source) {
    link = ' ';
    return link;
  }
  renderLicenseBadge(link)
  // console.log(link);
}

// console.log(renderLicenseLink('APM'));

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(link) {
  const writeLicense = `## Link: [license link]('${link}')`
  console.log(link);
  generateMarkdown(writeLicense);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${link}

`;
}

// module.exports = generateMarkdown;

module.exports = renderLicenseBadge;