// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs=require('fs')
// TODO: Create an array of questions for user input
inquirer.prompt([
    { type:'input',
     name:'title',
     message:'What is the title of your application?',
     }, 
     { type:'input',
     name:'description',
     message:"Provide a short description explaining the what, why, and how of your project.",
     }, 
     { type:'input',
     name:'tableOfContents',
     message:'Add a table of contents to make it easy for users to find what they need.',
     },
     {type:'input',
     name:'installation',
     message:'What are the steps required to install your project?',
    },
    {type:'input',
     name:'usage',
     message:'Provide instructions and examples for use of application.',
    },
    {type:'list',
     name:'license',
     message:'Select license if used, if not used selected last option.',
     choices:['','Email','Text'],
    },
    {type:'input',
     name:'contributions',
     message:'If you would like other developers to contribute to this project, you can include guidelines for how to do so.',
    },
    {type:'input',
     name:'test',
     message:'If you have written tests for your application. Then provide examples on how to run them here.',
    },
    {type:'input',
     name:'gitHubQuestions',
     message:'Insert github username and link to github profile.',
    },
    {type:'input',
     name:'emailQuestions',
     message:'Insert preffered email address for user to have access to contact you.',
    }
 ]).then(result=>{
    const readme =`# ${title} ${badge}


    ## Description
    ${description}
    
    ## Table of Contents
    ${tableOfContents}
    ## Installation
    ${installation}
    ## Usage
    ${usage}

    ## License 
    ${license}

    ## Contributing
    ${constributions}

    ## Tests
    ${test}

    ## Questions
    GitHub Username/Link to profile:  ![GitHub Username](${gitHubQuestions})
    Contact Info:  ![Email](${emailQuestion})`
//     fs.writeFile('index.md',readme,error =>{
//         if(error){
//             console.log(error)
//          }else{
//             console.log('responses saved successfully')
//          }
//     })

//  })
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
