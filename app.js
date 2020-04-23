// im
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

// inquirer
const fs = require("fs");
const inquirer = require("inquirer");

const teamArray = [];

// need to get the answer from employee type
// need the index of the first question to compare it to the answer of
// the answer from this quesiton will show the enginner, manager or intern promot\
// name
//id
//email

// regex -- regular expression



function createManager() {
  if (teamArray.length === 0) {
    console.log("Please start building your team ?");
  }

  inquirer
    .prompt([
      {
        name: "managerName",

        message: "what is the your Managers name ?",
      },

      {
        name: "managerId",

        message: "what is your managers ID ?",
      },
      {
        name: "managerEmail",

        message: "what is your email ?",
      },

      {
        name: "managerOfficeNumber",

        message: "what is your managers office number ?",
      },
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.managerName,
        answer.managerEmail,
        answer.managerId,
        answer.managerOfficeNumber
      );
      teamArray.push(manager);

      addTeamMember();
    });
}

function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list", 

        name: "addMember",

        message: "what team member would you like to add ?",

        choices: [
          "intern",

          "engineer",

          "manager",

          "I dont want to add anymore team members",
        ],

      },

    ])
    .then(({addMember}) => {
     // console.log(answer);
      if (addMember === "engineer") {
        createEngineer();
      } else if (addMember === "intern") {
        createIntern();
      } else if (addMember === "manager") {
        createManager();
      } else {
        console.log("the html has been generated");
        generateHtml();
      }
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        name: "engineerName",

        message: "what is the engineers name ?",
      },

      {
        name: "engineerID",

        message: "what is the engineers ID ?",
      },

      {
        name: "engineerEmail",

        message: "what is the engineers email ?",
      },

      {
        name: "engineerGithub",

        message: "what is the engineers github username ?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerEmail,
        answers.engineerID,
        answers.engineerGithub
      );
      teamArray.push(engineer);
      addTeamMember();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        name: "internName",

        message: "what is the interns name ?",
      },

      {
        name: "internID",

        message: "what is the interns ID ?",
      },

      {
        name: "internEmail",

        message: "what is the interns email ?",
      },

      {
        name: "internSchool",

        message: "what school did the intern go to ?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internEmail,
        answers.internID,
        answers.internSchool
      );
      teamArray.push(intern);
      addTeamMember();
    });
}

createManager(); 

