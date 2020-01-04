var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "MyNewPass",
  database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    tasks();
  });

function tasks() {
  inquirer
  .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
          "Add department",
          "Add role",
          "Add employee",
          "View departments",
          "View roles",
          "View employees",
          "Update roles",
          "Exit"
      ]   
  })
  .then(function(answer){
    switch (answer.action){
    case "Add department":
        addDepartment();
        break;
    
    case "Add role":
        addRole();
        break;

    case "Add employee":
        addEmployee();
        break;

    case "View departments":
        viewDepartments();
        break;

    case "View roles":
        viewRoles();
        break;

    case "View Employees":
        viewEmployees();
        break;

    case "Update role":
        updateRole();
        break;
    
    case "Exit":
        connection.end();
        break;
    }
  });
}

function addDepartment(){
    inquirer
    .prompt({
        name: "department",
        type: "input",
        message: "Enter department to be added."
    })
    .then(function(answer){
        console.log("A");
    });
}

function addRole(){
    inquirer
    .prompt({
        name: "role",
        type: "input",
        message: "Enter role to be added."
    })
    .then(function(answer){
        console.log("B");
    });
}

function addEmployee(){
    inquirer
    .prompt({
        name: "employee",
        type: "input",
        message: "Enter employee to be added."
    })
    .then(function(answer){
        console.log("C");
    });
}

function viewDepartments(){
    console.log("D");

}

function viewRoles(){
    console.log("E");
}

function viewEmployees(){
    console.log("F");
}

function updateRole(){
    inquirer
    .prompt({
        name: "update",
        type: "input",
        message: "What employee would you like to update their role?"
    })
    .then(function(answer){
        console.log("G");
    });
}





  

 

