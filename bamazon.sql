DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (50) NOT NULL,
department_name VARCHAR (50) NOT NULL,
price INTEGER(10), 
stock_quantity INTEGER(10),
primary key (id)
);