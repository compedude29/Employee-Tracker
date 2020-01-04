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
    
}

function addRole(){

}

function addRole(){

}

function viewDepartments(){

}

function viewRoles(){

}

function viewEmployees(){

}

function updateRole(){
    
}





  

 

