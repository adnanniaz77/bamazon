DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INT NOT NULL,
stock_quantity INT NOT NULL,
product_sales INT NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) 
VALUES('headphone', 'pc accessories', 25, 10, 200);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) 
VALUES('keyboard', 'pc accessories', 35, 15, 150);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) 
VALUES('screw driver', 'hardware', 5, 20, 70);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) 
VALUES('wirecutter', 'hardware', 10, 10, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) 
VALUES('mouse', 'pc accessories', 15, 20, 95);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) 
VALUES('bluetooth Device', 'pc accessories', 25, 0, 0);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) 
VALUES('notebook', 'stationary', 10, 30, 85);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) 
VALUES('monitor', 'pc accessories', 140, 10, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) 
VALUES('gloves', 'hardware', 5, 30, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) 
VALUES('pencil', 'stationary', 2, 0, 22);


