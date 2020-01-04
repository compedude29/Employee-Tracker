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
          "Update role",
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

    case "View employees":
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
        var query = "INSERT INTO department SET ?";
        connection.query(query, {name: answer.department}, function(err, res){
            if(err) throw err;
            console.log(res.affectedRows + " department inserted.\n");
            tasks();
        });
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
        var query = "INSERT INTO role SET ?";
        connection.query(query, {title: answer.role}, function(err, res){
            if(err) throw err;
            console.log(res.affectedRows + " role inserted.\n");
            tasks();
        });  
    });

    inquirer
    .prompt({
        name: "salary",
        type: "input",
        message: "Enter salary for role."
    })
    .then(function(answer){
        var query = "UPDATE role SET ? WHERE ?";
        connection.query(query, [{salary: answer.salary}, {title: answer.role}], function(err, res){
            if(err) throw err;
            console.log(res.affectedRows + " salary inserted.\n");
            tasks();
        });
    });
}

function addEmployee(){
    inquirer
    .prompt({
        name: "first",
        type: "input",
        message: "Enter first name to be added."
    })
    .then(function(answer){
        var query = "INSERT INTO employee SET ?";
        connection.query(query, {first_name: answer.first}, function(err, res){
            if(err) throw err;
            console.log(res.affectedRows + " first name inserted.\n");
        });
    });

    inquirer
    .prompt({
        name: "last",
        type: "input",
        message: "Enter last name to be added."
    })
    .then(function(answer){
        var query = "UPDATE employee SET ? WHERE ?";
        connection.query(query, [{last_name: answer.last}, {first_name: answer.first}], function(err, res){
            if(err) throw err;
            console.log(res.affectedRows + " last name inserted.\n");
            tasks();
        });
    });
}

function viewDepartments(){
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res){
        if(err) throw err;
        console.log(res);
        tasks();
    });
}

function viewRoles(){
    var query = "SELECT * FROM role";
    connection.query(query, function(err, res){
        if(err) throw err;
        console.log(res);
        tasks();
    });
}

function viewEmployees(){
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res){
        if(err) throw err;
        console.log(res);
        tasks();
    });
}

function updateRole(){
    inquirer
    .prompt({
        name: "update",
        type: "input",
        message: "What employee would you like to update their role?"
    })
    .then(function(answer){
        var query = "SELECT employee.first_name WHERE (employee.first_name = ?), role.title ";
        query += "FROM employee INNER JOIN role ON (employee.role_id = role.id)";
        connection.query(query, answer.update, function(err, res){
            if(err) throw err;
            inquirer
            .prompt({
                name: "new",
                type: "input",
                message: "Enter employee's new role id."
            })
            .then(function(answer){
                var query = "UPDATE employee SET ? WHERE ?";
                connection.query(query, [{role_id: answer.new}, {first_name: answer.update}], function(err, res){
                    if(err) throw err;
                    console.log(res.affectedRows + " role id inserted.\n");
                });
            });
            tasks();
        });
    });
}





  

 

