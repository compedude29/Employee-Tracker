-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the "employee_db" database --
CREATE DATABASE employee_db;

-- Make it so all of the following code will affect employee_db --
USE employee_db;

-- Creates the table "department" within employee_db --
CREATE TABLE department (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Set the primary key of the table to id --
  PRIMARY KEY(id)
);

-- Creates the table "role" within employee_db --
CREATE TABLE role (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  -- Create a string column called "title" which cannot be null --
  title VARCHAR(30) NOT NULL,
  -- Make an decimal column called "salary" --
  salary DECIMAL(8, 2),
  -- Make an integer column called "department_id" --
  department_id INTEGER(10),
  -- Set the primary key of the table to id --
  PRIMARY KEY(id)
);

CREATE TABLE employee (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  -- Create a string column called "first_name" which cannot be null --
  first_name VARCHAR(30) NOT NULL,
  -- Create a string column called "last_name" which cannot be null --
  last_name VARCHAR(30) NOT NULL,
  -- Make an integer column called "role_id" --
  role_id INTEGER(10),
  -- Make an integer column called "manager_id" --
  manager_id INTEGER(10),
  -- Set the primary key of the table to id --
  PRIMARY KEY(id)
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;