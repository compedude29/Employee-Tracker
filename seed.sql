USE employee_db;

INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000.00, 1), ("Sales Person", 80000.00, 2), ("Lead Engineering", 150000.00, 3), ("Software Engineer", 120000.00, 4), 
       ("Accountant", 125000.00, 5), ("Legal Team Lead", 250000.00, 6), ("Lawyer", 190000.00, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe");